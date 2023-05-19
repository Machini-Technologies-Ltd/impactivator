import React from "react";
import Navbar from "./components/core/Navbar";
import Banner from "./components/core/Banner";
import Impact from "./components/core/Impact";
import About from "./components/core/About";
import FindOutMore from "./components/core/FindOutMore";
import ExplainerVideo from "./components/ExplainerVideo";
import Roadmap from "./components/core/Roadmap";
import Footer from "./components/core/Footer";
import Press from "./components/core/Press";
import ImpactStatsFooter from "./components/core/ImpactStatsFooter";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Impact />
      <About />
      <FindOutMore />
      <ExplainerVideo />
      <Press />
      <Roadmap />
      <ImpactStatsFooter />
      <Footer />
    </div>
  );
}
