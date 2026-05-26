import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ChevronDown, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { loansCatalog } from "../mock/loansData";

const LoanCard = ({ loan, i }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = Icons[loan.icon] || Icons.Wallet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
      data-testid={`loan-card-${i}`}
    >
      <Card className="group border-0 shadow-sm hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden h-full">
        <div className="h-1.5" style={{ backgroundColor: loan.accent }} />
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${loan.accent}18` }}
            >
              <Icon className="w-6 h-6" style={{ color: loan.accent }} />
            </div>
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ color: loan.accent, backgroundColor: `${loan.accent}14` }}
            >
              {loan.code}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-900 leading-tight">{loan.title}</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{loan.short}</p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-slate-700 leading-relaxed">{loan.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-3.5 h-3.5" style={{ color: loan.accent }} />
                  <span><strong>Tenor:</strong> {loan.tenor}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <ShieldCheck className="w-3.5 h-3.5" style={{ color: loan.accent }} />
                  <span>Member-only</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">Eligibility</div>
                <ul className="space-y-1.5">
                  {loan.eligibility.map((e, k) => (
                    <li key={k} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex gap-2">
                <Link to="/download-forms" className="flex-1">
                  <Button className="w-full text-white" style={{ backgroundColor: loan.accent }}>
                    Apply Now <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 inline-flex items-center text-sm font-semibold text-slate-700 hover:text-slate-900"
            data-testid={`loan-expand-${i}`}
          >
            {expanded ? "Show less" : "View details"}
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Loans = () => {
  return (
    <div>
      <PageHero
        eyebrow="Loans"
        title="Loans designed for your every milestone"
        subtitle="From everyday essentials to once-in-a-lifetime moments — we have a loan crafted for you."
        breadcrumb="Loans"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loansCatalog.map((loan, i) => (
            <LoanCard key={`${loan.code}-${loan.title}`} loan={loan} i={i} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#8A4D6F] to-[#0d9488] py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Not sure which loan is right for you?</h2>
          <p className="mt-4 text-purple-50 max-w-2xl mx-auto">
            Our member services team will help you find the loan that fits your goals and budget.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#8A4D6F] hover:bg-purple-50">
                Talk to an Advisor
              </Button>
            </Link>
            <Link to="/download-forms">
              <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">
                Browse Forms
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;
