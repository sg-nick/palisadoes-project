import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image as ImageIcon, ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { api } from "../lib/api";
import { fallbackGallery } from "../mock/contentData";

const BACKEND = process.env.REACT_APP_BACKEND_URL || "";

const HomeGallerySection = () => {
  const [items, setItems] = useState(fallbackGallery.slice(0, 6));
  const [active, setActive] = useState(null);

  useEffect(() => {
    Promise.all([
      api.get("/gallery").catch(() => ({ data: [] })),
      api.get("/gallery-folder").catch(() => ({ data: [] })),
    ]).then(([up, folder]) => {
      const folderItems = (folder.data || []).map((it) => ({
        ...it,
        image_base64: it.image_base64.startsWith("http") ? it.image_base64 : `${BACKEND}${it.image_base64}`,
      }));
      const merged = [...(up.data || []), ...folderItems, ...fallbackGallery].slice(0, 6);
      setItems(merged);
    });
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Moments from our community</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">A glimpse into the events, branches and people that shape us.</p>
        </div>
        <Link to="/gallery" data-testid="home-gallery-cta">
          <Button variant="outline" className="border-[#8A4D6F] text-[#8A4D6F] hover:bg-purple-50">
            View full gallery <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((g, i) => (
          <motion.button
            key={g.id}
            data-testid={`home-gallery-item-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            onClick={() => setActive(g)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-2xl transition-shadow text-left"
          >
            <img
              src={g.image_base64}
              alt={g.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-[10px] uppercase tracking-wider text-purple-200">{g.category}</div>
              <div className="font-semibold text-sm">{g.title}</div>
            </div>
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/85 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-[#8A4D6F]">
              <ImageIcon className="w-3 h-3 inline-block mr-1" />
              {g.category}
            </div>
          </motion.button>
        ))}
      </div>

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
    </section>
  );
};

export default HomeGallerySection;
