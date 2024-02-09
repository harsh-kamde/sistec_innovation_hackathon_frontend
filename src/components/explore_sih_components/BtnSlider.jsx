import React from "react";
import "../../stylesheets/ExploreSIHPageStyle.css";

export default function BtnSlider({direction, moveSlide}) {
  return (
    <>
      <button
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        onClick={moveSlide}
      >
        <i
          className={
            direction === "next"
              ? "fa-solid fa-arrow-right-long"
              : "fa-solid fa-arrow-left-long"
          }
        ></i>
      </button>
    </>
  );
};

