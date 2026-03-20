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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArrowDown,
  ArrowUp,
  Edit2,
  ImagePlus,
  Loader2,
  Plus,
  Trash2,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import type { BannerSlide } from "../../backend.d";
import { useActor } from "../../hooks/useActor";
import { useImageUpload } from "../../hooks/useImageUpload";

const EMPTY_FORM = { title: "", subtitle: "", imageUrl: "", position: "1" };

export default function BannersManager() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const { uploadImage, uploading, progress } = useImageUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<bigint | null>(null);
  const [editItem, setEditItem] = useState<BannerSlide | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const { data: slides = [], isLoading } = useQuery({
    queryKey: ["admin", "bannerSlides"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getBannerSlides();
      return [...result].sort(
        (a, b) => Number(a.position) - Number(b.position),
      );
    },
    enabled: !!actor && !isFetching,
  });

  const createMutation = useMutation({
    mutationFn: async (f: typeof form) => {
      if (!actor) throw new Error("No actor");
      return actor.createBannerSlide(
        f.title,
        f.subtitle,
        f.imageUrl,
        BigInt(Number(f.position) || 1),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "bannerSlides"] });
      queryClient.invalidateQueries({ queryKey: ["bannerSlides"] });
      toast.success("Banner slide added");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to add banner slide"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, f }: { id: bigint; f: typeof form }) => {
      if (!actor) throw new Error("No actor");
      return actor.updateBannerSlide(
        id,
        f.title,
        f.subtitle,
        f.imageUrl,
        BigInt(Number(f.position) || 1),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "bannerSlides"] });
      queryClient.invalidateQueries({ queryKey: ["bannerSlides"] });
      toast.success("Banner updated");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to update banner"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      return actor.deleteBannerSlide(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "bannerSlides"] });
      queryClient.invalidateQueries({ queryKey: ["bannerSlides"] });
      toast.success("Banner deleted");
      setDeleteId(null);
    },
    onError: () => toast.error("Failed to delete banner"),
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
    setForm({ ...EMPTY_FORM, position: String(slides.length + 1) });
    setDialogOpen(true);
  };

  const openEdit = (slide: BannerSlide) => {
    setEditItem(slide);
    setForm({
      title: slide.title,
      subtitle: slide.subtitle,
      imageUrl: slide.imageUrl,
      position: String(Number(slide.position)),
    });
    setDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!form.imageUrl.trim()) {
      toast.error("Image URL is required");
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
          <h2 className="text-xl font-bold">Banner Slides</h2>
          <p className="text-sm text-muted-foreground">
            {slides.length} slides
          </p>
        </div>
        <Button onClick={openAdd} data-ocid="banners.open_modal_button">
          <Plus className="w-4 h-4 mr-2" /> Add Slide
        </Button>
      </div>

      {isLoading ? (
        <div
          className="flex items-center gap-2 py-10 justify-center text-muted-foreground"
          data-ocid="banners.loading_state"
        >
          <Loader2 className="w-5 h-5 animate-spin" /> Loading...
        </div>
      ) : slides.length === 0 ? (
        <div
          className="text-center py-16 text-muted-foreground"
          data-ocid="banners.empty_state"
        >
          <p className="text-lg font-medium mb-2">No banner slides yet</p>
          <p className="text-sm">
            Add your first slide to replace the default banners.
          </p>
        </div>
      ) : (
        <div className="space-y-4" data-ocid="banners.list">
          {slides.map((slide, i) => (
            <div
              key={String(slide.id)}
              className="bg-card border border-border rounded-xl overflow-hidden flex"
              data-ocid={`banners.item.${i + 1}`}
            >
              <div className="w-32 h-24 shrink-0 bg-muted">
                {slide.imageUrl ? (
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <ImagePlus className="w-6 h-6" />
                  </div>
                )}
              </div>
              <div className="flex-1 p-4 flex items-center gap-4 min-w-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      #{Number(slide.position)}
                    </span>
                    <p className="font-semibold text-sm truncate">
                      {slide.title || "(No title)"}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {slide.subtitle || "(No subtitle)"}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => openEdit(slide)}
                    data-ocid={`banners.edit_button.${i + 1}`}
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setDeleteId(slide.id)}
                    data-ocid={`banners.delete_button.${i + 1}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg" data-ocid="banners.dialog">
          <DialogHeader>
            <DialogTitle>
              {editItem ? "Edit Banner Slide" : "Add Banner Slide"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label>Heading Title</Label>
              <Input
                value={form.title}
                onChange={(e) =>
                  setForm((p) => ({ ...p, title: e.target.value }))
                }
                placeholder="e.g. Chennai's Trusted Mobile Store"
                data-ocid="banners.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Subtitle</Label>
              <Input
                value={form.subtitle}
                onChange={(e) =>
                  setForm((p) => ({ ...p, subtitle: e.target.value }))
                }
                placeholder="e.g. Samsung · Apple · Motorola..."
              />
            </div>
            <div className="space-y-1.5">
              <Label>Image URL *</Label>
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
                  data-ocid="banners.upload_button"
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
                  className="w-full h-32 object-cover rounded-lg mt-1"
                />
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Position (order)</Label>
              <Input
                type="number"
                min="1"
                value={form.position}
                onChange={(e) =>
                  setForm((p) => ({ ...p, position: e.target.value }))
                }
                placeholder="1"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              data-ocid="banners.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSaving || uploading}
              data-ocid="banners.submit_button"
            >
              {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {editItem ? "Save Changes" : "Add Slide"}
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
            <AlertDialogTitle>Delete Banner Slide?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove this banner slide from the homepage
              carousel.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="banners.cancel_button">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              data-ocid="banners.confirm_button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
