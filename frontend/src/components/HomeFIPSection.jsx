import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Button } from "./ui/button";

const FIP_IMAGE =
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=75";

const highlights = [
  "Cover up to six eligible family members",
  "Benefits from $10,000 to $100,000",
  "No medical examination required",
];

const HomeFIPSection = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#8A4D6F] text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-4 h-4" />
              Family Indemnity Plan
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Protection that helps your family when it matters most.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">
              F.I.P. is an affordable life insurance plan that helps ease funeral expenses for members and eligible loved ones, with simple monthly premiums and coverage options that fit different households.
            </p>

            <ul className="mt-7 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/fip" data-testid="home-fip-cta" className="inline-block mt-8">
              <Button size="lg" className="bg-[#8A4D6F] hover:bg-[#6e3d59] text-white">
                View FIP plans <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={FIP_IMAGE}
                alt="Family together"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute left-5 right-5 bottom-5 rounded-xl bg-white/95 p-5 shadow-lg backdrop-blur">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#8A4D6F]">Quick reminder</div>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                Members must enrol before age 76. Children must be between ages 1 and 26 for coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFIPSection;
