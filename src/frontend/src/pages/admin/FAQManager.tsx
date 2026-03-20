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
import {
  ChevronDown,
  ChevronUp,
  Edit2,
  Loader2,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { FaqItem } from "../../backend.d";
import { useActor } from "../../hooks/useActor";

const EMPTY_FORM = { question: "", answer: "", position: "1" };

export default function FAQManager() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<bigint | null>(null);
  const [editItem, setEditItem] = useState<FaqItem | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["admin", "faqItems"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getFaqItems();
      return [...result].sort(
        (a, b) => Number(a.position) - Number(b.position),
      );
    },
    enabled: !!actor && !isFetching,
  });

  const createMutation = useMutation({
    mutationFn: async (f: typeof form) => {
      if (!actor) throw new Error("No actor");
      return actor.createFaqItem(
        f.question,
        f.answer,
        BigInt(Number(f.position) || 1),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "faqItems"] });
      queryClient.invalidateQueries({ queryKey: ["faqItems"] });
      toast.success("FAQ item added");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to add FAQ item"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, f }: { id: bigint; f: typeof form }) => {
      if (!actor) throw new Error("No actor");
      return actor.updateFaqItem(
        id,
        f.question,
        f.answer,
        BigInt(Number(f.position) || 1),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "faqItems"] });
      queryClient.invalidateQueries({ queryKey: ["faqItems"] });
      toast.success("FAQ item updated");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to update FAQ item"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      return actor.deleteFaqItem(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "faqItems"] });
      queryClient.invalidateQueries({ queryKey: ["faqItems"] });
      toast.success("FAQ item deleted");
      setDeleteId(null);
    },
    onError: () => toast.error("Failed to delete FAQ item"),
  });

  const openAdd = () => {
    setEditItem(null);
    setForm({ ...EMPTY_FORM, position: String(items.length + 1) });
    setDialogOpen(true);
  };

  const openEdit = (item: FaqItem) => {
    setEditItem(item);
    setForm({
      question: item.question,
      answer: item.answer,
      position: String(Number(item.position)),
    });
    setDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!form.question.trim() || !form.answer.trim()) {
      toast.error("Question and answer are required");
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
          <h2 className="text-xl font-bold">FAQ Manager</h2>
          <p className="text-sm text-muted-foreground">
            {items.length} questions
          </p>
        </div>
        <Button onClick={openAdd} data-ocid="faq.open_modal_button">
          <Plus className="w-4 h-4 mr-2" /> Add Question
        </Button>
      </div>

      {isLoading ? (
        <div
          className="flex items-center gap-2 py-10 justify-center text-muted-foreground"
          data-ocid="faq.loading_state"
        >
          <Loader2 className="w-5 h-5 animate-spin" /> Loading...
        </div>
      ) : items.length === 0 ? (
        <div
          className="text-center py-16 text-muted-foreground"
          data-ocid="faq.empty_state"
        >
          <p className="text-lg font-medium mb-2">No FAQ items yet</p>
          <p className="text-sm">Add your first question to get started.</p>
        </div>
      ) : (
        <div className="space-y-3" data-ocid="faq.list">
          {items.map((item, i) => (
            <div
              key={String(item.id)}
              className="bg-card border border-border rounded-xl p-4"
              data-ocid={`faq.item.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      #{Number(item.position)}
                    </span>
                    <p className="font-medium text-sm truncate">
                      {item.question}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {item.answer}
                  </p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => openEdit(item)}
                    data-ocid={`faq.edit_button.${i + 1}`}
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setDeleteId(item.id)}
                    data-ocid={`faq.delete_button.${i + 1}`}
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
        <DialogContent className="max-w-lg" data-ocid="faq.dialog">
          <DialogHeader>
            <DialogTitle>
              {editItem ? "Edit FAQ Item" : "Add FAQ Item"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label>Question *</Label>
              <Input
                value={form.question}
                onChange={(e) =>
                  setForm((p) => ({ ...p, question: e.target.value }))
                }
                placeholder="e.g. Do you offer EMI?"
                data-ocid="faq.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Answer *</Label>
              <Textarea
                value={form.answer}
                onChange={(e) =>
                  setForm((p) => ({ ...p, answer: e.target.value }))
                }
                placeholder="Detailed answer..."
                rows={4}
                data-ocid="faq.textarea"
              />
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
              data-ocid="faq.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSaving}
              data-ocid="faq.submit_button"
            >
              {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {editItem ? "Save Changes" : "Add Question"}
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
            <AlertDialogTitle>Delete FAQ Item?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this question. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="faq.cancel_button">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              data-ocid="faq.confirm_button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
