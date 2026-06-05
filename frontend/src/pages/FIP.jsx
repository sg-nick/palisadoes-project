import React from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  HeartHandshake,
  Mail,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";

const FIP_IMAGE =
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1800&q=75";

const planRows = [
  { option: "Plan A", premium: "$422.40", benefit: "$80,000.00" },
  { option: "Plan B", premium: "$633.60", benefit: "$120,000.00" },
  { option: "Plan C", premium: "$792.00", benefit: "$150,000.00" },
  { option: "Plan D", premium: "$1,320.00", benefit: "$250,000.00" },
  { option: "Plan E", premium: "$2,112.00", benefit: "$400,000.00" },
  { option: "Plan F", premium: "$3,432.00", benefit: "$650,000.00" },
  { option: "Plan G", premium: "$5,280.00", benefit: "$1,000,000.00" },
  { option: "Plan H", premium: "$6,864.00", benefit: "$1,300,000.00" },
  { option: "Plan I", premium: "$8,864.00", benefit: "$1,600,000.00" },
  { option: "Plan J", premium: "$10,458.00", benefit: "$1,800,000.00" },
  { option: "Plan K", premium: "$12,680.00", benefit: "$2,000,000.00" },
];

const overviewCards = [
  {
    icon: Shield,
    title: "Final expense support",
    body: "F.I.P. helps loved ones cover funeral expenses, outstanding debt, or other immediate needs during a difficult time.",
  },
  {
    icon: Users,
    title: "One premium, family coverage",
    body: "One monthly premium can cover you and up to five eligible family members under the selected plan.",
  },
  {
    icon: HeartHandshake,
    title: "Simple enrolment",
    body: "No medical examination is required once eligibility criteria and supporting documents are satisfied.",
  },
];

const enrollment = [
  "Members must enrol before age 76",
  "Children must be ages 1 through 25 and unmarried; permanently disabled children remain covered once enrolled before age 26",
  "Eligible family members may include a spouse or significant other, and up to two parents or parents-in-law",
  "Select the plan option that best matches your desired individual benefit",
  "Supporting documents for dependents, such as an electronic birth certificate",
];

const claim = [
  "National ID for the claimant",
  "National ID for the deceased",
  "Electronic Death Certificate",
];

const faqs = [
  {
    q: "Who can be enrolled under the F.I.P. plan?",
    a: "You can cover yourself, your spouse or significant other, and eligible children ages 1 to 26, up to six eligible persons per plan. Members must enrol before age 76.",
  },
  {
    q: "Is a medical exam required?",
    a: "No. F.I.P. does not require a medical examination once the eligibility criteria are met.",
  },
  {
    q: "What are the benefit amounts and premiums?",
    a: "Benefits range from $10,000 to $100,000, with monthly premiums from $52.80 to $528.00 depending on the plan selected.",
  },
  {
    q: "How are claims submitted?",
    a: "Submit the required IDs and electronic death certificate to any branch. Our team will guide you through the claim process.",
  },
];

const FIP = () => {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img src={FIP_IMAGE} alt="Family together" className="h-[360px] sm:h-[460px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-10">
            <div className="max-w-2xl text-white">
              <div className="text-xs uppercase tracking-wider font-semibold text-purple-100">CUNA Caribbean Insurance</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">A plan tailored for peace of mind</h2>
              <p className="mt-3 text-purple-50/90 leading-relaxed">
                 Choose a plan option that fits your household and keep loved ones protected with simple monthly premiums.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {overviewCards.map((card) => (
            <Card key={card.title} className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-white overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#8A4D6F] to-[#0d9488]" />
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-[#8A4D6F]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{card.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
                Plan Table
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Choose your F.I.P. coverage</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Benefit options range from $80,000 to $2,000,000. Premiums below are monthly and shown for quick comparison.
              </p>
              <div className="mt-7 rounded-xl border border-teal-100 bg-white p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Premiums and eligibility are subject to confirmation. Contact member services before submitting your form.
                  </p>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-3 bg-[#8A4D6F] text-white text-sm font-bold">
                  <div className="p-4">Plan Option</div>
                  <div className="p-4 border-l border-white/15">Monthly Premium</div>
                  <div className="p-4 border-l border-white/15">Individual Benefit</div>
                </div>
                {planRows.map((row, index) => (
                  <div key={row.option} className={`grid grid-cols-3 text-sm ${index % 2 ? "bg-slate-50" : "bg-white"}`}>
                    <div className="p-4 font-semibold text-slate-900">{row.option}</div>
                    <div className="p-4 border-l border-slate-100 text-slate-700">{row.premium}</div>
                    <div className="p-4 border-l border-slate-100 font-semibold text-slate-900">{row.benefit}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <div className="h-2 bg-[#8A4D6F]" />
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-[#8A4D6F]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Enrolment Requirements</h2>
              </div>
              <ul className="space-y-3">
                {enrollment.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#8A4D6F] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <div className="h-2 bg-[#0d9488]" />
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-teal-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Claim Requirements</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                When submitting a claim, bring these documents to any branch:
              </p>
              <ul className="space-y-3">
                {claim.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <FileText className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-7">
            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#8A4D6F] to-[#9a5d7f]" />
              <CardContent className="p-8">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A4D6F] mb-2">New Enrolment</div>
                <h3 className="text-xl font-bold text-slate-900">Apply for F.I.P.</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Download the enrolment form, complete it in Adobe Acrobat, and submit it to member services.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="https://cunacaribbean.com/wp-content/uploads/2022/02/NEW-FIP-APPLICATION-JAN-2022.pdf" target="_blank" rel="noreferrer" data-testid="fip-enrol-form">
                    <Button className="bg-[#8A4D6F] hover:bg-[#6e3d59] text-white">
                      <Download className="w-4 h-4 mr-2" /> Download Enrolment Form
                    </Button>
                  </a>
                  <a href="mailto:member.services@palisadoescreditunion.com">
                    <Button variant="outline" className="border-[#8A4D6F] text-[#8A4D6F] hover:bg-purple-50">
                      <Mail className="w-4 h-4 mr-2" /> Email Member Services
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal-600 to-emerald-500" />
              <CardContent className="p-8">
                <div className="text-[10px] font-bold uppercase tracking-wider text-teal-700 mb-2">Existing Members</div>
                <h3 className="text-xl font-bold text-slate-900">Change your F.I.P. plan</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Updating your coverage or family details? Use the change-of-plan form and contact an advisor if you need help.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="https://cunacaribbean.com/wp-content/uploads/2023/05/FIP-CI-CHANGE-OF-PLAN-FORM-MAY-2023_JA.pdf" target="_blank" rel="noreferrer" data-testid="fip-change-form">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                      <Download className="w-4 h-4 mr-2" /> Download Change Form
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50">
                      Talk to an Advisor <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#8A4D6F] text-xs font-semibold uppercase tracking-wider mb-3">
            FAQ
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
        </div>
        <Card className="border-0 shadow-lg bg-white">
          <CardContent className="p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`f${i}`} data-testid={`fip-faq-${i}`}>
                  <AccordionTrigger className="text-left text-slate-800">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default FIP;
