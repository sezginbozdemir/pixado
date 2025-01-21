import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfoliu from "../pages/Portfoliu";
import ProjectDetail from "../components/portfoliu/projects-list/ProjectDetail";
import Services from "../pages/Services";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfoliu" element={<Portfoliu />} />
        <Route path="/portfoliu/:id" element={<ProjectDetail />} />

        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
