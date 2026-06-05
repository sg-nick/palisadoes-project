import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  Car,
  CheckCircle2,
  ClipboardList,
  Copy,
  CreditCard,
  Download,
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
                  Download <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ProductPage = ({ eyebrow, title, subtitle, overview, cards, docs = [], ctaLabel = "Apply Now", ctaTo = "/download-forms" }) => (
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
            <Link to={ctaTo}>
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
      { title: "Property Documents", icon: Home, items: ["Executed sales agreement where applicable, or evidence supporting the loan purpose.", "Surveyor's report not older than 1 year.", "Copy of property title and current valuation not older than 1 year."] },
      { title: "Income & Identity", icon: ClipboardList, items: ["Last 3 months pay slips and job letter stating position, salary, and length of employment.", "Valid Jamaican identification, TRN, and proof of address not older than 6 months.", "Self-employed members should provide accountant-prepared financials and account transactions."] },
      { title: "Security & Costs", icon: FileText, items: ["Minimum share requirement of 15% of the loan amount.", "Quotation for property insurance, up-to-date property taxes, and mortgage statement where applicable.", "Assignment of life insurance or creditor life insurance may be required."] },
      { title: "Approved Valuators", icon: ShieldCheck, items: ["The checklist includes the approved valuator list.", "Credit committee may request additional information after assessment.", "Security loans are scheduled between 10:00 a.m. and 2:00 p.m."] },
    ]}
    docs={downloadForms.filter((f) =>
      ["Home Equity-Mortgage Checklist and List of Valuators", "Security Loan Application Form", "Guarantor Form"].includes(f.name)
    )}
    ctaLabel="Download Checklist"
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
      { title: "Vehicle Documents", icon: Car, items: ["Letter from vendor or pro-forma invoice.", "Copy of vendor's identification when purchasing from an individual.", "Certificates of fitness and registration, copy of title, and Import Entry C87 where applicable."] },
      { title: "Applicant Documents", icon: CheckCircle2, accent: "#0d9488", items: ["Last 3 months pay slips and job letter.", "Valid Jamaican identification, TRN, and proof of address not older than 6 months.", "Self-employed members should provide accountant-prepared financials and account transactions."] },
      { title: "Valuation & Insurance", icon: ClipboardList, items: ["Valuation reports must come from an accepted valuator and be no older than 3 months.", "Insurance quotation should cover the value of the vehicle.", "Company-owned vehicles require incorporation, tax compliance, good standing, and authorized guarantor documents."] },
      { title: "Loan Notes", icon: FileText, accent: "#334155", items: ["Minimum share requirement is 15% of the loan amount.", "100% financing is available for motor vehicle loans.", "Security loans are scheduled between 10:00 a.m. and 4:00 p.m."] },
    ]}
    docs={downloadForms.filter((f) =>
      ["Motor Vehicle Loan Checklist", "Security Loan Application Form", "Guarantor Form", "Hypothecation Form", "Salary Deduction Form"].includes(f.name)
    )}
    ctaLabel="Download Checklist"
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
      { title: "Plan Purpose", icon: Handshake, items: ["A contracted savings plan for members who want a structured draw at the end of the plan period.", "Members select the number of contracted hands and the number of weeks or months.", "The contract records the amount invested, proposed bonus, and total draw."] },
      { title: "Payment Setup", icon: UsersFallback, accent: "#0d9488", items: ["Choose monthly, fortnightly, or weekly payment arrangements.", "Payment method is recorded on the contract.", "Start and end dates are captured for the savings period."] },
      { title: "Bonus Terms", icon: Banknote, items: ["Where one or two payments are missed but paid within 5 working days of the due date, 50% of the proposed bonus applies.", "Where the member defaults outside that grace period, no bonus is applied.", "Members sign to confirm the terms and conditions."] },
      { title: "Enrollment", icon: FileText, accent: "#334155", items: ["Complete the Pali Partner Plan contract.", "Provide member account, contact, employer, and address details.", "Submit the signed contract to member services."] },
    ]}
    docs={downloadForms.filter((f) => ["Pali Partner Plan", "Pali Partner Plan Contract"].includes(f.name))}
    ctaLabel="Download Contract"
  />
);

const UsersFallback = Handshake;

export const DebitMastercard = () => (
  <ProductPage
    eyebrow="Everyday Banking"
    title="AccessPlus Debit Mastercard"
    subtitle="Convenient account access for everyday spending, ATM withdrawals, and secure local or international purchases."
    overview={{
      title: "Use funds in your member account with more flexibility.",
      body:
        "The AccessPlus Debit Mastercard gives members a practical way to shop, withdraw cash, and manage everyday transactions using available funds in their Palisadoes account.",
    }}
    cards={[
      { title: "Everyday Spending", icon: CreditCard, items: ["Pay conveniently for routine purchases.", "Use available funds from your member account.", "Reduce the need to carry cash."] },
      { title: "ATM Access", icon: Banknote, accent: "#0d9488", items: ["Withdraw cash when needed.", "Access funds through supported ATM networks.", "Keep day-to-day banking more flexible."] },
      { title: "Security", icon: ShieldCheck, items: ["Chip-card protection supports safer transactions.", "Card controls and account monitoring help protect member funds.", "Report lost or suspicious activity quickly to member services."] },
      { title: "Acceptance", icon: Landmark, accent: "#334155", items: ["Accepted locally and internationally wherever Mastercard debit is supported.", "Useful for travel, online payments, and point-of-sale purchases.", "Backed by the convenience of the AccessPlus network."] },
    ]}
    ctaLabel="Contact Member Services"
    ctaTo="/contact"
  />
);

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
