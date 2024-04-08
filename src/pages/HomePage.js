import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import TopSlider from "../components/home_components/TopSlider";
import Footer from "../components/other/Footer";
import HomePageHeader from "../components/home_components/HomePageHeader";
import ProcessFlow from "../components/home_components/ProcessFlow";
import FAQs from "../components/home_components/FAQs";
import AnnouncementTab from "../components/home_components/AnnouncementTab";
import ThemeSlider from "../components/home_components/ThemeSlider";
import SIHTimeLine from "../components/home_components/SIHTimeLine";
import EventSchedule from "../components/home_components/EventSchedule";
import OurCommittee from "../components/home_components/OurCommittee";
import DeveloperCards from "../components/home_components/DeveloperCards";
import Objective from "../components/home_components/Objective";
import Marquee from "../components/home_components/MarqueePage";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <TopSlider />
      <Marquee/>
      <HomePageHeader />
      <AnnouncementTab />
      <Objective />
      <ThemeSlider />
      <ProcessFlow />
      <SIHTimeLine />
      <EventSchedule />
      <OurCommittee />
      <FAQs />
      <DeveloperCards />
      <Footer />
    </>
  );
};

export default HomePage;
