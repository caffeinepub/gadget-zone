import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Save, Type } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "../../hooks/useActor";

export default function MarqueeManager() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const [text, setText] = useState("");

  const { data: currentText, isLoading } = useQuery({
    queryKey: ["admin", "marqueeText"],
    queryFn: async () => {
      if (!actor) return "";
      return actor.getMarqueeText();
    },
    enabled: !!actor && !isFetching,
  });

  useEffect(() => {
    if (currentText !== undefined) setText(currentText);
  }, [currentText]);

  const saveMutation = useMutation({
    mutationFn: async (newText: string) => {
      if (!actor) throw new Error("No actor");
      await actor.setMarqueeText(newText);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "marqueeText"] });
      queryClient.invalidateQueries({ queryKey: ["marqueeText"] });
      toast.success("Marquee text updated");
    },
    onError: () => toast.error("Failed to update marquee text"),
  });

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Type className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Marquee Text</h2>
          <p className="text-sm text-muted-foreground">
            Edit the scrolling banner text shown at the top of the homepage
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="marquee-text">Scrolling Banner Text</Label>
          <p className="text-xs text-muted-foreground">
            Use | to separate items. Add spaces around | for better readability.
          </p>
          {isLoading ? (
            <div className="flex items-center gap-2 py-4 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading current text...
            </div>
          ) : (
            <Textarea
              id="marquee-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="Mobile Phone's   |   Tablets   |   CCTV   |   ..."
              className="font-mono text-sm"
              data-ocid="marquee.textarea"
            />
          )}
        </div>

        {text && (
          <div className="rounded-lg bg-muted/40 p-3">
            <p className="text-xs text-muted-foreground mb-1">Preview:</p>
            <p className="text-sm truncate">{text}</p>
          </div>
        )}

        <Button
          onClick={() => saveMutation.mutate(text)}
          disabled={saveMutation.isPending || isLoading}
          data-ocid="marquee.save_button"
        >
          {saveMutation.isPending ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          Save Marquee Text
        </Button>
      </div>
    </div>
  );
}
