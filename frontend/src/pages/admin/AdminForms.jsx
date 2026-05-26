import React, { useEffect, useState } from "react";
import { Trash2, Plus, FileText } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { api } from "../../lib/api";

const CATS = ["Membership", "Loans", "Savings", "Banking & Agreements", "Requests & Other"];

const AdminForms = () => {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name: "", category: "Membership", url: "", size: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const load = () => api.get("/forms").then((r) => setList(r.data || []));
  useEffect(() => { load(); }, []);

  const submit = async () => {
    if (!form.name || !form.url) {
      toast({ title: "Name and URL required", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await api.post("/admin/forms", form);
      toast({ title: "Form added" });
      setForm({ name: "", category: form.category, url: "", size: "" });
      load();
    } catch (e) {
      toast({ title: "Failed to add", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this form entry?")) return;
    await api.delete(`/admin/forms/${id}`);
    toast({ title: "Form removed" });
    load();
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Forms</h1>
        <p className="text-slate-400 mt-1">Add downloadable PDF forms by URL.</p>
      </div>

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-5">Add new form</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label className="text-slate-300">Name</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-slate-800 border-slate-700 text-white mt-1.5" placeholder="e.g. Loan Application Form" />
          </div>
          <div>
            <Label className="text-slate-300">Category</Label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full mt-1.5 h-10 rounded-md bg-slate-800 border border-slate-700 text-white px-3 text-sm"
            >
              {CATS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <Label className="text-slate-300">PDF URL</Label>
            <Input value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} className="bg-slate-800 border-slate-700 text-white mt-1.5" placeholder="/forms/my-form.pdf or https://..." />
          </div>
          <div>
            <Label className="text-slate-300">Size (display only)</Label>
            <Input value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="bg-slate-800 border-slate-700 text-white mt-1.5" placeholder="120 KB" />
          </div>
        </div>
        <Button onClick={submit} disabled={loading} className="bg-gradient-to-r from-[#8A4D6F] to-[#0d9488] text-white mt-5">
          <Plus className="w-4 h-4 mr-2" /> Add Form
        </Button>
      </div>

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Custom forms ({list.length})</h3>
        {list.length === 0 ? (
          <p className="text-slate-500 text-sm">No custom forms yet. PDF assets in /public/forms remain available.</p>
        ) : (
          <div className="space-y-3">
            {list.map((f) => (
              <div key={f.id} className="p-4 rounded-xl bg-slate-800/60 border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="w-5 h-5 text-[#8A4D6F] shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-white truncate">{f.name}</div>
                    <div className="text-xs text-slate-400 truncate">{f.category} · {f.url}</div>
                  </div>
                </div>
                <button onClick={() => remove(f.id)} className="p-2 rounded-md bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 shrink-0">
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

export default AdminForms;
