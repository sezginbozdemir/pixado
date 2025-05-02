import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Portfoliu from "@/pages/Portfoliu";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import WebDesign from "@/pages/WebDesign";
import ReclameVideo from "@/pages/online-marketing/ReclameVideo";
import VfxVideo from "@/pages/online-marketing/VfxVideo";
import Project from "@/pages/Project";
import Branding from "@/pages/branding/Branding";
import LogoDesign from "@/pages/branding/LogoDesing";
import VisualIdentity from "@/pages/branding/VisualIdentity";
import ManualBranding from "@/pages/branding/ManualBranding";
import OnlineMarketing from "@/pages/online-marketing/OnlineMarketing";
import SocialSetup from "@/pages/online-marketing/SocialSetup";
import Seo from "@/pages/online-marketing/Seo";
import Smm from "@/pages/online-marketing/Smm";
import NotFound from "@/pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <div className="app-router">
        <div className="header-div">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfoliu" element={<Portfoliu />} />
          <Route path="/portfoliu/:id" element={<Project />} />
          <Route path="/servicii/web-design" element={<WebDesign />} />
          <Route path="*" element={<NotFound />} />

          {/* Branding */}

          <Route path="/servicii/branding" element={<Branding />} />
          <Route
            path="/servicii/branding/logo-design"
            element={<LogoDesign />}
          />
          <Route
            path="/servicii/branding/identitate-vizuala"
            element={<VisualIdentity />}
          />
          <Route
            path="/servicii/branding/manual-branding"
            element={<ManualBranding />}
          />
          {/* Online Marketing */}
          <Route
            path="/servicii/online-marketing"
            element={<OnlineMarketing />}
          />
          <Route
            path="/servicii/online-marketing/google-social-setup"
            element={<SocialSetup />}
          />

          <Route
            path="/servicii/online-marketing/optimizare-seo"
            element={<Seo />}
          />

          <Route
            path="/servicii/online-marketing/smm-social-media-marketing"
            element={<Smm />}
          />

          <Route
            path="/servicii/online-marketing/reclame-video"
            element={<ReclameVideo />}
          />
          <Route path="/servicii/online-marketing/vfx" element={<VfxVideo />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
