import React from "react";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { LogOut, LayoutDashboard, Megaphone, Image as ImageIcon, FileText } from "lucide-react";
import { assetUrl } from "../../lib/assets";

const AdminLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("pali_admin_token");
  const email = localStorage.getItem("pali_admin_email");

  if (!token) return <Navigate to="/admin/login" replace />;

  const logout = () => {
    localStorage.removeItem("pali_admin_token");
    localStorage.removeItem("pali_admin_email");
    navigate("/admin/login");
  };

  const links = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/notices", label: "Notices", icon: Megaphone },
    { to: "/admin/gallery", label: "Gallery", icon: ImageIcon },
    { to: "/admin/forms", label: "Forms", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <aside className="w-64 shrink-0 bg-slate-900 border-r border-slate-800 hidden lg:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
              <img src={assetUrl("/Palisadoes_logo_shotcut.png")} alt="Palisadoes logo" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <div className="font-bold text-white">Palisadoes</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400">Admin Panel</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`admin-nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-gradient-to-r from-[#8A4D6F]/30 to-[#0d9488]/20 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`
              }
            >
              <l.icon className="w-4 h-4" />
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-slate-800">
          <div className="px-3 py-2 text-xs text-slate-500 truncate">{email}</div>
          <button
            onClick={logout}
            data-testid="admin-logout"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-500/10"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <header className="lg:hidden p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
          <div className="font-bold">Palisadoes Admin</div>
          <button onClick={logout} className="text-xs text-rose-400">Logout</button>
        </header>
        <main className="p-6 lg:p-10 max-w-6xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
