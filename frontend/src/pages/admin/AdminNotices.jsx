import React, { useEffect, useState } from "react";
import { Trash2, Edit2, Save, X, Megaphone, ImagePlus } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { api } from "../../lib/api";

const TYPES = ["info", "warning", "success", "event"];

const empty = { title: "", body: "", type: "info", active: true, link: "", poster_image: "" };

const AdminNotices = () => {
  const [list, setList] = useState([]);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const load = () => api.get("/admin/notices").then((r) => setList(r.data || []));
  useEffect(() => { load(); }, []);

  const submit = async () => {
    if (!form.title || !form.body) {
      toast({ title: "Title and body required", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      if (editId) {
        await api.put(`/admin/notices/${editId}`, form);
        toast({ title: "Notice updated" });
      } else {
        await api.post("/admin/notices", form);
        toast({ title: "Notice created" });
      }
      setForm(empty);
      setEditId(null);
      await load();
    } catch (e) {
      toast({ title: "Save failed", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this notice?")) return;
    await api.delete(`/admin/notices/${id}`);
    toast({ title: "Notice deleted" });
    load();
  };

  const startEdit = (n) => {
    setEditId(n.id);
    setForm({
      title: n.title,
      body: n.body,
      type: n.type,
      active: n.active,
      link: n.link || "",
      poster_image: n.poster_image || "",
    });
  };

  const handlePoster = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast({ title: "Please choose an image file", variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setForm((prev) => ({ ...prev, poster_image: reader.result }));
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Notices</h1>
        <p className="text-slate-400 mt-1">Publish sliding announcements visible to all visitors.</p>
      </div>

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 mb-8">
        <div className="flex items-center gap-2 mb-5">
          <Megaphone className="w-5 h-5 text-[#8A4D6F]" />
          <h3 className="text-lg font-semibold text-white">{editId ? "Edit notice" : "New notice"}</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label className="text-slate-300">Title</Label>
            <Input
              data-testid="notice-title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white mt-1.5"
              placeholder="e.g. AGM 2026 scheduled"
            />
          </div>
          <div>
            <Label className="text-slate-300">Type</Label>
            <select
              data-testid="notice-type"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full mt-1.5 h-10 rounded-md bg-slate-800 border border-slate-700 text-white px-3 text-sm"
            >
              {TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <Label className="text-slate-300">Body</Label>
            <Textarea
              data-testid="notice-body"
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white mt-1.5 min-h-[90px]"
              placeholder="Short message visible to visitors"
            />
          </div>
          <div>
            <Label className="text-slate-300">Optional link</Label>
            <Input
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white mt-1.5"
              placeholder="https://..."
            />
          </div>
          <div>
            <Label className="text-slate-300">Poster image</Label>
            <label className="mt-1.5 flex h-10 cursor-pointer items-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-3 text-sm text-slate-300 hover:bg-slate-700">
              <ImagePlus className="w-4 h-4" />
              Upload poster
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handlePoster(e.target.files?.[0])}
              />
            </label>
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.checked })}
                className="rounded"
              />
              Active (visible to public)
            </label>
          </div>
          {form.poster_image && (
            <div className="md:col-span-2 rounded-xl border border-slate-800 bg-slate-950 p-3">
              <div className="flex items-start justify-between gap-3">
                <img src={form.poster_image} alt="Poster preview" className="max-h-56 w-full rounded-lg object-contain bg-slate-900" />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, poster_image: "" })}
                  className="shrink-0 rounded-md bg-slate-800 p-2 text-slate-300 hover:bg-slate-700"
                  aria-label="Remove poster"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-5">
          <Button onClick={submit} disabled={loading} data-testid="notice-save" className="bg-gradient-to-r from-[#8A4D6F] to-[#0d9488] text-white">
            <Save className="w-4 h-4 mr-2" /> {editId ? "Update" : "Publish"}
          </Button>
          {editId && (
            <Button variant="outline" onClick={() => { setForm(empty); setEditId(null); }} className="border-slate-700 text-slate-200 hover:bg-slate-800">
              <X className="w-4 h-4 mr-2" /> Cancel
            </Button>
          )}
        </div>
      </div>

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">All notices ({list.length})</h3>
        {list.length === 0 ? (
          <p className="text-slate-500 text-sm">No notices yet. Publish your first one above.</p>
        ) : (
          <div className="space-y-3">
            {list.map((n) => (
              <div key={n.id} className="p-4 rounded-xl bg-slate-800/60 border border-slate-800 flex items-start justify-between gap-4" data-testid={`notice-row-${n.id}`}>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-[#8A4D6F]/20 text-purple-300">{n.type}</span>
                    {!n.active && <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">Inactive</span>}
                    {n.poster_image && <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300">Poster</span>}
                    <h4 className="font-semibold text-white">{n.title}</h4>
                  </div>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">{n.body}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => startEdit(n)} className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => remove(n.id)} className="p-2 rounded-md bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNotices;
