import React, { useState } from "react";
import {
  firstDayMorningSchedule2k23,
  firstDayAfterMorningSchedule2k23,
  secondDayMidNightSchedule2k23,
  secondDayMorningSchedule2k23,
} from "../../APIs/eventScheduleAPI";

function EventSchedule2k23() {
  const [firstDayMorning] = useState(firstDayMorningSchedule2k23);
  const [firstDayAfterMorning] = useState(firstDayAfterMorningSchedule2k23);
  const [secondDayMidNight] = useState(secondDayMidNightSchedule2k23);
  const [secondDayMorning] = useState(secondDayMorningSchedule2k23);

  // State to track active button
  const [activeButton, setActiveButton] = useState("Day 1");

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container">
      <div className="text-center  mb-5">
        <h3 className="main-heading-center mb-2 ">Event Schedule - 2023</h3>
        <span style={{ color: "var(--text-black-700)" }}>
          Here is the event schedule of SIH 2k23
        </span>
      </div>

      <div className="state-toggler">
        {/* Buttons */}
        <button
          onClick={() => handleButtonClick("Day 1")}
          className={
            activeButton === "Day 1"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Day 1
        </button>
        <button
          onClick={() => handleButtonClick("Day 2")}
          className={
            activeButton === "Day 2"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Day 2
        </button>
      </div>

      <div className="text-center">
        <p className="schedule-para">
          The event was organised under the Computer Science and Engineering
          department at SISTec-R.
        </p>
      </div>

      {/* Content based on active button */}
      {activeButton === "Day 1" && (
        <>
          <section className="event-schedule" id="event-schedule">
            <div className="container">
              <div className="row">
                <div className="first-day pad-15">
                  <h3 className="title">Day 1 (Morning)</h3>
                  <div className="row">
                    <div className="schedule-box pad-15">
                      <div className="schedule shadow-dark">
                        {firstDayMorning.map((element) => {
                          return (
                            <>
                              <div className="schedule-item" key={element.id}>
                                <div className="circle-dot"></div>
                                <h3 className="schedule-time">
                                  <i className="fa fa-clock"></i> {element.time}
                                </h3>
                                <h4 className="schedule-title">
                                  {element.task}
                                </h4>
                                <p className="schedule-text">
                                  {element.description}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="second-day pad-15">
                  <h3 className="title">Day 1 (Afternoon - Night)</h3>

                  <div className="row">
                    <div className="schedule-box pad-15">
                      <div className="schedule shadow-dark">
                        {firstDayAfterMorning.map((element) => {
                          return (
                            <>
                              <div className="schedule-item" key={element.id}>
                                <div className="circle-dot"></div>
                                <h3 className="schedule-time">
                                  <i className="fa fa-clock"></i>
                                  {element.time}
                                </h3>
                                <h4 className="schedule-title">
                                  {element.task}
                                </h4>
                                <p className="schedule-text">
                                  {element.description}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeButton === "Day 2" && (
        <>
          <section className="event-schedule" id="event-schedule">
            <div className="container">
              <div className="row">
                <div className="first-day pad-15">
                  <h3 className="title">Day 2 (Mid Night)</h3>
                  <div className="row">
                    <div className="schedule-box pad-15">
                      <div className="schedule shadow-dark">
                        {secondDayMidNight.map((element) => {
                          return (
                            <>
                              <div className="schedule-item" key={element.id}>
                                <div className="circle-dot"></div>
                                <h3 className="schedule-time">
                                  <i className="fa fa-clock"></i> {element.time}
                                </h3>
                                <h4 className="schedule-title">
                                  {element.task}
                                </h4>
                                <p className="schedule-text">
                                  {element.description}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="second-day pad-15">
                  <h3 className="title">Day 2 (Morning)</h3>

                  <div className="row">
                    <div className="schedule-box pad-15">
                      <div className="schedule shadow-dark">
                        {secondDayMorning.map((element) => {
                          return (
                            <>
                              <div className="schedule-item" key={element.id}>
                                <div className="circle-dot"></div>
                                <h3 className="schedule-time">
                                  <i className="fa fa-clock"></i>
                                  {element.time}
                                </h3>
                                <h4 className="schedule-title">
                                  {element.task}
                                </h4>
                                <p className="schedule-text">
                                  {element.description}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default EventSchedule2k23;
