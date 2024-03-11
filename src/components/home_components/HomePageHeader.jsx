import React from "react";
import { TypeAnimation } from "react-type-animation";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const HomePageHeader = () => {
  return (
    <>
      <section className="homepage">
        <section className="container main-header-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h3 className="sih-offers">
                SIH is{" "}
                <TypeAnimation
                  className="typing"
                  sequence={[
                    "an Innovative Hackathon",
                    2000,
                    "Organized by SISTec",
                    2000,
                  ]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                />
              </h3>

              <p className="main-header-para">
                SISTec Innovation Hackathon is a nationwide initiative to
                provide a platform for students to solve some of the pressing
                problems we face in our daily life, and thus inculcate a culture
                of product innovation and a problem-solving mindset. The event
                will encourage out-of-the-box thinking among young minds,
                especially engineering students from across India
              </p>

              <NavLink to="/register" className="my-btn disabled">
                Registeration Closed
              </NavLink>
            </div>

            {/* Main Header Right Side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-header-section-images order-md-first order-sm-first">
              {/* Embed Youtube Video */}
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/BkPziwiZRj8?si=3z16pZZ-kbvNMYQp&rel=0"
                  title="SISTec Innovation Hackathon 2.0"
                  allowFullScreen={false}
                  className="video"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePageHeader;
