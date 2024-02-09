import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import RegistrationForm from "../components/form_components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <>
      <Navbar />
      <RegistrationForm />
      <Footer />
    </>
  );
};

export default RegistrationPage;
