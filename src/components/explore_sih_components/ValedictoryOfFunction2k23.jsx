import React, { useState } from "react";
import { guestOfHonour2k23API } from "../../APIs/patronsDataAPI";
import { NavLink } from "react-router-dom";

const ValedictoryOfFunction2k23 = () => {
  const [guestOfHonour] = useState(guestOfHonour2k23API);

  return (
    <>
      <section className="container patron-card">
        {/* Chief Guest */}
        <div className="chief-patrons-section">
          <div className="committee-top">
            <img
              src="./images/community_images/guest-icons/chief-guest.png"
              alt="Chief Guest"
            />
            <h2>Chief Guest</h2>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            <div className="profile-card col col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="image">
                <img
                  src="./images/community_images/Advisory-Committee/Dr. Vineet Kapoor.jpeg"
                  alt="Dr. Vineet Kapoor"
                  className="profile-img"
                />
              </div>

              <div className="text-data">
                <span className="name">Dr. Vineet Kapoor</span>
                <span className="job">DCP, Head Quarter Bhopal</span>
              </div>

              <div className="media-buttons">
                <NavLink
                  to="https://www.linkedin.com/in/dr-vineet-kapoor-33618019"
                  style={{ background: "#0a63bc" }}
                  className="link"
                >
                  <i className="bx bxl-linkedin"></i>
                </NavLink>
                <NavLink
                  to="https://www.facebook.com/DrVineetKapoor"
                  style={{ background: "#3b5998" }}
                  className="link"
                >
                  <i className="bx bxl-facebook"></i>
                </NavLink>
                <NavLink to="/" style={{ background: "#db1c8a" }} className="link">
                  <i className="bx bxl-instagram"></i>
                </NavLink>
                <NavLink
                  to="https://x.com/vinkaps_ind?s=20"
                  style={{ background: "#03a9f4" }}
                  className="link"
                >
                  <i className="bx bxl-twitter"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Guest of Honour */}
        <div className="patrons-section">
          <div className="committee-top">
            <img
              src="./images/community_images/guest-icons/honour.png"
              alt="Guest of Honour"
            />
            <h2>Special Guest</h2>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            {guestOfHonour.map((element) => {
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

export default ValedictoryOfFunction2k23;
