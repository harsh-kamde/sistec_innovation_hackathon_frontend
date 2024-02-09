import React from "react";
import "../../stylesheets/FooterStyle.css";
import instructionPdf from "../../Assets/Guidelines/instructions.pdf";
import ideaTemplatePPT from "../../Assets/Guidelines/Idea-Presentation-Format.pptx";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const instructions = () => {
    window.open(instructionPdf);
  };
  const ideaTemplate = () => {
    window.open(ideaTemplatePPT);
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* First Column */}
                <div className="col-6 col-lg-3">
                  <h2>SIH</h2>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About SIH</NavLink>
                    </li>
                    <li>
                      <NavLink to="/sih 2024">SIH 2024</NavLink>
                    </li>
                    <li>
                      <NavLink to="/explore">Past Event</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>

                {/* Second Column */}
                <div className="col-6 col-lg-3">
                  <h2>Participants</h2>
                  <ul>
                    <li>
                      <NavLink onClick={instructions} target="_blank">
                        Instructions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">How to Apply</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={ideaTemplate} target="_blank">
                        Idea Template
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/result">Result</NavLink>
                    </li>
                    <li>
                      <a href="#faq">FAQs</a>
                    </li>
                  </ul>
                </div>

                {/* Third Column */}
                <div className="col-6 col-lg-3">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <NavLink to="/">+91 7879261234</NavLink>
                    </li>
                    <li>
                      <NavLink to="mailto:sistecr.hodcs@sistec.ac.in">
                        sistecr.hodcs@sistec.ac.in
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="https://www.google.com/maps/place/Sagar+Institute+of+Science,+Technology+%26+Research,+Ratibad/@23.1814688,77.285904,15z/data=!4m10!1m2!2m1!1sSISTec-R+Ratibad,+Bhopal,+462044!3m6!1s0x397c5c3c7b0aa7e1:0xf4798e9656dfb029!8m2!3d23.1814693!4d77.3016453!15sCiBTSVNUZWMtUiBSYXRpYmFkLCBCaG9wYWwsIDQ2MjA0NFogIh5zaXN0ZWMgciByYXRpYmFkIGJob3BhbCA0NjIwNDSSAQdjb2xsZWdlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVI1YUhCWFV6Tm5SUkFC4AEA!16s%2Fm%2F0t_fqww?entry=ttu"
                        target="_blank"
                      >
                        SISTec-R Ratibad, Bhopal, 462044
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* Forth Column */}
                <div className="col-6 col-lg-3">
                  <h2>Social</h2>
                  <div className="social-media-buttons">
                    <NavLink
                      to="https://www.linkedin.com/school/sagar-institute-of-science-technology-research-sistec-r/"
                      y
                      style={{ background: "#0a63bc" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </NavLink>
                    <NavLink
                      to="https://www.facebook.com/sagargroupofinstitutionssistecratibad"
                      style={{ background: "#3b5998" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </NavLink>
                    <NavLink
                      to="https://www.instagram.com/sistecratibad?igsh=ZXQ5ZWtlbDNlcm94"
                      style={{ background: "#db1c8a" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-instagram"></i>
                    </NavLink>
                    <NavLink
                      to="https://x.com/SISTecRatibad?s=20"
                      style={{ background: "#03a9f4" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-twitter"></i>
                    </NavLink>
                  </div>
                </div>
              </div>

              <hr />

              <div className="mt-4">
                <p className="paragraph text-center w-100">
                  © Copyright SIH-2024. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
