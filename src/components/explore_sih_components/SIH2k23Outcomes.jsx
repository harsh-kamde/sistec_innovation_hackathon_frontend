import React from "react";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const SIH2k23OutcomesAPI = [
  {
    id: 1,
    icon: "fa-solid fa-graduation-cap",
    date: "INTERNSHIP",
    title: "Internship offered by DRMZ Tech",
    description:
      "DRMZ Tech extended internships to 6 students, fostering hands-on learning and real-world experience.",
  },
  {
    id: 2,
    icon: "fa-brands fa-sourcetree",
    date: "INCUBATION SEAT",
    title: "Incubation seat was offered to the Winner Team",
    description:
      "The winning team secured an incubation seat at B Nest Incubation Centre, Smart City office Bhopal, empowering them with resources to develop their innovative ideas.",
  },
  {
    id: 3,
    icon: "fa-solid fa-mobile-screen-button",
    date: "MOBILE APP",
    title: "A patient management and video conference APP",
    description:
      "A patient management and video conference app was developed, enhancing healthcare accessibility and communication.",
  },
  {
    id: 4,
    icon: "fa-solid fa-laptop-code",
    date: "WEB APP",
    title: "Maintaining Police Station Wise Data",
    description:
      "A web app was created to organize and manage data efficiently, streamlining information for police stations.",
  },
  {
    id: 5,
    icon: "fa-solid fa-brain",
    date: "ML MODAL",
    title: "Crop Identification using Machine Learning Model",
    description:
      "Using machine learning, a web app was designed for crop identification, aiding farmers in precision agriculture and crop management.",
  },
];

const SIH2k23Outcomes = () => {
  return (
    <>
      <section className="container">
        <h3 className="main-heading-center">Outcomes of SIH 2023</h3>
        <div className="event-timeline">
          <VerticalTimeline lineColor="var(--text-black-700)">
            {SIH2k23OutcomesAPI.map((item) => {
              return (
                <VerticalTimelineElement
                  iconStyle={{
                    background: "var(--skin-color)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
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

export default SIH2k23Outcomes;
