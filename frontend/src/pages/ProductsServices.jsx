import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Clock,
  CreditCard,
  FileCheck2,
  FileText,
  Gift,
  HandCoins,
  HeartPulse,
  Landmark,
  PiggyBank,
  Plane,
  Receipt,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import * as Icons from "lucide-react";
import PageHero from "../components/PageHero";
import HomeLoanCalculator from "../components/HomeLoanCalculator";
import ImageSlot from "../components/ImageSlot";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { adultMembership, smartPacMembership, loansCatalog } from "../mock/loansData";

const productGroups = [
  {
    title: "Loans & Credit",
    summary: "Competitive borrowing options for everyday needs, emergencies, and bigger life plans.",
    accent: "#8A4D6F",
    icon: HandCoins,
    items: [
      "Various loans at competitive rates",
      "Monthly Loans Special",
      "Easi Loan Facility",
      "Remedial Loan Facility",
      "Loan Protection and Life Savings Insurance",
    ],
  },
  {
    title: "Savings & Deposits",
    summary: "Accounts and savings plans designed for children, holidays, long-term goals, and steady growth.",
    accent: "#0d9488",
    icon: PiggyBank,
    items: [
      "Fixed Deposits at competitive rates",
      "SMART PAC Savings Account for Children",
      "Golden Harvest Savings Programme",
      "Christmas Savings Club",
      "Pali Partner Plan",
    ],
  },
  {
    title: "Everyday Banking",
    summary: "Convenient payment and account services to help members move money with less friction.",
    accent: "#334155",
    icon: Wallet,
    items: [
      "NCB E-Link Payment Option",
      "ATM Multi-link Services",
      "Direct Salary Deposit",
      "Standing Order Payments",
      "Paymaster Bill Payment",
      "Reggae Money Express Transfer",
    ],
  },
  {
    title: "Protection & Guidance",
    summary: "Practical support for financial confidence, insurance protection, and life planning.",
    accent: "#b45309",
    icon: ShieldCheck,
    items: [
      "Family Indemnity Plan",
      "Critical Illness Plan",
      "Limited Legal Services, including Wills",
      "Financial Counselling",
      "Travelling Officers' Facility",
    ],
  },
];

const serviceHighlights = [
  { icon: CreditCard, title: "NCB E-Link", text: "A convenient payment option for members managing regular transactions." },
  { icon: Banknote, title: "Competitive Loans", text: "Flexible facilities including monthly specials, Easi Loan, and remedial support." },
  { icon: Receipt, title: "Bill Payments", text: "Paymaster and standing order services help keep obligations current." },
  { icon: HeartPulse, title: "Insurance Plans", text: "FIP, critical illness, loan protection, and life savings insurance options." },
  { icon: Scale, title: "Legal Support", text: "Limited legal services, including assistance with the preparation of Wills." },
  { icon: Plane, title: "Travelling Officers", text: "Member support that reaches beyond the branch where the service is available." },
];

const membershipCards = [
  {
    title: "Adult Membership",
    badge: "18 and above",
    plan: adultMembership,
    accent: "#8A4D6F",
    icon: Users,
    description: "A full membership account for adults ready to save, borrow, and access credit union services.",
  },
  {
    title: "SMART PAC Savings",
    badge: "Children's account",
    plan: smartPacMembership,
    accent: "#0d9488",
    icon: Gift,
    description: "A starter savings account for children, with a parent, guardian, or family member connected to the credit union.",
  },
];

const businessRules = [
  "Bring valid proof of identification when transacting business, such as a passport, driver's licence, voter registration ID, or national ID.",
  "Address or telephone changes must be communicated to the Credit Union in writing.",
  "Name changes require supporting proof before the update can be made, such as a marriage certificate.",
  "If you are not receiving messages by cell phone or email, contact us so your details can be added or updated.",
];

