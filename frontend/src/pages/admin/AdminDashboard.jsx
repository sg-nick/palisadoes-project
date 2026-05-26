import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Megaphone, Image as ImageIcon, FileText, Users, TrendingUp } from "lucide-react";
import { api } from "../../lib/api";

const StatCard = ({ icon: Icon, label, value, accent, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
    data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
  >
    <div className="flex items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-wider text-slate-400">{label}</div>
        <div className="mt-2 text-3xl font-bold text-white">{value}</div>
      </div>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}25` }}>
        <Icon className="w-5 h-5" style={{ color: accent }} />
      </div>
    </div>
    <div className="mt-3 flex items-center gap-1 text-xs text-emerald-400">
      <TrendingUp className="w-3 h-3" /> Live data
    </div>
  </motion.div>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    api.get("/admin/analytics").then((r) => setStats(r.data || {}));
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400 mt-1">Welcome back. Here's what's happening on your site.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Megaphone} label="Active Notices" value={stats.active_notices ?? 0} accent="#8A4D6F" delay={0.05} />
        <StatCard icon={Megaphone} label="Total Notices" value={stats.total_notices ?? 0} accent="#a855f7" delay={0.1} />
        <StatCard icon={ImageIcon} label="Gallery Items" value={stats.gallery_items ?? 0} accent="#0d9488" delay={0.15} />
        <StatCard icon={FileText} label="Forms" value={stats.forms ?? 0} accent="#f59e0b" delay={0.2} />
      </div>

      <div className="mt-10 grid lg:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
        >
          <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
          <p className="text-sm text-slate-400 mt-1">Manage your site content quickly.</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              { to: "/admin/notices", label: "+ New Notice", color: "from-[#8A4D6F] to-[#9a5d7f]" },
              { to: "/admin/gallery", label: "+ Upload Photo", color: "from-[#0d9488] to-teal-400" },
              { to: "/admin/forms", label: "+ Add Form", color: "from-amber-500 to-orange-500" },
              { to: "/admin/notices", label: "Manage Content", color: "from-slate-700 to-slate-600" },
            ].map((a) => (
              <a
                key={a.label}
                href={a.to}
                className={`px-4 py-3 rounded-xl bg-gradient-to-br ${a.color} text-white text-sm font-semibold text-center hover:opacity-90 transition`}
              >
                {a.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
        >
          <h3 className="text-lg font-semibold text-white">About the Panel</h3>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            This admin panel lets you manage member-facing notices, the photo gallery, downloadable forms,
            and view simple analytics. Changes appear instantly on the public site.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
            <Users className="w-3.5 h-3.5" /> Single-admin access · JWT secured
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
