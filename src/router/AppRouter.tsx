import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfoliu from "../pages/Portfoliu";
import Services from "../pages/Services";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import WebDesign from "../pages/WebDesign";
import ReclameVideo from "../pages/ReclameVideo";
import VfxVideo from "../pages/VfxVideo";
import Project from "../pages/Project";
import Branding from "../pages/branding/Branding";
import LogoDesign from "../pages/branding/LogoDesing";
import VisualIdentity from "../pages/branding/VisualIdentity";
import ManualBranding from "../pages/branding/ManualBranding";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfoliu" element={<Portfoliu />} />
        <Route path="/servicii" element={<Services />} />
        <Route path="/portfoliu/:id" element={<Project />} />
        <Route path="/servicii/web-design" element={<WebDesign />} />
        <Route path="/servicii/reclame-video" element={<ReclameVideo />} />
        <Route path="/servicii/vfx" element={<VfxVideo />} />

        {/* Branding */}

        <Route path="/servicii/branding" element={<Branding />} />
        <Route path="/servicii/branding/logo-design" element={<LogoDesign />} />
        <Route
          path="/servicii/branding/identitate-vizuala"
          element={<VisualIdentity />}
        />
        <Route
          path="/servicii/branding/manual-branding"
          element={<ManualBranding />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
