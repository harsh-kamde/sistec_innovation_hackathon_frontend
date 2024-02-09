import React, { useState } from "react";

const whyJoinSIHData = [
  {
    id: 1,
    title: "Innovative Solutions",
    info: "Join SIH to be part of a creative community, where you'll collaboratively devise innovative solutions to real-world challenges, fostering your problem-solving skills and enhancing your ability to think outside the box.",
    icon: "fa-solid fa-lightbulb",
  },
  {
    id: 2,
    title: "Internship Opportunity",
    info: "SIH provides a gateway to professional growth. Seize the chance to secure internships offered by leading organizations, gaining hands-on experience and expanding your skill set in a real-world work environment.",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    id: 3,
    title: "Chance to Win Cash Prizes",
    info: "Participate in SIH for more than just learning. Compete with talented individuals, showcase your abilities, and stand a chance to win attractive cash prizes. SIH rewards excellence and recognizes outstanding contributions to drive your success.",
    icon: "fa-solid fa-sack-dollar",
  },
];

const WhyJoinSIH = () => {
  const [joinSIH] = useState(whyJoinSIHData);
  return (
    <>
      <section className="why-join-sih homepage">
        <div className="container sih-container">
          <h1 className="main-heading text-center">Why Join SIH 2.0?</h1>

          <div className="row">
            {joinSIH.map((element) => {
              const { id, title, info, icon } = element;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 sih-benefits container"
                    key={id}
                  >
                    <i className={`font-awesome-style ${icon}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="paragraph">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyJoinSIH;
