import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import CurrentYearWinners from "../components/result_components/CurrentYearWinners";
import Lottie from "lottie-react";
import ComingSoonResult from "../animations/coming_soon.json";


const ComingSoonWinnersPage = () => {
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
      
     {/* <CurrentYearWinners/> */}
      {/* UnComment the above line for the current year finale results */}
      <Footer />
    </>
  );
};

export default ComingSoonWinnersPage;