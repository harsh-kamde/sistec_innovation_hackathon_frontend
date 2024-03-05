import React from "react";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const timeLineAPI = [
  {
    id: 1,
    icon: "fa-solid fa-rocket",
    date: "10 Feb 2024",
    title: "Release Problem Statements",
    description:
      "Unveiling challenges to ignite innovative solutions in diverse domains.",
  },

  {
    id: 2,
    icon: "fa-solid fa-address-card",
    date: "10 Feb 2024 - 10 Mar 2024",
    title: "Registration",
    description: "Participants sign up for the engaging hackathon.",
  },
  {
    id: 3,
    icon: "fa-solid fa-bullhorn",
    date: "10 Mar 2024",
    title: "Scrutiny Result",
    description: "Determine qualified entries for the intense competition.",
  },
  {
    id: 4,
    icon: "fa-solid fa-flag",
    date: "09 Apr 2024",
    title: "Inauguration",
    description:
      "Grand opening, fostering collaboration, creativity, and groundbreaking solutions.",
  },
  {
    id: 5,
    icon: "fa-solid fa-trophy",
    date: "10 Apr 2024",
    title: "Valedictory",
    description:
      "Recognize achievements, marking the end of a successful innovation journey.",
  },
];

const SIHTimeLine = () => {
  return (
    <>
      <section className="container" style={{marginBottom: '2rem'}}>
        <h3 className="main-heading-center">Timeline of SIH 2.0</h3>
        <div className="event-timeline">
          <VerticalTimeline lineColor="var(--text-black-700)">
            {timeLineAPI.map((item) => {
              return (
                <VerticalTimelineElement
                  iconStyle={{
                    background: "var(--skin-color)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.25rem",
                  }}
                  icon={<i className={item.icon}></i>}
                  date={item.date}
                >
                  <h3 className="timeline-heading">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default SIHTimeLine;
