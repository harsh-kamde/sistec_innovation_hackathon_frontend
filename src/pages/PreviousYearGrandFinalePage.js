import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import PreviousYearGrandFinaleTeams from "../components/result_components/PreviousYearGrandFinaleTeams";

const PreviousYearGrandFinalePage = () => {
  return (
    <>
      <Navbar />
      <PreviousYearGrandFinaleTeams />
      <Footer />
    </>
  );
};

export default PreviousYearGrandFinalePage;
