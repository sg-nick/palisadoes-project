import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { assetUrl } from "../lib/assets";

const Footer = () => {
  return (
    <footer className="bg-[#8A4D6F] text-slate-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                <img src={assetUrl("/Palisadoes_logo_shotcut.png")} alt="Palisadoes logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <div className="text-white font-bold">Palisadoes</div>
                <div className="text-xs text-purple-200 uppercase tracking-wider">Co-op Credit Union</div>
              </div>
            </div>
            <p className="text-sm text-purple-100/80 leading-relaxed">
              Maximizing members' wealth and enhancing wellbeing through lifelong relationships since 1953.
            </p>
            <div className="flex gap-3 mt-5">
              <a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" href="#" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" href="#" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
              <a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" href="#" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-white transition-colors" to="/about-us">About Us</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/products-services">Products & Services</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/loans">Loans</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/membership">Membership</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/fip">FIP</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/gallery">Gallery</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/download-forms">Forms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Member Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Loans</li>
              <li>Savings & Deposits</li>
              <li>AccessPlus Debit Mastercard</li>
              <li>Bill Payment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-purple-200 shrink-0" /><span>Norman Manley Int'l Airport, Kingston</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-purple-200 shrink-0" /><span>(876) 924-8206</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-purple-200 shrink-0" /><span>(876) 932-7107/10</span></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-purple-200 shrink-0" /><span>member.services@palisadoescreditunion.com</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-xs text-purple-100/70 flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Palisadoes Co-operative Credit Union Ltd. All rights reserved.</span>
          <span>Regulated by the Bank of Jamaica &middot; Insured by JCCUL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
