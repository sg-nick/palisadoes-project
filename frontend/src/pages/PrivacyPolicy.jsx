import React from "react";
import {
  ScrollText,
  ShieldCheck,
  Gavel,
  Car,
  AlertTriangle,
  Printer,
  CalendarCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  loansPolicy,
  securityPolicy,
  approvalLimits,
} from "../mock/mockData";

const SectionHeader = ({ icon: Icon, eyebrow, title }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="w-12 h-12 rounded-xl bg-[#8A4D6F]/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-[#8A4D6F]" />
    </div>
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
        {eyebrow}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
  </div>
);

const PolicyClause = ({ n, text, sub }) => (
  <div className="relative pl-14 sm:pl-16 pb-8">
    {/* number badge */}
    <div className="absolute left-0 top-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#8A4D6F] to-[#A8708A] text-white text-base font-semibold flex items-center justify-center shadow-sm">
      {n}
    </div>
    <div className="rounded-3xl border-l-2 border-[#8A4D6F]/20 bg-slate-50/80 p-5 sm:p-6">
      <p className="text-slate-700 leading-relaxed text-base sm:text-base">{text}</p>
      {sub && sub.length > 0 && (
        <div className="mt-6 space-y-4 border-l-2 border-teal-500/30 pl-5">
          {sub.map((s) => (
            <div key={s.k} className="flex gap-3 text-slate-600">
              <span className="mt-1 shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 text-teal-700 font-semibold text-sm">
                {s.k}
              </span>
              <span className="leading-relaxed">{s.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Policies = () => {
  return (
    <div>
      <PageHero
        eyebrow="Policies & Requirements"
        title="Loans Policy"
        subtitle="Our official lending framework — adopted by the Board of Directors. Clear, transparent and applied uniformly across all members."
        breadcrumb="Policies"
      />

      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        {/* Approval banner */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#8A4D6F]/5 to-teal-50 border border-[#8A4D6F]/10">
          <div className="flex items-center gap-3">
            <CalendarCheck className="w-5 h-5 text-[#8A4D6F]" />
            <span className="text-sm text-slate-700">
              As approved by the <strong>Board of Directors</strong>, May 2025
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.print()}
            className="border-[#8A4D6F]/30 text-[#8A4D6F] hover:bg-[#8A4D6F]/10 hover:text-[#8A4D6F]"
          >
            <Printer className="w-4 h-4 mr-2" /> Print this policy
          </Button>
        </div>

        {/* LOANS POLICY */}
        <Card className="border-0 shadow-lg bg-white overflow-hidden mb-12">
          <div className="h-2 bg-gradient-to-r from-[#8A4D6F] to-teal-500" />
          <CardContent className="p-10 sm:p-12">
            <SectionHeader
              icon={ScrollText}
              eyebrow="Section 1"
              title="Loans Policy"
            />
            <div className="space-y-10 mt-8">
              {loansPolicy.map((p) => (
                <PolicyClause key={p.n} {...p} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SECURITY */}
        <Card className="border-0 shadow-lg bg-white overflow-hidden mb-12">
          <div className="h-2 bg-gradient-to-r from-teal-500 to-[#8A4D6F]" />
          <CardContent className="p-10 sm:p-12">
            <SectionHeader
              icon={ShieldCheck}
              eyebrow="Section 2"
              title="Security"
            />
            <div className="space-y-8 mt-8">
              {securityPolicy.map((s) => (
                <div key={s.k} className="rounded-3xl border-l-2 border-teal-500/20 bg-slate-50/80 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 font-semibold text-base">
                      {s.k}
                    </span>
                    <p className="text-slate-700 leading-relaxed">{s.text}</p>
                  </div>

                  {s.table && (
                    <div className="mt-4 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                      <div className="grid grid-cols-2 bg-[#8A4D6F] text-white text-sm font-semibold">
                        <div className="px-5 py-3 flex items-center gap-2">
                          <Car className="w-4 h-4" /> Vehicle Age
                        </div>
                        <div className="px-5 py-3 text-right">
                          Financing Ratio
                        </div>
                      </div>
                      <div className="divide-y divide-slate-100 bg-white">
                        {s.table.map((row) => (
                          <div
                            key={row.age}
                            className="grid grid-cols-2 px-5 py-3 text-sm hover:bg-slate-50 transition-colors"
                          >
                            <span className="text-slate-700">{row.age}</span>
                            <span className="text-right font-semibold text-[#8A4D6F]">
                              {row.pct}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* APPROVAL LIMITS */}
        <Card className="border-0 shadow-lg bg-white overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#8A4D6F] to-teal-500" />
          <CardContent className="p-10 sm:p-12">
            <SectionHeader
              icon={Gavel}
              eyebrow="Section 3"
              title="Approval Limits"
            />
            <div className="grid gap-6 mt-10">
              {approvalLimits.map((a) => (
                <div
                  key={a.role}
                  className="group p-6 rounded-3xl border border-slate-200/80 bg-slate-50/80 hover:border-[#8A4D6F]/40 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#8A4D6F]" />
                    <h3 className="font-semibold text-[#8A4D6F]">{a.role}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{a.limit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notice */}
        <div className="mt-10 p-6 rounded-xl bg-amber-50 border border-amber-100 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
          <div>
            <h3 className="font-semibold text-amber-900">Important Notice</h3>
            <p className="text-sm text-amber-800 mt-1 leading-relaxed">
              All policies are subject to change. The credit union reserves the
              right to amend lending criteria in line with regulatory
              requirements and prudential guidelines issued by the Bank of
              Jamaica.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 italic">
          As approved by the Board of Directors — May 2025
        </div>
      </section>
    </div>
  );
};

export default Policies;
