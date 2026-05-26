import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, X, Search } from "lucide-react";
import PageHero from "../components/PageHero";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { api } from "../lib/api";
import { fallbackGallery } from "../mock/contentData";

const BACKEND = process.env.REACT_APP_BACKEND_URL || "";

const CATEGORIES = ["All", "Events", "Community", "Branches", "Staff", "General"];

const Gallery = () => {
  const [items, setItems] = useState(fallbackGallery);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  useEffect(() => {
    Promise.all([
      api.get("/gallery").catch(() => ({ data: [] })),
      api.get("/gallery-folder").catch(() => ({ data: [] })),
    ])
      .then(([up, folder]) => {
        const folderItems = (folder.data || []).map((it) => ({
          ...it,
          image_base64: it.image_base64.startsWith("http") ? it.image_base64 : `${BACKEND}${it.image_base64}`,
        }));
        setItems([...(up.data || []), ...folderItems, ...fallbackGallery]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = items.filter((g) => {
    const okCat = cat === "All" || g.category === cat;
    const okQ = !query || g.title.toLowerCase().includes(query.toLowerCase());
    return okCat && okQ;
  });

  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Moments that define our community"
        subtitle="A visual journey through our events, branches and the members we proudly serve."
        breadcrumb="Gallery"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              data-testid="gallery-search"
              placeholder="Search photos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                data-testid={`gallery-cat-${c}`}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  cat === c
                    ? "bg-[#8A4D6F] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl bg-slate-100 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20" data-testid="gallery-empty">
            <ImageIcon className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <p className="text-slate-500">No photos yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((g, idx) => (
              <motion.button
                key={g.id}
                data-testid="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.06 }}
                onClick={() => setActive(g)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-2xl transition-shadow text-left"
              >
                <img
                  src={g.image_base64}
                  alt={g.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs uppercase tracking-wider text-purple-200">{g.category}</div>
                  <div className="font-semibold">{g.title}</div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
          {active && (
            <div className="relative">
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={active.image_base64} alt={active.title} className="w-full max-h-[80vh] object-contain" />
              <div className="p-5 bg-slate-900 text-white">
                <div className="text-xs uppercase tracking-wider text-purple-300">{active.category}</div>
                <h3 className="text-lg font-bold mt-1">{active.title}</h3>
                {active.description && <p className="mt-1 text-sm text-slate-300">{active.description}</p>}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
