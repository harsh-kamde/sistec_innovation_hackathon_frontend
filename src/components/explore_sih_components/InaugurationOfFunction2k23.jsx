import React, { useState } from "react";
import { specialGuest2k23API } from "../../APIs/patronsDataAPI";
import { NavLink } from "react-router-dom";

const InaugurationOfFunction2k23 = () => {
  const [specialGuest] = useState(specialGuest2k23API);

  return (
    <>
      <section className="container patron-card">
        {/* Inaugurated By */}
        <div className="chief-patrons-section">
          <div className="committee-top">
            <img
              src="./images/community_images/guest-icons/inauguration.png"
              alt="VIP"
            />
            <h2>Inaugurated By</h2>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            <div className="profile-card col col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="image">
                <img
                  src="./images/community_images/Chief Patrons/vcsirRGPV.png"
                  alt="Dr. Sunil Kumar Gupta"
                  className="profile-img"
                />
              </div>

              <div className="text-data">
                <span className="name">Dr. Sunil Kumar Gupta</span>
                <span className="job">Vice Chancellor RGPV Bhopal</span>
              </div>

              <div className="media-buttons">
                <NavLink
                  to="https://www.linkedin.com/in/sunil-kumar-195862194"
                  style={{ background: "#0a63bc" }}
                  className="link"
                >
                  <i className="bx bxl-linkedin"></i>
                </NavLink>
                <NavLink
                  to="https://www.facebook.com/sunil.gupta.7315720"
                  style={{ background: "#3b5998" }}
                  className="link"
                >
                  <i className="bx bxl-facebook"></i>
                </NavLink>
                <NavLink to="/" style={{ background: "#db1c8a" }} className="link">
                  <i className="bx bxl-instagram"></i>
                </NavLink>
                <NavLink to="/" style={{ background: "#03a9f4" }} className="link">
                  <i className="bx bxl-twitter"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Guest og Honour */}
        <div className="chief-patrons-section">
          <div className="committee-top">
            <img
              src="./images/community_images/guest-icons/honour.png"
              alt="VIP"
            />
            <h2>Guest of Honour</h2>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            <div className="profile-card col col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="image">
                <img
                  src="./images/community_images/Advisory-Committee/Mr. Shailendra Singh Chouhan.jpeg"
                  alt="Mr. Shailendra Singh Chouhan"
                  className="profile-img"
                />
              </div>

              <div className="text-data">
                <span className="name">Mr. Shailendra Singh Chouhan</span>
                <span className="job">ADCP Crime Branch Bhopal</span>
              </div>

              <div className="media-buttons">
                <NavLink to="/" style={{ background: "#0a63bc" }} className="link">
                  <i className="bx bxl-linkedin"></i>
                </NavLink>
                <NavLink to="/" style={{ background: "#3b5998" }} className="link">
                  <i className="bx bxl-facebook"></i>
                </NavLink>
                <NavLink to="/" style={{ background: "#db1c8a" }} className="link">
                  <i className="bx bxl-instagram"></i>
                </NavLink>
                <NavLink
                  to="https://x.com/shailendra2006?s=20"
                  style={{ background: "#03a9f4" }}
                  className="link"
                >
                  <i className="bx bxl-twitter"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Special Guests */}
        <div className="patrons-section">
          <div className="committee-top">
            <img
              src="./images/community_images/guest-icons/special-guest.png"
              alt="Patrons"
            />
            <h2>Special Guest</h2>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            {specialGuest.map((element) => {
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

export default InaugurationOfFunction2k23;
