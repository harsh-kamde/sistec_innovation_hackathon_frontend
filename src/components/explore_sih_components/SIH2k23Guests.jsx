import React, { useState } from "react";
import InaugurationOfFunction2k23 from "./InaugurationOfFunction2k23";
import ValedictoryOfFunction2k23 from "./ValedictoryOfFunction2k23";

function SIH2k23Guests() {
  // State to track active button
  const [activeButton, setActiveButton] = useState("Inauguration of Function");

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container">
      <div className="state-toggler">
        {/* Buttons */}
        <button
          onClick={() => handleButtonClick("Inauguration of Function")}
          className={
            activeButton === "Inauguration of Function"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Inauguration of Function
        </button>
        <button
          onClick={() => handleButtonClick("Valedictory of Function")}
          className={
            activeButton === "Valedictory of Function"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Valedictory of Function
        </button>
      </div>

      <div className="text-center">
        <p className="schedule-para">
          The event is organised under the Computer Science and Engineering
          department at SISTec-R.
        </p>
      </div>

      {/* Content based on active button */}
      {activeButton === "Inauguration of Function" && (
        <InaugurationOfFunction2k23 />
      )}

      {activeButton === "Valedictory of Function" && (
        <ValedictoryOfFunction2k23 />
      )}
    </div>
  );
}

export default SIH2k23Guests;
