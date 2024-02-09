import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import AnnouncementTab from "../components/home_components/AnnouncementTab";
import ThemeSlider from "../components/home_components/ThemeSlider";
import SIHTimeLine from "../components/home_components/SIHTimeLine";
import EventSchedule from "../components/home_components/EventSchedule";

const SIH2024Page = () => {
  return (
    <>
      <Navbar />
      <div className="margin-top-ultra-max"></div>
      <AnnouncementTab />
      <ThemeSlider />
      <SIHTimeLine />
      <EventSchedule />
      <Footer />
    </>
  );
};

export default SIH2024Page;
