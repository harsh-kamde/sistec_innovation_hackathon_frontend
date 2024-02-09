import React from "react";
import Navbar from "../components/other/Navbar";
import Contact from "../components/contact_components/Contact";
import Footer from "../components/other/Footer";
import ContactPageHeader from "../components/contact_components/ContactPageHeader";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactPageHeader />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
