import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import { locations } from "../mock/mockData";
import { api } from "../lib/api";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const contactStaff = [
    {
      title: "Member Services Officer (Head Office)",
      email: "member.services@palisadoescreditunion.com",
    },
    {
      title: "Administration (Head Office)",
      email: "admin.services@palisadoescreditunion.com",
    },
    {
      title: "Accounts Department (Head Office)",
      email: "accounts@palisadoescreditunion.com",
    },
    {
      title: "Carib Cement Branch",
      email: "caribcement@palisadoescreditunion.com",
    },
    {
      title: "Credit Department (Head Office)",
      email: "credit.services@palisadoescreditunion.com",
    },
    {
      title: "Montego Bay Branch",
      email: "kadiene.smith@palisadoescreditunion.com",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please complete all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await api.post("/contact", form);
      toast({ title: "Message sent", description: "We'll get back to you within 1-2 business days." });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      toast({ title: "Message not sent", description: "Please try again or email member services directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Visit a branch, call us, or send us a message. Our member services team is ready to help."
        breadcrumb="Contact"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Branches */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Branches</h2>
            <div className="space-y-4">
              {locations.map((loc) => (
                <Card key={loc.id} className="border border-slate-100 shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#8A4D6F]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-slate-900">{loc.name}</h3>
                          {loc.isHeadOffice && (
                            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded uppercase tracking-wider">Head Office</span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500">{loc.branch}</p>
                        <p className="text-sm text-slate-700 mt-2">{loc.address}</p>
                        <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-600">
                          <span className="inline-flex items-center gap-1"><Phone className="w-3 h-3" /> {loc.phone}</span>
                          {loc.fax && (
                            <span className="inline-flex items-center gap-1">
                              <Phone className="w-3 h-3" /> Fax: {loc.fax}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {loc.hours}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 aspect-[16/9] bg-slate-100">
              <iframe
                title="Norman Manley International Airport"
                src="https://www.google.com/maps?q=Norman+Manley+International+Airport+Kingston+Jamaica&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-7">
                <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                <p className="text-sm text-slate-500 mt-1">We'll respond within 1-2 business days.</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" className="mt-1.5 resize-none" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-[#8A4D6F] hover:bg-[#6e3d59] text-white">
                    {sent ? <><CheckCircle2 className="w-4 h-4 mr-2" /> Sent</> : <><Send className="w-4 h-4 mr-2" /> {loading ? "Sending..." : "Send Message"}</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="border border-slate-200 shadow-sm bg-white mt-6 lg:mt-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Personnel</h2>
                <div className="space-y-4">
                  {contactStaff.map((contact) => (
                    <div key={contact.email} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <p className="text-sm font-medium text-slate-900">{contact.title}</p>
                      <a href={`mailto:${contact.email}`} className="text-sm text-teal-700 hover:text-teal-900 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
