import React, { useState } from "react";
import { coordinatorsDataAPI } from "../../APIs/patronsDataAPI";
import { sliderSettings } from "../../utils/common";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const CoordinatorSlider = () => {
  const [data] = useState(coordinatorsDataAPI);

  return (
    <>
      <section className="coordinator container patron-card">
        <div className="committee-top">
          <img
            src="./images/community_images/coordinator.png"
            alt="Coordinators"
          />
          <h2>COORDINATORS</h2>
          <span>Here are some of our Coordinators</span>
          <span className="bottom-bar"></span>
        </div>
        <div className="paddings innerWidth theme-container">
          <div className="theme-head flexColStart">
            <span className="primaryText">Coordinators</span>
          </div>

          <Swiper {...sliderSettings}>
            {/* Buttons for slider */}

            <SliderButtons />

            {data.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div className="flexColCenter profile-card">
                    <div className="image">
                      <img src={element.photo} alt="" className="profile-img" />
                    </div>

                    <div className="text-data">
                      <span className="name">{element.name}</span>
                      <span className="job">{element.bio}</span>
                    </div>

                    <div className="media-buttons">
                      <NavLink
                        to={element.linkedInProfile}
                        style={{ background: "#0a63bc" }}
                        className="link"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </NavLink>
                      <NavLink
                        to={element.facebookProfile}
                        style={{ background: "#3b5998" }}
                        className="link"
                      >
                        <i className="bx bxl-facebook"></i>
                      </NavLink>
                      <NavLink
                        to={element.instagramProfile}
                        style={{ background: "#db1c8a" }}
                        className="link"
                      >
                        <i className="bx bxl-instagram"></i>
                      </NavLink>
                      <NavLink
                        to={element.twitterProfile}
                        style={{ background: "#03a9f4" }}
                        className="link"
                      >
                        <i className="bx bxl-twitter"></i>
                      </NavLink>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CoordinatorSlider;

const SliderButtons = () => {
  // useSwiper Hook
  const swiper = useSwiper();

  return (
    <div className="slider-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
