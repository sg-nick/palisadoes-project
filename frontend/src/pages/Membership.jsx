import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Users, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { adultMembership, smartPacMembership } from "../mock/loansData";

const Tier = ({ title, badge, plan, accent, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="border-0 shadow-lg bg-white overflow-hidden h-full">
      <div className="h-2" style={{ backgroundColor: accent }} />
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ color: accent, backgroundColor: `${accent}15` }}
            >
              {badge}
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">{title}</h2>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-wider text-slate-500">Total</div>
            <div className="text-3xl font-bold" style={{ color: accent }}>{plan.totalCost}</div>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  </motion.div>
);

const Membership = () => {
  return (
    <div>
      <PageHero
        eyebrow="Become a Member"
        title="Join a credit union that puts you first"
        subtitle="Choose the membership tier that fits — whether you're starting your financial journey or planning for your children's future."
        breadcrumb="Membership"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-7">
        <Tier title="Adult Membership" badge="For 18 and above" plan={adultMembership} accent="#8A4D6F">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">Cost Breakdown</h4>
            <div className="space-y-2">
              {adultMembership.breakdown.map((b) => (
                <div key={b.item} className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-700">{b.item}</span>
                  <span className="font-semibold text-slate-900">{b.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">Required Documents</h4>
            <ul className="space-y-2">
              {adultMembership.documents.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">Required Forms</h4>
            <ul className="space-y-2">
              {adultMembership.forms.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <FileText className="w-4 h-4 text-[#8A4D6F]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/download-forms" className="block mt-7">
            <Button className="w-full bg-[#8A4D6F] hover:bg-[#6e3d59] text-white" data-testid="adult-apply-btn">
              Start Application <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </Tier>

        <Tier title="S.M.A.R.T PAC Membership" badge="Under 18" plan={smartPacMembership} accent="#0d9488" delay={0.15}>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            <strong className="text-slate-900">Eligibility:</strong> {smartPacMembership.eligibility}
          </p>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">Cost Breakdown</h4>
            <div className="space-y-2">
              {smartPacMembership.breakdown.map((b) => (
                <div key={b.item} className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-700">{b.item}</span>
                  <span className="font-semibold text-slate-900">{b.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">Required Forms</h4>
            <ul className="space-y-2">
              {smartPacMembership.forms.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <FileText className="w-4 h-4 text-teal-600" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 p-3 rounded-lg bg-teal-50 border border-teal-100 text-sm text-teal-800">
            <strong>Important:</strong> {smartPacMembership.note}
          </div>

          <Link to="/download-forms" className="block mt-6">
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" data-testid="smart-apply-btn">
              Start Application <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </Tier>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Member-owned", value: "Not-for-profit" },
              { icon: Wallet, label: "Better rates", value: "Lower fees" },
              { icon: CheckCircle2, label: "Trusted since", value: "1953" },
            ].map((b) => (
              <Card key={b.label} className="border-0 shadow-sm bg-white">
                <CardContent className="p-6">
                  <b.icon className="w-7 h-7 text-[#8A4D6F] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">{b.value}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">{b.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
