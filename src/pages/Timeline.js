import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import SIHTimeLine from "../components/home_components/SIHTimeLine";
import Footer from "../components/other/Footer";

const Timeline = () => {
  return (
    <>
      <Navbar />
      <div className="margin-top-ultra-max"></div>
      <SIHTimeLine />
      <Footer />
    </>
  );
};

export default Timeline;
