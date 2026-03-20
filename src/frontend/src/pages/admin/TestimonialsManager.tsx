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
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit2, Loader2, Plus, Star, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Testimonial } from "../../backend.d";
import { useActor } from "../../hooks/useActor";

const EMPTY_FORM = { customerName: "", review: "", rating: 5, product: "" };

function StarSelector({
  value,
  onChange,
}: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className="transition-transform hover:scale-110"
          data-ocid={`testimonial.star.${n}`}
        >
          <Star
            className={`w-6 h-6 ${n <= value ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
          />
        </button>
      ))}
    </div>
  );
}

export default function TestimonialsManager() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<bigint | null>(null);
  const [editItem, setEditItem] = useState<Testimonial | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["admin", "testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTestimonials();
    },
    enabled: !!actor && !isFetching,
  });

  const createMutation = useMutation({
    mutationFn: async (f: typeof form) => {
      if (!actor) throw new Error("No actor");
      return actor.createTestimonial(
        f.customerName,
        f.review,
        BigInt(f.rating),
        f.product,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      toast.success("Testimonial added");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to add testimonial"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, f }: { id: bigint; f: typeof form }) => {
      if (!actor) throw new Error("No actor");
      return actor.updateTestimonial(
        id,
        f.customerName,
        f.review,
        BigInt(f.rating),
        f.product,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      toast.success("Testimonial updated");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to update testimonial"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      return actor.deleteTestimonial(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      toast.success("Testimonial deleted");
      setDeleteId(null);
    },
    onError: () => toast.error("Failed to delete testimonial"),
  });

  const openAdd = () => {
    setEditItem(null);
    setForm(EMPTY_FORM);
    setDialogOpen(true);
  };

  const openEdit = (item: Testimonial) => {
    setEditItem(item);
    setForm({
      customerName: item.customerName,
      review: item.review,
      rating: Number(item.rating),
      product: item.product,
    });
    setDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!form.customerName.trim() || !form.review.trim()) {
      toast.error("Name and review are required");
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
          <h2 className="text-xl font-bold">Testimonials</h2>
          <p className="text-sm text-muted-foreground">
            {items.length} reviews
          </p>
        </div>
        <Button onClick={openAdd} data-ocid="testimonials.open_modal_button">
          <Plus className="w-4 h-4 mr-2" /> Add Testimonial
        </Button>
      </div>

      {isLoading ? (
        <div
          className="flex items-center gap-2 py-10 justify-center text-muted-foreground"
          data-ocid="testimonials.loading_state"
        >
          <Loader2 className="w-5 h-5 animate-spin" /> Loading...
        </div>
      ) : items.length === 0 ? (
        <div
          className="text-center py-16 text-muted-foreground"
          data-ocid="testimonials.empty_state"
        >
          <p className="text-lg font-medium mb-2">No testimonials yet</p>
          <p className="text-sm">
            Add your first customer review to get started.
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          data-ocid="testimonials.list"
        >
          {items.map((item, i) => (
            <div
              key={String(item.id)}
              className="bg-card border border-border rounded-xl p-4"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <p className="font-semibold text-sm">{item.customerName}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.product}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => openEdit(item)}
                    data-ocid={`testimonials.edit_button.${i + 1}`}
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setDeleteId(item.id)}
                    data-ocid={`testimonials.delete_button.${i + 1}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={`w-3.5 h-3.5 ${n <= Number(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-3">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg" data-ocid="testimonials.dialog">
          <DialogHeader>
            <DialogTitle>
              {editItem ? "Edit Testimonial" : "Add Testimonial"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label>Customer Name *</Label>
              <Input
                value={form.customerName}
                onChange={(e) =>
                  setForm((p) => ({ ...p, customerName: e.target.value }))
                }
                placeholder="e.g. Priya S."
                data-ocid="testimonials.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Phone / Product Purchased</Label>
              <Input
                value={form.product}
                onChange={(e) =>
                  setForm((p) => ({ ...p, product: e.target.value }))
                }
                placeholder="e.g. iPhone 15 Pro"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Rating</Label>
              <StarSelector
                value={form.rating}
                onChange={(v) => setForm((p) => ({ ...p, rating: v }))}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Review *</Label>
              <Textarea
                value={form.review}
                onChange={(e) =>
                  setForm((p) => ({ ...p, review: e.target.value }))
                }
                placeholder="Customer's review..."
                rows={4}
                data-ocid="testimonials.textarea"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              data-ocid="testimonials.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSaving}
              data-ocid="testimonials.submit_button"
            >
              {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {editItem ? "Save Changes" : "Add Testimonial"}
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
            <AlertDialogTitle>Delete Testimonial?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this review. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="testimonials.cancel_button">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              data-ocid="testimonials.confirm_button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
