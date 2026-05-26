import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Wallet,
  Users,
  Award,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Calculator,
  Sparkles,
  Building2,
  Plane,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import HomeFIPSection from "../components/HomeFIPSection";
import HomeGallerySection from "../components/HomeGallerySection";
import HomeAnnualReports from "../components/HomeAnnualReports";
import HomeLoanCalculator from "../components/HomeLoanCalculator";
import ImageSlot from "../components/ImageSlot";
import { assetUrl } from "../lib/assets";
import { companyInfo, stats, locations } from "../mock/mockData";
const iconMap = { TrendingUp, Wallet, Users, Award };

const homeImages = {
  branch: assetUrl("/PACCUL TEST IMAGE 3.png"),
};

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(148, 85, 117, 0.86) 0%, rgba(154, 88, 123, 0.8) 55%, rgba(17, 150, 140, 0.76) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-purple-50 text-xs font-medium tracking-wide uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5" /> Serving Jamaica since 1953
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                Building <span className="text-teal-300">wealth</span>. <br />
                Strengthening <span className="text-teal-300">lives</span>.
              </h1>
              <p className="mt-6 text-purple-50/90 text-lg leading-relaxed max-w-xl">
                {companyInfo.mission}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products-services">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg">
                    Apply for a Loan <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/download-forms">
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur">
                    Become a Member
                  </Button>
                </Link>
                <Link to="/online-banking">
                  <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                    Online Banking <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#loan-calculator">
                  <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                    Loan Calculator <Calculator className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-purple-100/80">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-teal-300" /> BOJ Regulated</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-300" /> JCCUL Insured</div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                  <div className="relative h-72 sm:h-80">
                    <ImageSlot label="Member image space" className="h-full rounded-none border-white/20 bg-white/10 text-white/75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8A4D6F]">
                        <Plane className="w-3.5 h-3.5 -rotate-45" />
                        Our Vision
                      </div>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white">
                        {companyInfo.vision}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-white/10 bg-slate-950/55 text-white">
                    <div className="p-5">
                      <div className="text-2xl font-bold text-[#8A4D6F]">70+</div>
                      <div className="text-xs text-white/65">Years</div>
                    </div>
                    <div className="p-5">
                      <div className="text-2xl font-bold text-[#8A4D6F]">000</div>
                      <div className="text-xs text-white/65">Members</div>
                    </div>
                    <div className="p-5">
                      <div className="text-2xl font-bold text-teal-300">000</div>
                      <div className="text-xs text-white/65">Assets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = iconMap[s.icon] || TrendingUp;
            return (
              <Card key={s.label} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">{s.label}</div>
                      <div className="mt-2 text-2xl lg:text-3xl font-bold text-[#8A4D6F]">{s.value}</div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#8A4D6F] text-xs font-semibold uppercase tracking-wider mb-4">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Trusted service to Jamaica since 1953
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Founded in 1953 at Norman Manley International Airport, Palisadoes Co-operative Credit Union
              has grown into one of Jamaica's most respected member-owned financial institutions. We exist for
              our members, returning value through better rates, lower fees, and personalized service.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Member-owned, member-driven",
                "Competitive savings & loan rates",
                "Three convenient locations island-wide",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about-us" className="inline-block mt-8">
              <Button className="bg-[#8A4D6F] hover:bg-[#6e3d59] text-white">
                Learn more about us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="relative pb-10">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <ImageSlot label="About image space" className="h-[430px]" />
            </div>
            <div className="absolute inset-x-4 -bottom-2 grid grid-cols-2 gap-3 sm:inset-x-8">
              {[
                { label: "Founded", value: "1953", icon: Award },
                { label: "Branches", value: "3", icon: Building2 },
                { label: "Members", value: "000", icon: Users },
                { label: "Assets", value: "000", icon: TrendingUp },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">
                  <item.icon className="w-5 h-5 text-teal-600 mb-2" />
                  <div className="text-xl font-bold text-[#8A4D6F]">{item.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>

      {/* LOCATIONS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-12">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
                Our Locations
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Visit a branch near you</h2>
              <p className="mt-3 text-slate-600 max-w-2xl">
                Three convenient locations across Jamaica to serve our members.
              </p>
            </div>
            <div className="hidden overflow-hidden rounded-2xl shadow-lg lg:block">
              <img
                src={homeImages.branch}
                alt="Palisadoes branch location"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc) => (
              <Card key={loc.id} className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-lg bg-purple-50 group-hover:bg-[#8A4D6F] flex items-center justify-center mb-4 transition-colors">
                    <MapPin className="w-5 h-5 text-[#8A4D6F] group-hover:text-white transition-colors" />
                  </div>
                  {loc.isHeadOffice && (
                    <span className="inline-block text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded uppercase tracking-wider mb-2">Head Office</span>
                  )}
                  <h3 className="font-semibold text-slate-900">{loc.name}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{loc.branch}</p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{loc.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FIP Section */}
      <HomeFIPSection />

      {/* Loan Calculator */}
      <HomeLoanCalculator />

      {/* Gallery Section */}
      <HomeGallerySection />

      {/* Annual Reports */}
      <HomeAnnualReports />

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#8A4D6F] to-[#0d9488] p-10 sm:p-14">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to take charge of your financial future?</h2>
              <p className="mt-4 text-purple-50/90 max-w-xl">
                Join over 000 members already benefiting from competitive rates, dependable service, and a community that truly invests in you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/download-forms">
                <Button size="lg" className="bg-white text-[#8A4D6F] hover:bg-purple-50">
                  Become a Member
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
