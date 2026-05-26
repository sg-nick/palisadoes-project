import React from "react";
import { Image as ImageIcon } from "lucide-react";

const ImageSlot = ({ label = "Image space", className = "" }) => (
  <div
    className={`flex min-h-40 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 ${className}`}
  >
    <div className="text-center">
      <ImageIcon className="mx-auto h-8 w-8" />
      <div className="mt-2 text-sm font-medium">{label}</div>
    </div>
  </div>
);

export default ImageSlot;
