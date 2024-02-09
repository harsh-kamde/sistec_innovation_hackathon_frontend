import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import HomePageHeader from "../components/home_components/HomePageHeader";
import ProcessFlow from "../components/home_components/ProcessFlow";
import WhyJoinSIH from "../components/explore_sih_components/WhyJoinSIH";

const AboutSIHPage = () => {
  return (
    <>
      <Navbar />
      <HomePageHeader />
      <WhyJoinSIH />
      <ProcessFlow />
      <Footer />
    </>
  );
};

export default AboutSIHPage;
