import React, { useState } from "react";
import PatronsCommitteeCard from "./PatronsCommitteeCard";
import AdvisoryCommitteeCard from "./AdvisoryCommitteeCard";
import CoordinatorSlider from "./CoordinatorSlider";

function OurCommittee() {
  // State to track active button
  const [activeButton, setActiveButton] = useState("Patrons");

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container">
      <div className="text-center  mb-5">
        <h3 className="main-heading-center mb-2 ">Our Committee</h3>
        <span style={{ color: "var(--text-black-700)" }}>
          Here is our committee
        </span>
      </div>

      <div className="state-toggler">
        {/* Buttons */}
        <button
          onClick={() => handleButtonClick("Patrons")}
          className={
            activeButton === "Patrons"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Patrons
        </button>
        <button
          onClick={() => handleButtonClick("Advisory Committee")}
          className={
            activeButton === "Advisory Committee"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Advisory Committee
        </button>
        <button
          onClick={() => handleButtonClick("Coordinators")}
          className={
            activeButton === "Coordinators"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Coordinators
        </button>
      </div>

      <div className="text-center">
        <p className="schedule-para">
          The event is organised under the Computer Science and Engineering
          department at SISTec-R.
        </p>
      </div>

      {/* Content based on active button */}
      {activeButton === "Patrons" && <PatronsCommitteeCard />}

      {activeButton === "Advisory Committee" && <AdvisoryCommitteeCard />}

      {activeButton === "Coordinators" && <CoordinatorSlider />}
    </div>
  );
}

export default OurCommittee;
