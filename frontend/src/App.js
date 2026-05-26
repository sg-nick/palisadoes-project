import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CompanyProfile from "./pages/CompanyProfile";
import ProductsServices from "./pages/ProductsServices";
import Policies from "./pages/Policies";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import DownloadForms from "./pages/DownloadForms";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import FIP from "./pages/FIP";
import Loans from "./pages/Loans";
import Membership from "./pages/Membership";
import OnlineBanking from "./pages/OnlineBanking";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNotices from "./pages/admin/AdminNotices";
import AdminGallery from "./pages/admin/AdminGallery";
import AdminForms from "./pages/admin/AdminForms";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
        <Routes>
          {/* Admin routes (no public layout) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="notices" element={<AdminNotices />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="forms" element={<AdminForms />} />
          </Route>

          {/* Public site */}
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<CompanyProfile />} />
                  <Route path="/company-profile" element={<CompanyProfile />} />
                  <Route path="/products-services" element={<ProductsServices />} />
                  <Route path="/policies" element={<Policies />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                  <Route path="/download-forms" element={<DownloadForms />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/fip" element={<FIP />} />
                  <Route path="/loans" element={<Loans />} />
                  <Route path="/membership" element={<Membership />} />
                  <Route path="/online-banking" element={<OnlineBanking />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