const LoanListCard = ({ loan }) => {
  const Icon = Icons[loan.icon] || Icons.Wallet;

  return (
    <Card className="border-0 bg-white shadow-sm hover:shadow-lg transition-shadow h-full overflow-hidden">
      <div className="h-1.5" style={{ backgroundColor: loan.accent }} />
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${loan.accent}18` }}
          >
            <Icon className="w-5 h-5" style={{ color: loan.accent }} />
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ color: loan.accent, backgroundColor: `${loan.accent}14` }}
          >
            {loan.code}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-900">{loan.title}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{loan.short}</p>
        <div className="mt-4 border-t border-slate-100 pt-4">
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">Tenor</div>
          <div className="mt-1 text-sm font-medium text-slate-800">{loan.tenor}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductsServices = () => {
  return (
    <div>
      <PageHero
        eyebrow="Products & Services"
        title="Financial services for everyday members and long-term goals"
        subtitle="Savings, loans, payment services, insurance, and practical guidance from a credit union built around member needs."
        breadcrumb="Products & Services"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Full-service credit union
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              One place for saving, borrowing, protection, and member support.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Palisadoes offers practical financial products for members at every stage of life, from children's savings and fixed deposits to everyday payment services, insurance, counselling, and competitive loans.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageSlot label="Product image space" className="h-72 shadow-lg" />
            <div className="space-y-4">
              <ImageSlot label="Savings image space" className="h-[134px] shadow-md" />
              <ImageSlot label="Service image space" className="h-[134px] shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#8A4D6F] text-xs font-semibold uppercase tracking-wider mb-3">
              Offerings
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Products and services at a glance</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Cleanly grouped so members can find the right service faster.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {productGroups.map((group) => (
              <Card key={group.title} className="border-0 shadow-sm bg-white h-full overflow-hidden">
                <div className="h-1.5" style={{ backgroundColor: group.accent }} />
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${group.accent}18` }}>
                    <group.icon className="w-6 h-6" style={{ color: group.accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{group.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: group.accent }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Member Services
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Helpful services beyond accounts</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              These services support everyday transactions, protection planning, and member convenience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {serviceHighlights.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#8A4D6F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#8A4D6F] text-xs font-semibold uppercase tracking-wider mb-3">
              Membership Accounts
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Start with the right account</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {membershipCards.map((card) => (
              <Card key={card.title} className="border-0 bg-white shadow-lg overflow-hidden">
                <div className="h-2" style={{ backgroundColor: card.accent }} />
                <CardContent className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ color: card.accent, backgroundColor: `${card.accent}15` }}>
                        <card.icon className="w-3.5 h-3.5" />
                        {card.badge}
                      </div>
                      <h3 className="mt-4 text-2xl font-bold text-slate-900">{card.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{card.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs uppercase tracking-wider text-slate-500">Opening Total</div>
                      <div className="text-2xl font-bold" style={{ color: card.accent }}>{card.plan.totalCost}</div>
                    </div>
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {card.plan.breakdown.map((row) => (
                      <div key={row.item} className="rounded-lg bg-slate-50 border border-slate-100 p-3">
                        <div className="text-xs text-slate-500">{row.item}</div>
                        <div className="font-semibold text-slate-900">{row.amount}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <div className="h-2 bg-[#8A4D6F]" />
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#8A4D6F]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Opening Hours</h2>
              </div>
              <div className="space-y-3 text-slate-700">
                <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                  <span>Mondays to Tuesdays</span>
                  <strong>9:00 a.m. - 4:30 p.m.</strong>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                  <span>Wednesdays</span>
                  <strong>9:00 a.m. - 2:00 p.m.</strong>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                  <span>Thursdays</span>
                  <strong>9:00 a.m. - 4:30 p.m.</strong>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                  <span>Fridays</span>
                  <strong>9:00 a.m. - 4:00 p.m.</strong>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Saturdays at NMIA</span>
                  <strong>9:00 a.m. - 2:00 p.m.</strong>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <div className="h-2 bg-[#0d9488]" />
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5 text-teal-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Doing Business With Us</h2>
              </div>
              <ul className="space-y-3">
                {businessRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <FileText className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <HomeLoanCalculator />

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#8A4D6F] text-xs font-semibold uppercase tracking-wider mb-3">
              Member Lending
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Flexible loan facilities for every season</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              A quick view of Palisadoes loan facilities, including specials, revolving options, seasonal loans, and short-term support.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {loansCatalog.map((loan, index) => (
              <LoanListCard key={`${loan.code}-${loan.title}-${index}`} loan={loan} />
            ))}
          </div>
          <div className="mt-10">
            <Link to="/download-forms">
              <Button className="bg-[#8A4D6F] hover:bg-[#6e3d59] text-white">
                Download Loan Forms <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-gradient-to-br from-[#8A4D6F] to-[#0d9488] p-8 sm:p-10 text-white">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-purple-100 text-xs uppercase tracking-wider font-semibold">
                <Landmark className="w-4 h-4" />
                Ready when you are
              </div>
              <h2 className="mt-3 text-3xl font-bold">Find the form or service you need.</h2>
              <p className="mt-3 text-purple-50/90 max-w-2xl">
                Download forms, contact a branch, or visit our loan page to start the next step.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/download-forms">
                <Button className="bg-white text-[#8A4D6F] hover:bg-purple-50">Download Forms</Button>
              </Link>
              <Link to="/loans">
                <Button variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                  View Loans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsServices;
