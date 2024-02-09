import React, { useState } from "react";
import { advisoryCommitteeDataAPI } from "../../APIs/patronsDataAPI";
import { NavLink } from "react-router-dom";

const AdvisoryCommitteeCard = () => {
  const [advisoryCommitteeData] = useState(advisoryCommitteeDataAPI);

  return (
    <>
      <section className="container patron-card">
        {/* Advisory Committee Section */}
        <div className="chief-patrons-section">
          <div className="committee-top">
            <img
              src="./images/community_images/advisory_committee.png"
              alt="Advisory Committee"
            />
            <h2>ADVISORY-COMMITTEE</h2>
            <span>Here are some of our Advisors</span>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            {advisoryCommitteeData.map((element) => {
              return (
                <>
                  <div className="profile-card col col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="image">
                      <img src={element.photo} alt="" className="profile-img" />
                    </div>

                    <div className="text-data">
                      <span className="name">{element.name}</span>
                      <span className="job">{element.bio}</span>
                    </div>

                    <div className="media-buttons">
                      <NavLink
                        to={element.linkedInProfile}
                        style={{ background: "#0a63bc" }}
                        className="link"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </NavLink>
                      <NavLink
                        to={element.facebookProfile}
                        style={{ background: "#3b5998" }}
                        className="link"
                      >
                        <i className="bx bxl-facebook"></i>
                      </NavLink>
                      <NavLink
                        to={element.instagramProfile}
                        style={{ background: "#db1c8a" }}
                        className="link"
                      >
                        <i className="bx bxl-instagram"></i>
                      </NavLink>
                      <NavLink
                        to={element.twitterProfile}
                        style={{ background: "#03a9f4" }}
                        className="link"
                      >
                        <i className="bx bxl-twitter"></i>
                      </NavLink>
                    </div>
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

export default AdvisoryCommitteeCard;
