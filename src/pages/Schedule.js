import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import Lottie from "lottie-react";
import ComingSoonResult from "../animations/coming_soon.json";
import EventSchedule from "../components/home_components/EventSchedule";
import Footer from "../components/other/Footer";

const Schedule = () => {
  return (
    <>
      <Navbar />
      <section className="coming-soon">
        <Lottie
          loop={true}
          animationData={ComingSoonResult}
          className="lottie-animation"
        />
      </section>
      <div className="margin-top-ultra-max"></div>
      <EventSchedule />
      <Footer />
    </>
  );
};

export default Schedule;
