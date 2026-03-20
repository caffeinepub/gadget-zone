import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit2, ImagePlus, Loader2, Plus, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import type { BlogPost } from "../../backend.d";
import { useActor } from "../../hooks/useActor";
import { useImageUpload } from "../../hooks/useImageUpload";

const EMPTY_FORM = {
  title: "",
  slug: "",
  content: "",
  excerpt: "",
  imageUrl: "",
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function formatDate(nanoseconds: bigint) {
  return new Date(Number(nanoseconds) / 1_000_000).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogManager() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const { uploadImage, uploading, progress } = useImageUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<bigint | null>(null);
  const [editItem, setEditItem] = useState<BlogPost | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["admin", "blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getBlogPosts();
      return [...result].sort(
        (a, b) => Number(b.publishedAt) - Number(a.publishedAt),
      );
    },
    enabled: !!actor && !isFetching,
  });

  const createMutation = useMutation({
    mutationFn: async (f: typeof form) => {
      if (!actor) throw new Error("No actor");
      return actor.createBlogPost(
        f.title,
        f.slug,
        f.content,
        f.excerpt,
        f.imageUrl,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "blogPosts"] });
      queryClient.invalidateQueries({ queryKey: ["blogPosts"] });
      toast.success("Blog post created");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to create blog post"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, f }: { id: bigint; f: typeof form }) => {
      if (!actor) throw new Error("No actor");
      return actor.updateBlogPost(
        id,
        f.title,
        f.slug,
        f.content,
        f.excerpt,
        f.imageUrl,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "blogPosts"] });
      queryClient.invalidateQueries({ queryKey: ["blogPosts"] });
      toast.success("Blog post updated");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to update blog post"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      return actor.deleteBlogPost(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "blogPosts"] });
      queryClient.invalidateQueries({ queryKey: ["blogPosts"] });
      toast.success("Blog post deleted");
      setDeleteId(null);
    },
    onError: () => toast.error("Failed to delete blog post"),
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadImage(file);
      setForm((p) => ({ ...p, imageUrl: url }));
      toast.success("Image uploaded");
    } catch {
      toast.error("Failed to upload image");
    }
  };

  const openAdd = () => {
    setEditItem(null);
    setForm(EMPTY_FORM);
    setDialogOpen(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditItem(post);
    setForm({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      imageUrl: post.imageUrl,
    });
    setDialogOpen(true);
  };

  const handleTitleChange = (title: string) => {
    setForm((p) => ({ ...p, title, slug: editItem ? p.slug : slugify(title) }));
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.slug.trim() || !form.content.trim()) {
      toast.error("Title, slug, and content are required");
      return;
    }
    if (editItem) {
      updateMutation.mutate({ id: editItem.id, f: form });
    } else {
      createMutation.mutate(form);
    }
  };

  const isSaving = createMutation.isPending || updateMutation.isPending;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Blog Manager</h2>
          <p className="text-sm text-muted-foreground">
            {posts.length} articles
          </p>
        </div>
        <Button onClick={openAdd} data-ocid="blog.open_modal_button">
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>

      {isLoading ? (
        <div
          className="flex items-center gap-2 py-10 justify-center text-muted-foreground"
          data-ocid="blog.loading_state"
        >
          <Loader2 className="w-5 h-5 animate-spin" /> Loading...
        </div>
      ) : posts.length === 0 ? (
        <div
          className="text-center py-16 text-muted-foreground"
          data-ocid="blog.empty_state"
        >
          <p className="text-lg font-medium mb-2">No blog posts yet</p>
          <p className="text-sm">Create your first blog post to get started.</p>
        </div>
      ) : (
        <div className="space-y-3" data-ocid="blog.list">
          {posts.map((post, i) => (
            <div
              key={String(post.id)}
              className="bg-card border border-border rounded-xl p-4 flex gap-4 items-center"
              data-ocid={`blog.item.${i + 1}`}
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{post.title}</p>
                <p className="text-xs text-muted-foreground mb-1">
                  {formatDate(post.publishedAt)} · /{post.slug}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex gap-1 shrink-0">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => openEdit(post)}
                  data-ocid={`blog.edit_button.${i + 1}`}
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  onClick={() => setDeleteId(post.id)}
                  data-ocid={`blog.delete_button.${i + 1}`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] overflow-y-auto"
          data-ocid="blog.dialog"
        >
          <DialogHeader>
            <DialogTitle>
              {editItem ? "Edit Blog Post" : "New Blog Post"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label>Title *</Label>
              <Input
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Post title"
                data-ocid="blog.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Slug *</Label>
              <Input
                value={form.slug}
                onChange={(e) =>
                  setForm((p) => ({ ...p, slug: slugify(e.target.value) }))
                }
                placeholder="url-friendly-slug"
              />
              <p className="text-xs text-muted-foreground">
                URL: /blog/{form.slug || "..."}
              </p>
            </div>
            <div className="space-y-1.5">
              <Label>Excerpt</Label>
              <Textarea
                value={form.excerpt}
                onChange={(e) =>
                  setForm((p) => ({ ...p, excerpt: e.target.value }))
                }
                placeholder="Short description for the blog listing page"
                rows={2}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Content *</Label>
              <Textarea
                value={form.content}
                onChange={(e) =>
                  setForm((p) => ({ ...p, content: e.target.value }))
                }
                placeholder="Full article content..."
                rows={8}
                data-ocid="blog.textarea"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Cover Image URL</Label>
              <div className="flex gap-2">
                <Input
                  value={form.imageUrl}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, imageUrl: e.target.value }))
                  }
                  placeholder="https://..."
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  data-ocid="blog.upload_button"
                >
                  {uploading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ImagePlus className="w-4 h-4" />
                  )}
                </Button>
              </div>
              {uploading && <Progress value={progress} className="h-1" />}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              {form.imageUrl && (
                <img
                  src={form.imageUrl}
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-lg mt-2"
                />
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              data-ocid="blog.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSaving}
              data-ocid="blog.submit_button"
            >
              {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {editItem ? "Save Changes" : "Publish Post"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={deleteId !== null}
        onOpenChange={(o) => !o && setDeleteId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Blog Post?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this post and cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="blog.cancel_button">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              data-ocid="blog.confirm_button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
