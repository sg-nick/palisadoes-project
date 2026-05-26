import React, { useEffect, useState } from "react";
import { Trash2, UploadCloud } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { api } from "../../lib/api";

const CATS = ["Events", "Community", "Branches", "Staff", "General"];

const AdminGallery = () => {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Events");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const load = () => api.get("/gallery").then((r) => setList(r.data || []));
  useEffect(() => { load(); }, []);

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 4 * 1024 * 1024) {
      toast({ title: "Image too large", description: "Please use an image under 4 MB.", variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(f);
  };

  const submit = async () => {
    if (!title || !file) {
      toast({ title: "Title and image required", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await api.post("/admin/gallery", { title, category, description, image_base64: file });
      toast({ title: "Photo uploaded" });
      setTitle(""); setDescription(""); setFile(null); setPreview(null);
      await load();
    } catch (e) {
      toast({ title: "Upload failed", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this photo?")) return;
    await api.delete(`/admin/gallery/${id}`);
    toast({ title: "Photo deleted" });
    load();
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Gallery</h1>
        <p className="text-slate-400 mt-1">Upload and manage public photos.</p>
      </div>

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-5">Upload new photo</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-4">
            <div>
              <Label className="text-slate-300">Title</Label>
              <Input
                data-testid="gal-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white mt-1.5"
              />
            </div>
            <div>
              <Label className="text-slate-300">Category</Label>
              <select
                data-testid="gal-cat"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1.5 h-10 rounded-md bg-slate-800 border border-slate-700 text-white px-3 text-sm"
              >
                {CATS.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label className="text-slate-300">Description (optional)</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white mt-1.5"
              />
            </div>
            <div>
              <Label className="text-slate-300">Image (max 4 MB)</Label>
              <input
                data-testid="gal-file"
                type="file"
                accept="image/*"
                onChange={onFile}
                className="block w-full mt-1.5 text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#8A4D6F] file:text-white hover:file:bg-[#6e3d59]"
              />
            </div>
            <Button onClick={submit} disabled={loading} data-testid="gal-submit" className="bg-gradient-to-r from-[#8A4D6F] to-[#0d9488] text-white">
              <UploadCloud className="w-4 h-4 mr-2" /> Upload
            </Button>
          </div>
          <div className="border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center bg-slate-800/40 min-h-[220px]">
            {preview ? (
              <img src={preview} alt="preview" className="max-h-72 object-contain rounded-lg" />
            ) : (
              <div className="text-slate-500 text-sm text-center px-4">Preview will appear here</div>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">All photos ({list.length})</h3>
        {list.length === 0 ? (
          <p className="text-slate-500 text-sm">No photos uploaded yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((g) => (
              <div key={g.id} className="relative group rounded-xl overflow-hidden bg-slate-800 aspect-[4/3]">
                <img src={g.image_base64} alt={g.title} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-[10px] uppercase tracking-wider text-purple-300">{g.category}</div>
                  <div className="font-semibold text-white truncate">{g.title}</div>
                </div>
                <button
                  onClick={() => remove(g.id)}
                  className="absolute top-2 right-2 p-2 rounded-md bg-rose-500/80 hover:bg-rose-600 text-white opacity-0 group-hover:opacity-100 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminGallery;
