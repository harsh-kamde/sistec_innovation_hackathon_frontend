import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const developerDataAPI = [
  {
    id: 1,
    photo: "./images/developer_photos/hariom.jpg",
    name: "Hariom Singh",
    profession: "Founder of GitNexa In",
    url: "https://www.gitnexa.com",
    bio: "Frontend Developer",
    phone: "+91 9302765839",
    linkedInProfile: "https://www.linkedin.com/in/hariom-singh-rajput",
    githubProfile: "https://github.com/HARIOM317",
    instagramProfile: "https://www.instagram.com/hariomsinghrajput_",
    gmailProfile: "mailto:hariomsinghrajput484@gmail.com",
  },
  {
    id: 2,
    photo: "./images/developer_photos/harsh.jpg",
    name: "Harsh Kamde",
    profession: "Founder of TrySoft",
    url: "https://www.trysoft.in",
    bio: "Backend Developer",
    phone: "+91 8085619973",
    linkedInProfile: "https://www.linkedin.com/in/harsh-kamde",
    githubProfile: "https://github.com/harsh-kamde",
    instagramProfile: "/",
    gmailProfile: "mailto:harshkamde4321@gmail.com",
  },
  {
    id: 3,
    photo: "./images/developer_photos/kapil.png",
    name: "Kapil Kumar",
    profession: "Co-Founder of TrySoft",
    url: "https://www.trysoft.in",
    bio: "Individual Developer",
    phone: "+91 8103519510",
    linkedInProfile: "https://www.linkedin.com/in/kapil-mahar-ba4115249",
    githubProfile: "https://github.com/Kapilmahar987",
    instagramProfile: "https://www.instagram.com/",
    gmailProfile: "mailto:maharkapil9@gmail.com",
  },
];

const DeveloperCards = () => {
  const [data] = useState(developerDataAPI);

  return (
    <>
      <section className="developer patron-card">
        <div className="committee-top">
          <img
            src="./images/developer_photos/developers.png"
            alt="Developers"
          />
          <h2>DEVELOPERS</h2>
          <span>Here are Developers of SIH</span>
          <span className="bottom-bar"></span>
        </div>
        <div className="developer-card">
          {data.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="img-box">
                  <img src={element.photo} alt="SIH Developer" />
                </div>

                <div className="content">
                  <div className="details">
                    <h2>
                      {element.name}
                      <br />
                      <a href={element.url} target="_blank" rel="nofollow">
                        {element.profession}
                      </a>
                    </h2>

                    <div className="bio">
                      <span>{element.bio}</span>
                    </div>

                    <div className="social-btn">
                      <NavLink
                        to={element.linkedInProfile}
                        style={{ background: "#0a63bc" }}
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </NavLink>

                      <NavLink
                        to={element.githubProfile}
                        style={{ background: "#212121" }}
                        target="_blank"
                      >
                        <i className="bx bxl-github"></i>
                      </NavLink>
                      <NavLink
                        to={element.instagramProfile}
                        style={{ background: "#db1c8a" }}
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </NavLink>
                      <NavLink
                        to={element.gmailProfile}
                        style={{ background: "#c74039" }}
                        target="_blank"
                      >
                        <i className="bx bxl-gmail"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DeveloperCards;
