import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  Car,
  CheckCircle2,
  ClipboardList,
  Copy,
  FileText,
  Handshake,
  Home,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { downloadForms } from "../mock/mockData";

const SectionCard = ({ title, items, icon: Icon = CheckCircle2, accent = "#8A4D6F" }) => (
  <Card className="border-0 bg-white shadow-sm h-full">
    <CardContent className="p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${accent}18` }}>
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const DocumentList = ({ title, docs }) => (
  <section className="bg-slate-50 py-14">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <Card key={doc.name} className="border-0 bg-white shadow-sm">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{doc.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{doc.description || doc.category}</p>
              </div>
              <a href={doc.url} target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-[#8A4D6F] text-[#8A4D6F] hover:bg-purple-50">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ProductPage = ({ eyebrow, title, subtitle, overview, cards, docs = [], ctaLabel = "Apply Now" }) => (
  <div>
    <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} breadcrumb={title} />
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8A4D6F]">
            Overview
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{overview.title}</h2>
          <p className="mt-4 leading-relaxed text-slate-600">{overview.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/download-forms">
              <Button className="bg-[#8A4D6F] text-white hover:bg-[#6e3d59]">{ctaLabel}</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[#8A4D6F] text-[#8A4D6F] hover:bg-purple-50">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <SectionCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
    {docs.length > 0 && <DocumentList title="Related Documents" docs={docs} />}
  </div>
);

export const HomeEquityMortgageLoan = () => (
  <ProductPage
    eyebrow="Loan Product"
    title="Home Equity & Mortgage Loan"
    subtitle="Financing support for home ownership, home improvement, and property-backed borrowing."
    overview={{
      title: "Use property value to support your next milestone.",
      body:
        "This loan option helps eligible members pursue home ownership, improvement projects, or larger secured borrowing needs with guidance from the credit union team.",
    }}
    cards={[
      { title: "Key Benefits", icon: Home, items: ["Mortgage and property-backed financing options.", "Longer repayment terms where eligibility allows.", "Member-focused guidance through the application process."] },
      { title: "Requirements", icon: ClipboardList, items: ["Proof of income and employment.", "Valid identification and member records.", "Property documents and valuation details where applicable."] },
      { title: "Application Process", icon: FileText, items: ["Review the loan requirements.", "Gather supporting documents.", "Submit the application and await credit review."] },
      { title: "Support", icon: ShieldCheck, items: ["Speak with member services before applying.", "Ask about repayment terms and security requirements.", "Use the forms page to begin."] },
    ]}
  />
);

export const MotorVehicleLoanChecklist = () => (
  <ProductPage
    eyebrow="Loan Checklist"
    title="Motor Vehicle Loan Checklist"
    subtitle="A quick guide to the information members should prepare before applying for vehicle financing."
    overview={{
      title: "Prepare confidently before you apply.",
      body:
        "Motor vehicle financing may require income verification, valid identification, vehicle details, insurance arrangements, and other documents depending on the vehicle age and loan amount.",
    }}
    cards={[
      { title: "Key Requirements", icon: Car, items: ["Vehicle quotation or sale agreement.", "Proof of income and employment.", "Comprehensive insurance arrangements where required."] },
      { title: "Eligibility", icon: CheckCircle2, accent: "#0d9488", items: ["Active membership.", "Good standing with the credit union.", "Ability to meet repayment and security requirements."] },
      { title: "Approval Process", icon: ClipboardList, items: ["Submit documents.", "Credit review and security assessment.", "Final approval and disbursement guidance."] },
      { title: "Useful Forms", icon: FileText, accent: "#334155", items: ["Loan application forms.", "Guarantor or hypothecation forms where applicable.", "Insurance and salary deduction forms if requested."] },
    ]}
    docs={downloadForms.filter((f) => ["Security Loan Application Form", "Guarantor Form", "Hypothecation Form", "Salary Deduction Form"].includes(f.name))}
    ctaLabel="View Forms"
  />
);

export const PartnerPlan = () => (
  <ProductPage
    eyebrow="Savings Plan"
    title="Partner Plan"
    subtitle="A structured savings option for members who want to build steadily toward a personal goal."
    overview={{
      title: "Save with structure and purpose.",
      body:
        "The Partner Plan supports regular contributions and goal-based saving, helping members stay consistent while keeping funds connected to their credit union relationship.",
    }}
    cards={[
      { title: "Benefits", icon: Handshake, items: ["Encourages disciplined saving.", "Useful for planned expenses and future goals.", "Keeps your savings relationship active."] },
      { title: "Participation", icon: UsersFallback, accent: "#0d9488", items: ["Members can ask about available contribution options.", "Terms are guided by the plan agreement.", "Support is available through member services."] },
      { title: "How It Works", icon: Banknote, items: ["Choose a savings goal.", "Review the agreement.", "Maintain contributions according to the plan terms."] },
      { title: "Enrollment", icon: FileText, accent: "#334155", items: ["Review the Partner Plan document.", "Contact member services for assistance.", "Submit required membership information."] },
    ]}
    docs={downloadForms.filter((f) => f.name === "Pali Partner Plan")}
    ctaLabel="View Plan Form"
  />
);

const UsersFallback = Handshake;

export const MotorVehicleRegistration = () => (
  <ProductPage
    eyebrow="Member Resource"
    title="Motor Vehicle Registration"
    subtitle="Helpful registration information for members preparing motor vehicle documents."
    overview={{
      title: "Know what to prepare for vehicle registration.",
      body:
        "This resource summarizes common registration steps and document needs so members can organize details before contacting the relevant offices or the credit union.",
    }}
    cards={[
      { title: "Registration Requirements", icon: Car, items: ["Valid owner identification.", "Vehicle documents and transfer details.", "Insurance and fitness information where applicable."] },
      { title: "Required Documents", icon: ClipboardList, accent: "#0d9488", items: ["Vehicle title or sale documentation.", "Proof of insurance.", "Any forms requested by the registration authority."] },
      { title: "Process", icon: FileText, items: ["Confirm the current registration requirements.", "Complete required forms.", "Submit documents and retain proof of payment."] },
      { title: "Member Tip", icon: ShieldCheck, accent: "#334155", items: ["Keep copies of all documents.", "Confirm vehicle details before submission.", "Ask about loan-related requirements if financing is involved."] },
    ]}
    ctaLabel="View Forms"
  />
);

export const BankingInformation = () => {
  const [copied, setCopied] = useState("");
  const details = [
    { label: "Account Name", value: "Palisadoes Co-operative Credit Union Ltd" },
    { label: "Payment Reference", value: "Member name and account number" },
    { label: "Proof of Payment", value: "Submit receipt or transfer confirmation to member services" },
  ];

  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
    } catch {
      setCopied("");
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Banking Information"
        title="Deposit and payment information"
        subtitle="Find practical guidance for deposits, transfers, payment references, and proof of payment."
        breadcrumb="Banking Information"
      />
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
              Payment Guidance
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Make deposits easier to trace.</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Use clear member references and send proof of payment after deposits or transfers so the team can identify and process your transaction.
            </p>
          </div>
          <div className="grid gap-4">
            {details.map((item) => (
              <Card key={item.label} className="border-0 bg-white shadow-sm">
                <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</div>
                    <div className="mt-1 font-medium text-slate-900">{item.value}</div>
                  </div>
                  <Button variant="outline" className="border-[#8A4D6F] text-[#8A4D6F]" onClick={() => copy(item.value)}>
                    <Copy className="mr-2 h-4 w-4" /> {copied === item.value ? "Copied" : "Copy"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <SectionCard title="In-Branch Deposits" icon={Landmark} items={["Visit your branch.", "Use your member name and account number.", "Keep the stamped receipt."]} />
          <SectionCard title="Online Transfers" icon={Banknote} accent="#0d9488" items={["Use a clear payment reference.", "Confirm the amount before submitting.", "Save the transfer confirmation."]} />
          <SectionCard title="Proof of Payment" icon={FileText} accent="#334155" items={["Send the receipt to member services.", "Include member details.", "Keep a copy for your records."]} />
        </div>
      </section>
      <DocumentList title="Banking & Agreement Forms" docs={downloadForms.filter((f) => f.category === "Banking & Agreements")} />
    </div>
  );
};
