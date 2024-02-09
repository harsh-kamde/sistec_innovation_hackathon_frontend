import React from "react";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import ProblemStatements from "../components/PS_components/ProblemStatements";

const ProblemStatementsPage = () => {
  return (
    <>
      <Navbar />
      <ProblemStatements />
      <Footer />
    </>
  );
};

export default ProblemStatementsPage;
