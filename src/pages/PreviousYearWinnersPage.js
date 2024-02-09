import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import PreviousYearWinners from "../components/result_components/PreviousYearWinners";

const PreviousYearWinnersPage = () => {
  return (
    <>
      <Navbar />
      <PreviousYearWinners />
      <Footer />
    </>
  );
};

export default PreviousYearWinnersPage;
