import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { assetUrl } from "../lib/assets";

const ONLINE_BANKING_URL = "https://gia.msd-tt.com/palis/login.php";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/products-services", label: "Products & Services" },
  { to: "/policies", label: "Policies" },
  { to: "/download-forms", label: "Forms" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [now, setNow] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${
        scrolled ? "shadow-md bg-white" : "bg-white/95 backdrop-blur"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-[#8A4D6F] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
          <span>Serving Jamaica's aviation community since 1953</span>
          <span>
            {now.toLocaleString(undefined, {
              weekday: "short", month: "short", day: "numeric", year: "numeric",
              hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
            })}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-20 gap-6">
          <Link to="/" className="flex items-center group shrink-0">
            <img src={assetUrl("/Palisadoes_logo.png")} alt="Palisadoes Co-op Credit Union" className="h-24 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center flex-1 justify-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className={({ isActive }) =>
                  `px-2.5 py-2 rounded-md text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#8A4D6F] bg-purple-50"
                      : "text-slate-700 hover:text-[#8A4D6F] hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block ml-auto shrink-0">
            <a href={ONLINE_BANKING_URL} target="_blank" rel="noreferrer" data-testid="online-banking-btn">
              <Button className="bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-sm">
                <Lock className="w-4 h-4 mr-2" />
                Online Banking
              </Button>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-auto p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            data-testid="mobile-menu-btn"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "text-[#8A4D6F] bg-purple-50" : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={ONLINE_BANKING_URL} target="_blank" rel="noreferrer" className="block pt-2">
              <Button className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-white">
                <Lock className="w-4 h-4 mr-2" /> Online Banking
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
