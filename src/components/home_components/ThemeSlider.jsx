import React, { useState } from "react";
import sihThemesAPI, { sih2k23ThemesAPI } from "../../APIs/sihThemesAPI";
import { sliderSettings } from "../../utils/common";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

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

const ThemeSlider = () => {
  const [data] = useState(sihThemesAPI);

  return (
    <>
      <section className="themes container">
        <div className="paddings innerWidth theme-container">
          <div className="theme-head flexColStart">
            <span className="primaryText">SIH 2.0 Themes</span>
          </div>

          <Swiper {...sliderSettings}>
            {/* Buttons for slider */}

            <SliderButtons />

            {data.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div className="flexColCenter theme-card">
                    <img src={element.logo} alt="Announcement Logo" />
                    <span className="primaryText">{element.themeName}</span>
                    <span>{element.description}</span>
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

const ThemeSlider2k23 = () => {
  const [data] = useState(sih2k23ThemesAPI);

  return (
    <>
      <section className="themes container">
        <div className="paddings innerWidth theme-container">
          <div className="theme-head flexColStart">
            <span className="primaryText">SIH 2023 Themes</span>
          </div>

          <Swiper {...sliderSettings}>
            {/* Buttons for slider */}

            <SliderButtons />

            {data.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div className="flexColCenter theme-card">
                    <img src={element.logo} alt="Announcement Logo" />
                    <span className="primaryText">{element.themeName}</span>
                    <span>{element.description}</span>
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

export default ThemeSlider;
export { ThemeSlider2k23 };
