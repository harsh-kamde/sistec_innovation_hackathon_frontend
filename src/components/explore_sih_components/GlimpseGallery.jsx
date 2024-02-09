import React, { useState } from "react";
import { sliderSettings } from "../../utils/common";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const galleryImages = [
  {
    id: 1,
    img: "/images/Glimpse 2k23/1.jpg",
  },
  {
    id: 2,
    img: "/images/Glimpse 2k23/2.jpg",
  },
  {
    id: 3,
    img: "/images/Glimpse 2k23/3.jpg",
  },
  {
    id: 4,
    img: "/images/Glimpse 2k23/4.jpg",
  },
  {
    id: 5,
    img: "/images/Glimpse 2k23/5.jpg",
  },
  {
    id: 6,
    img: "/images/Glimpse 2k23/6.jpg",
  },
  {
    id: 7,
    img: "/images/Glimpse 2k23/7.jpg",
  },
  {
    id: 8,
    img: "/images/Glimpse 2k23/8.png",
  },
  {
    id: 9,
    img: "/images/Glimpse 2k23/9.jpg",
  },
  {
    id: 10,
    img: "/images/Glimpse 2k23/10.jpg",
  },
  {
    id: 11,
    img: "/images/Glimpse 2k23/11.jpg",
  },
  {
    id: 12,
    img: "/images/Glimpse 2k23/12.jpg",
  },
  {
    id: 13,
    img: "/images/Glimpse 2k23/13.jpg",
  },
  {
    id: 14,
    img: "/images/Glimpse 2k23/14.jpg",
  },
  {
    id: 15,
    img: "/images/Glimpse 2k23/15.jpg",
  },
  {
    id: 16,
    img: "/images/Glimpse 2k23/16.jpg",
  },
  {
    id: 17,
    img: "/images/Glimpse 2k23/17.jpg",
  },
  {
    id: 18,
    img: "/images/Glimpse 2k23/18.jpg",
  },
  {
    id: 19,
    img: "/images/Glimpse 2k23/19.jpg",
  },
  {
    id: 20,
    img: "/images/Glimpse 2k23/20.jpg",
  },
  {
    id: 21,
    img: "/images/Glimpse 2k23/21.jpg",
  },
];

const GlimpseGallery = () => {
  const [data] = useState(galleryImages);

  return (
    <>
      <section className="glimpse container">
        <div className="paddings innerWidth theme-container">
          <div className="theme-head flexColStart">
            <span className="primaryText">2023 Snapshots</span>
          </div>

          <Swiper {...sliderSettings}>
            {/* Buttons for slider */}

            <SliderButtons />

            {data.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div className="flexColCenter glimpse-card">
                    <img src={element.img} alt="Announcement Logo" />
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

export default GlimpseGallery;

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
