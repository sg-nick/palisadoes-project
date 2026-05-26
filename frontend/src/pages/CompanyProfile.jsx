import React from "react";
import {
  Building2,
  Briefcase,
  Scale,
  BookOpen,
  Users,
  CheckCircle2,
  HeartHandshake,
  Target,
  Eye,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { corporateInfo, staffSections } from "../mock/mockData";

const coreValues = [
  "Integrity",
  "Member Commitment",
  "Trust",
  "Innovation",
  "Accountability",
  "Community Development",
];

const CompanyProfile = () => {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="About Us"
        subtitle="Palisadoes Co-operative Credit Union is a member-owned financial institution built on integrity, cooperation, and personal service since 1953."
        breadcrumb="About Us"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#8A4D6F] text-xs font-semibold uppercase tracking-wider mb-4">
              <HeartHandshake className="w-4 h-4" />
              Member-owned since 1953
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Helping members, families, and communities build financial security.
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Palisadoes Co-operative Credit Union is a member-owned financial institution committed to helping individuals, families, and communities achieve financial growth and security. Since 1953, we have proudly served Jamaica with trusted financial services built on integrity, cooperation, and personal service.
              </p>
              <p>
                Originally established to serve workers within the aviation industry, Palisadoes Credit Union has grown to support members across several sectors, including aviation, petroleum, construction, and surrounding communities. For more than seven decades, we have remained dedicated to improving the lives of our members through affordable financial solutions and a strong culture of service.
              </p>
              <p>
                Our members are at the heart of everything we do. We provide savings accounts, loans, fixed deposits, online banking, insurance products, and financial guidance that help members build brighter futures with a secure and supportive financial partner.
              </p>
              <p>
                We believe in more than banking. Through scholarships, outreach initiatives, and member-focused programs, we continue to support community development, build trust, and create opportunities for generations to come.
              </p>
              <p>
                With branches conveniently located in Kingston and Montego Bay, our team remains committed to delivering professional, friendly, and reliable service to every member we serve.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Target className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To provide high-quality financial services that empower our members, promote financial stability, and support community growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#8A4D6F]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To be Jamaica's preferred credit union by delivering innovative financial solutions, exceptional member service, and lasting value.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Core Values</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {coreValues.map((value) => (
                    <div key={value} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      {value}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {[
            { icon: Building2, label: "Registered Office", value: corporateInfo.registeredOffice },
            { icon: Briefcase, label: "Bankers", value: corporateInfo.bankers },
            { icon: BookOpen, label: "Auditors", value: corporateInfo.auditors },
            { icon: Scale, label: "Attorneys", value: corporateInfo.attorneys },
          ].map((item) => (
            <Card key={item.label} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#8A4D6F]" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">{item.label}</div>
                <div className="mt-2 text-sm text-slate-800 font-medium leading-relaxed">{item.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-[#8A4D6F]" />
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Staff & Elected Officials</h2>
              <p className="text-sm text-slate-500 mt-1">
                Meet the Palisadoes team, volunteers, and governance members who support our cooperative.
              </p>
            </div>
          </div>
          <Accordion type="multiple" className="space-y-3">
            {staffSections.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border border-slate-200 rounded-xl bg-white px-5 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-slate-900 font-semibold">{section.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-2">
                    {section.members.map((m) => (
                      <div key={m.name} className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="font-medium text-slate-900">{m.name}</div>
                        <div className="text-sm text-slate-500 mt-0.5">{m.role}</div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
