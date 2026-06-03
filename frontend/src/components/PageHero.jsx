import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { assetUrl } from "../lib/assets";

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  image = assetUrl("/hero_image.png"),
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5f314b]/95 via-[#8A4D6F]/85 to-[#0d9488]/80" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        {breadcrumb && (
          <nav className="flex items-center text-xs text-purple-100/90 mb-3">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 mx-1" />
            <span className="text-white">{breadcrumb}</span>
          </nav>
        )}
        {eyebrow && (
          <div className="inline-block px-3 py-1 rounded-full bg-white/15 text-purple-50 text-xs font-medium tracking-wide uppercase mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-purple-50/90 text-base sm:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
