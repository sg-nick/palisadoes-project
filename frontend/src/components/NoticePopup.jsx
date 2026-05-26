import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Megaphone, ChevronLeft, ChevronRight } from "lucide-react";
import { api } from "../lib/api";

const STORAGE_KEY = "pali_notice_dismissed_v1";

const NoticePopup = () => {
  const [notices, setNotices] = useState([]);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    api
      .get("/notices")
      .then((r) => {
        if (r.data && r.data.length) {
          setNotices(r.data);
          setTimeout(() => setOpen(true), 800);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!open || notices.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % notices.length);
    }, 6000);
    return () => clearInterval(t);
  }, [open, notices.length]);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  if (!open || !notices.length) return null;
  const current = notices[idx];

  const accent =
    current.type === "warning"
      ? "from-amber-500 to-orange-500"
      : current.type === "success"
      ? "from-teal-500 to-emerald-600"
      : current.type === "event"
      ? "from-[#8A4D6F] to-[#0d9488]"
      : "from-[#8A4D6F] to-[#9a5d7f]";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-sm">
        <motion.div
          key="card"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className={`w-full ${current.poster_image ? "max-w-4xl" : "max-w-md"}`}
          data-testid="notice-popup"
        >
          <div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-100">
            <div className={`h-1.5 bg-gradient-to-r ${accent}`} />
            {current.poster_image && (
              <div className="bg-slate-950">
                <img
                  src={current.poster_image}
                  alt={current.title}
                  className="max-h-[68vh] w-full object-contain"
                />
              </div>
            )}
            <div className={current.poster_image ? "p-5 sm:p-6" : "p-5"}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center`}>
                    <Megaphone className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    {current.type === "event" ? "Event" : current.type === "warning" ? "Important" : current.type === "success" ? "Update" : "Notice"}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={dismiss}
                    aria-label="Close"
                    data-testid="notice-close-btn"
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{current.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{current.body}</p>
                  {current.link && (
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-sm font-semibold text-[#8A4D6F] hover:underline"
                    >
                      Learn more →
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>

              {notices.length > 1 && (
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <button
                    onClick={() => setIdx((i) => (i - 1 + notices.length) % notices.length)}
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex gap-1.5">
                    {notices.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${
                          i === idx ? "w-6 bg-[#8A4D6F]" : "w-1.5 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setIdx((i) => (i + 1) % notices.length)}
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default NoticePopup;
