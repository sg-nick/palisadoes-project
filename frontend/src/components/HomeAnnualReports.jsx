import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { annualReports as fallbackReports } from "../mock/contentData";
import { api } from "../lib/api";

const BACKEND = process.env.REACT_APP_BACKEND_URL || "";

const formatSize = (b) => {
  if (!b) return "";
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(0)} KB`;
  return `${(b / 1024 / 1024).toFixed(1)} MB`;
};

const HomeAnnualReports = () => {
  const [reports, setReports] = useState(fallbackReports);

  useEffect(() => {
    api
      .get("/reports")
      .then((r) => {
        const data = r.data || [];
        if (data.length > 0) {
          // Map backend shape into card shape; prefix BACKEND for absolute URL
          const mapped = data.map((d, i) => ({
            year: d.year || `#${i + 1}`,
            title: d.title || d.filename,
            highlight: `Uploaded ${new Date(d.modified).toLocaleDateString()}`,
            pages: formatSize(d.size_bytes),
            url: `${BACKEND}${d.url}`,
          }));
          setReports(mapped);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#8A4D6F] text-xs font-semibold uppercase tracking-wider mb-3">
            Annual Reports
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Transparency, year over year</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Our annual reports outline how we serve members, grow responsibly and steward the credit union.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reports.map((r, i) => (
          <motion.div
            key={`${r.year}-${i}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            data-testid={`annual-report-${r.year}`}
          >
            <Card className="group relative overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white h-full">
              <div className="h-1.5 bg-gradient-to-r from-[#8A4D6F] to-[#0d9488]" />
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center transition-transform group-hover:scale-110">
                    <FileText className="w-6 h-6 text-[#8A4D6F]" />
                  </div>
                  <div className="text-3xl font-extrabold tracking-tight text-[#8A4D6F]">{r.year}</div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{r.highlight}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> FY {r.year}</span>
                  <span>·</span>
                  <span>{r.pages}{typeof r.pages === "number" ? " pages" : ""}</span>
                </div>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="mt-5"
                  data-testid={`annual-report-download-${r.year}`}
                >
                  <Button className="w-full bg-[#8A4D6F] hover:bg-[#6e3d59] text-white">
                    <Download className="w-4 h-4 mr-2" /> Download PDF
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-teal-50 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-[#8A4D6F]" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Looking for older reports?</h4>
            <p className="text-sm text-slate-600">Reach out to member services and we'll share archived copies.</p>
          </div>
        </div>
        <a href="/contact">
          <Button variant="outline" className="border-[#8A4D6F] text-[#8A4D6F] hover:bg-purple-50">
            Contact Us <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HomeAnnualReports;
