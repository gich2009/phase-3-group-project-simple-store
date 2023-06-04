import React from "react";
import FooterSection from "./FooterSection";
import LandingSection from "./LandingSection";
import MetricSection from "./MetricSection";
import ServiceSection from "./ServiceSection";
import ValuesSection from "./ValuesSection";


function HomePage(){
  return (
    <div>
      <LandingSection />
      <ServiceSection />
      <ValuesSection />
      <MetricSection />
      <FooterSection />
    </div>
  );
}

export default HomePage;