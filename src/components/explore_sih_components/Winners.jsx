import React, { useState, useEffect, useCallback } from "react";
import "../../stylesheets/ExploreSIHPageStyle.css";
import BtnSlider from "./BtnSlider";

const winnersData = [
  {
    id: 1,
    image: "./images/Glimpse 2k23/Winners/1.jpg",
  },
  {
    id: 2,
    image: "./images/Glimpse 2k23/Winners/2.jpg",
  },
  {
    id: 3,
    image: "./images/Glimpse 2k23/Winners/3.jpg",
  },
  {
    id: 4,
    image: "./images/Glimpse 2k23/Winners/4.jpg",
  },
];

const Winners = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = useCallback(() => {
    if (slideIndex !== winnersData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === winnersData.length) {
      setSlideIndex(1);
    }
  }, [slideIndex]);

  const prevSlide = useCallback(() => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(winnersData.length);
    }
  }, [slideIndex]);

  // To automatically change the image
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <section className="winners">
        <div className="committee-top">
          <img src="./images/Glimpse 2k23/Winners/winners.png" alt="Winners" />
          <h2>Winners of SIH 2023</h2>
          <span>Here are the winners of SIH 2023</span>
          <span className="bottom-bar"></span>
        </div>
        <div className="container-slider">
          {winnersData.map((element, index) => {
            return (
              <>
                <div
                  className={
                    slideIndex === index + 1 ? "slide active-anim" : "slide"
                  }
                  key={element.id}
                >
                  <img src={element.image} alt="Winners of SIH 2023" />
                </div>
              </>
            );
          })}

          {/* left and right arrow button */}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />

          {/* Circle indicators for image */}
          <div className="container-dots">
            {Array.from({ length: winnersData.length }).map((_, index) => (
              <div
                onClick={() => setSlideIndex(index + 1)}
                key={index}
                className={slideIndex === index + 1 ? "dot active-dot" : "dot"}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Winners;
