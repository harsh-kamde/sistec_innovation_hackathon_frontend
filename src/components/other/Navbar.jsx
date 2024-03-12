import React, { useEffect } from "react";
import "../../stylesheets/NavbarStyle.css";
import { NavLink } from "react-router-dom";
import instructionPdf from "../../Assets/Guidelines/instructions.pdf";
import ideaTemplatePPT from "../../Assets/Guidelines/Idea-Sumission Format SIH 2.0.pptx";
import nominationLatter from "../../Assets/Guidelines/nomination.pdf";
import howToApplyPdf from "../../Assets/Guidelines/how-to-apply.pdf";

const Navbar = () => {
  const instructions = () => {
    window.open(instructionPdf);
  };
  const ideaTemplate = () => {
    window.open(ideaTemplatePPT);
  };
  const nomination = () => {
    window.open(nominationLatter);
  };
  const howToApply = () => {
    window.open(howToApplyPdf);
  };

  useEffect(() => {
    const menu = document.querySelector(".menu");
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const closeMenuBtn = document.querySelector(".close-menu-btn");

    const handleClick = () => {
      menu.classList.toggle("open");
      menu.style.transition = "transform 0.5s ease";
    };

    [openMenuBtn, closeMenuBtn].forEach((btn) => {
      btn.addEventListener("click", handleClick);
    });

    menu.addEventListener("transitionend", function () {
      this.removeAttribute("style");
    });

    menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        this.closest(".dropdown").classList.toggle("active");
      });
    });

    return () => {
      [openMenuBtn, closeMenuBtn].forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
      menu.removeEventListener("transitionend", handleClick);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <NavLink to="/">
            <img src="./images/sistec-logo.png" alt="SIH" width={50} />
          </NavLink>

          <nav className="menu">
            <div className="head">
              <button type="button" className="close-menu-btn"></button>
            </div>

            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="dropdown">
                <button className="dropdown-button">Explore SIH</button>
                <i className="fa-solid fa-chevron-down"></i>

                <ul className="sub-menu">
                  <li>
                    <NavLink to="/about">
                      <span>About SIH</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/timeline">
                      <span>Timeline</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/schedule">
                      <span>Program Schedule</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <button className="dropdown-button">Guidelines</button>

                <i className="fa-solid fa-chevron-down"></i>
                <ul className="sub-menu">
                  <li>
                    <NavLink onClick={instructions} target="_blank">
                      <span>Instructions</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={ideaTemplate} target="_blank">
                      <span>Idea Template</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={nomination} target="_blank">
                      <span>Consent Letter</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={howToApply} target="_blank">
                      <span>How to Apply</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/problem statements">Problem Statements</NavLink>
              </li>
              <li className="dropdown">
                <button className="dropdown-button">Result</button>
                <i className="fa-solid fa-chevron-down"></i>

                <ul className="sub-menu">
                  <li>
                    <NavLink to="/result">
                      <span>Grand Finale Teams</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/winners">
                      <span>Winner of SIH 2024</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <button className="dropdown-button">SIH 1.0</button>

                <i className="fa-solid fa-chevron-down"></i>
                <ul className="sub-menu">
                  <li>
                    <NavLink to="/explore">
                      <span>SIH 2023</span>
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <button className="dropdown-button">SIH 2023 Result</button>

                    <i className="fa-solid fa-chevron-down"></i>
                    <ul className="sub-menu sub-menu-left">
                      <li>
                        <NavLink to="/previous year grand finale">
                          <span>Grand Finale Teams</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/previous year winners">
                          <span>Winner of SIH 2023</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            {/* Register Button For Different Devices */}
            <NavLink to="/register" className="button disabled">
              Register
            </NavLink>

        {/* <NavLink to="/register" className="icon-btn">
              <i className="fa-solid fa-user"></i>
            </NavLink> */}

            {/* Three Line Button */}
            <button type="button" className="open-menu-btn">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
