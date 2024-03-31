import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
// import Lottie from "lottie-react";
// import ComingSoonResult from "../animations/coming_soon.json";
import CurrentYearGrandFinaleTeams from "../components/result_components/CurrentYearGrandFinaleTeams";

const ComingSoonResultPage = () => {
  return (
    <>
      <Navbar />
    
      {/* <section className="coming-soon">
        <Lottie
          loop={true}
          animationData={ComingSoonResult}
          className="lottie-animation"
        />
      </section> */}
      
  <CurrentYearGrandFinaleTeams />
      {/* UnComment the above line for the current year finale results or comment above line for animation */}
      <Footer />
    </>
  );
};

export default ComingSoonResultPage;
