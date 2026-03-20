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
import { Badge } from "@/components/ui/badge";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit2, ImagePlus, Loader2, Plus, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import type { Product } from "../../backend.d";
import { useActor } from "../../hooks/useActor";
import { useImageUpload } from "../../hooks/useImageUpload";

const BRANDS = [
  "Apple",
  "Samsung",
  "Motorola",
  "OnePlus",
  "Xiaomi",
  "Vivo",
  "Realme",
  "Nothing",
];

const EMPTY_FORM = {
  brand: "Samsung",
  name: "",
  price: "",
  storageOptions: "",
  emiAvailable: true,
  whatsappMessage: "",
  imageUrl: "",
};

export default function ProductsManager() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const { uploadImage, uploading, progress } = useImageUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [brandFilter, setBrandFilter] = useState("All");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<bigint | null>(null);
  const [editItem, setEditItem] = useState<Product | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["admin", "products", brandFilter],
    queryFn: async () => {
      if (!actor) return [];
      if (brandFilter === "All") return actor.getProducts();
      return actor.getProductsByBrand(brandFilter);
    },
    enabled: !!actor && !isFetching,
  });

  const createMutation = useMutation({
    mutationFn: async (f: typeof form) => {
      if (!actor) throw new Error("No actor");
      const storageArr = f.storageOptions
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      return actor.createProduct(
        f.brand,
        f.name,
        BigInt(Math.round(Number(f.price) || 0)),
        storageArr,
        f.emiAvailable,
        f.whatsappMessage,
        f.imageUrl,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "products"] });
      toast.success("Product added");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to add product"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, f }: { id: bigint; f: typeof form }) => {
      if (!actor) throw new Error("No actor");
      const storageArr = f.storageOptions
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      return actor.updateProduct(
        id,
        f.brand,
        f.name,
        BigInt(Math.round(Number(f.price) || 0)),
        storageArr,
        f.emiAvailable,
        f.whatsappMessage,
        f.imageUrl,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "products"] });
      toast.success("Product updated");
      setDialogOpen(false);
    },
    onError: () => toast.error("Failed to update product"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      return actor.deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "products"] });
      toast.success("Product deleted");
      setDeleteId(null);
    },
    onError: () => toast.error("Failed to delete product"),
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
    setForm({
      ...EMPTY_FORM,
      brand: brandFilter === "All" ? "Samsung" : brandFilter,
    });
    setDialogOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditItem(product);
    setForm({
      brand: product.brand,
      name: product.name,
      price: String(Number(product.price)),
      storageOptions: product.storageOptions.join(", "),
      emiAvailable: product.emiAvailable,
      whatsappMessage: product.whatsappMessage,
      imageUrl: product.imageUrl,
    });
    setDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!form.name.trim()) {
      toast.error("Product name is required");
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
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold">Products Manager</h2>
          <p className="text-sm text-muted-foreground">
            {products.length} products
          </p>
        </div>
        <div className="flex gap-3">
          <Select value={brandFilter} onValueChange={setBrandFilter}>
            <SelectTrigger className="w-36" data-ocid="products.select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Brands</SelectItem>
              {BRANDS.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={openAdd} data-ocid="products.open_modal_button">
            <Plus className="w-4 h-4 mr-2" /> Add Product
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div
          className="flex items-center gap-2 py-10 justify-center text-muted-foreground"
          data-ocid="products.loading_state"
        >
          <Loader2 className="w-5 h-5 animate-spin" /> Loading...
        </div>
      ) : products.length === 0 ? (
        <div
          className="text-center py-16 text-muted-foreground"
          data-ocid="products.empty_state"
        >
          <p className="text-lg font-medium mb-2">No products found</p>
          <p className="text-sm">
            {brandFilter !== "All"
              ? `No products for ${brandFilter} yet.`
              : "Add your first product to get started."}
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          data-ocid="products.list"
        >
          {products.map((product, i) => (
            <div
              key={String(product.id)}
              className="bg-card border border-border rounded-xl overflow-hidden"
              data-ocid={`products.item.${i + 1}`}
            >
              <div className="relative h-36 bg-muted">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <ImagePlus className="w-8 h-8" />
                  </div>
                )}
                <div className="absolute top-2 left-2 flex gap-1">
                  <Badge variant="secondary" className="text-xs">
                    {product.brand}
                  </Badge>
                  {product.emiAvailable && (
                    <Badge className="text-xs bg-green-600 text-white">
                      EMI
                    </Badge>
                  )}
                </div>
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm truncate mb-1">
                  {product.name}
                </p>
                <p className="text-sm font-bold text-primary mb-1">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </p>
                {product.storageOptions.length > 0 && (
                  <p className="text-xs text-muted-foreground mb-2">
                    {product.storageOptions.join(" / ")}
                  </p>
                )}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => openEdit(product)}
                    data-ocid={`products.edit_button.${i + 1}`}
                  >
                    <Edit2 className="w-3 h-3 mr-1" /> Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setDeleteId(product.id)}
                    data-ocid={`products.delete_button.${i + 1}`}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="max-w-lg max-h-[90vh] overflow-y-auto"
          data-ocid="products.dialog"
        >
          <DialogHeader>
            <DialogTitle>
              {editItem ? "Edit Product" : "Add Product"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Brand *</Label>
                <Select
                  value={form.brand}
                  onValueChange={(v) => setForm((p) => ({ ...p, brand: v }))}
                >
                  <SelectTrigger data-ocid="products.select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {BRANDS.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Price (₹)</Label>
                <Input
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, price: e.target.value }))
                  }
                  placeholder="e.g. 15999"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Product Name *</Label>
              <Input
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="e.g. Samsung Galaxy S24"
                data-ocid="products.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Storage Options</Label>
              <Input
                value={form.storageOptions}
                onChange={(e) =>
                  setForm((p) => ({ ...p, storageOptions: e.target.value }))
                }
                placeholder="e.g. 128GB, 256GB, 512GB"
              />
              <p className="text-xs text-muted-foreground">
                Comma-separated list of storage variants
              </p>
            </div>
            <div className="space-y-1.5">
              <Label>WhatsApp Enquiry Message</Label>
              <Textarea
                value={form.whatsappMessage}
                onChange={(e) =>
                  setForm((p) => ({ ...p, whatsappMessage: e.target.value }))
                }
                placeholder="Hi, I'm interested in the Samsung Galaxy S24 at Gadget Zone"
                rows={2}
                data-ocid="products.textarea"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Image URL</Label>
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
                  data-ocid="products.upload_button"
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
                  className="w-24 h-24 object-cover rounded-lg mt-1"
                />
              )}
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={form.emiAvailable}
                onCheckedChange={(v) =>
                  setForm((p) => ({ ...p, emiAvailable: v }))
                }
                data-ocid="products.switch"
              />
              <Label>EMI Available</Label>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              data-ocid="products.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSaving || uploading}
              data-ocid="products.submit_button"
            >
              {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {editItem ? "Save Changes" : "Add Product"}
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
            <AlertDialogTitle>Delete Product?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove this product. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="products.cancel_button">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              data-ocid="products.confirm_button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
