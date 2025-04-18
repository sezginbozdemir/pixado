import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfoliu from "../pages/Portfoliu";
import ProjectDetail from "../components/portfoliu/projects-list/ProjectDetail";
import Services from "../pages/Services";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import WebDesign from "../pages/WebDesign";
import ReclameVideo from "../pages/ReclameVideo";
import VfxVideo from "../pages/VfxVideo";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfoliu" element={<Portfoliu />} />
        <Route path="/portfoliu/:id" element={<ProjectDetail />} />
        <Route path="/servicii/web-design" element={<WebDesign />} />
        <Route path="/servicii/reclame-video" element={<ReclameVideo />} />
        <Route path="/servicii/vfx-video" element={<VfxVideo />} />
        <Route path="/servicii" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
