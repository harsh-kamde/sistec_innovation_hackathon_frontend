import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import EventSchedule from "../components/home_components/EventSchedule";
import Footer from "../components/other/Footer";

const Schedule = () => {
  return (
    <>
      <Navbar />
      <div className="margin-top-ultra-max"></div>
      <EventSchedule />
      <Footer />
    </>
  );
};

export default Schedule;
