import React from "react";
import { CheckCircle2, FileText, Shield, AlertTriangle, Gavel, ClipboardList } from "lucide-react";
import PageHero from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { policies } from "../mock/mockData";

const sectionIcons = [FileText, ClipboardList, Shield, Gavel, AlertTriangle];

const Policies = () => {
  return (
    <div>
      <PageHero
        eyebrow="Policies"
        title="Policies & Requirements"
        subtitle="A clear, transparent guide to our member policies, lending requirements and approval processes."
        breadcrumb="Policies"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {policies.map((policy, idx) => {
            const Icon = sectionIcons[idx % sectionIcons.length];
            return (
              <Card key={policy.title} className="border-0 shadow-sm bg-white overflow-hidden">

                <div className="h-1 bg-gradient-to-r from-[#8A4D6F] to-teal-500" />
                <CardContent className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-lg bg-purple-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#8A4D6F]" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">{policy.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {policy.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-amber-50 border border-amber-100 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
          <div>
            <h3 className="font-semibold text-amber-900">Important Notice</h3>
            <p className="text-sm text-amber-800 mt-1 leading-relaxed">
              All policies are subject to change. The credit union reserves the right to amend lending criteria in line with regulatory requirements and prudential guidelines issued by the Bank of Jamaica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;
