import React, { useState, useMemo } from "react";
import { Download, FileText, Search, Eye } from "lucide-react";
import PageHero from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { useToast } from "../hooks/use-toast";
import { downloadForms } from "../mock/mockData";

const categories = [
  "All",
  "Membership",
  "Loans",
  "Savings",
  "Banking & Agreements",
  "Requests & Other",
];

const DownloadForms = () => {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");
  const { toast } = useToast();

  const filtered = useMemo(() => {
    return downloadForms.filter((f) => {
      const matchCat = tab === "All" || f.category === tab;
      const matchQuery = f.name.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, tab]);

  const handleDownload = (name) => {
    toast({
      title: "Download started",
      description: `${name} will be available shortly.`,
    });
  };

  return (
    <div>
      <PageHero
        eyebrow="Forms"
        title="Download Forms"
        subtitle="Access all the forms you need — from membership applications to loan requests and compliance documents."
        breadcrumb="Download Forms"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search forms..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="flex flex-wrap h-auto bg-slate-100 p-1">
            {categories.map((c) => (
              <TabsTrigger key={c} value={c} className="data-[state=active]:bg-white data-[state=active]:text-[#8A4D6F] data-[state=active]:shadow-sm">
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={tab} className="mt-8">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                No forms match your search.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((f) => (
                  <Card key={f.name} className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-50 group-hover:bg-[#8A4D6F] flex items-center justify-center shrink-0 transition-colors">
                          <FileText className="w-5 h-5 text-[#8A4D6F] group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-slate-900 leading-snug">{f.name}</h3>
                          <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                            <span>PDF</span>
                            <span>·</span>
                            <span>{f.size}</span>
                          </div>
                          <span className="inline-block mt-2 text-[10px] uppercase tracking-wider bg-teal-50 text-teal-700 px-2 py-0.5 rounded font-semibold">
                            {f.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-5">
                        <Button asChild className="flex-1 bg-[#8A4D6F] hover:bg-[#6e3d59] text-white">
                          <a href={f.url} download onClick={() => handleDownload(f.name)}>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="icon" aria-label="Preview">
                          <a href={f.url} target="_blank" rel="noreferrer">
                            <Eye className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default DownloadForms;
