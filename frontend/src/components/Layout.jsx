import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NoticePopup from "./NoticePopup";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <NoticePopup />
    </div>
  );
};

export default Layout;
