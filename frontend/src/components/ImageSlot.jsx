import React from "react";
import { Image as ImageIcon } from "lucide-react";

const ImageSlot = ({
  label = "Image space",
  className = "",
  src,
  alt = "",
  position = "center",
  overlay = "from-slate-950/20 to-transparent",
}) => {
  if (src) {
    return (
      <div className={`relative min-h-40 w-full overflow-hidden rounded-xl bg-slate-100 ${className}`}>
        <img
          src={src}
          alt={alt || label}
          className="h-full w-full object-cover"
          style={{ objectPosition: position }}
          loading="lazy"
        />
        {overlay && <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${overlay}`} />}
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-40 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 ${className}`}
    >
      <div className="text-center">
        <ImageIcon className="mx-auto h-8 w-8" />
        <div className="mt-2 text-sm font-medium">{label}</div>
      </div>
    </div>
  );
};

export default ImageSlot;
