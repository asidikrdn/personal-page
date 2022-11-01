import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { MainContext } from "../store/Store";

const Navbar = () => {
  const [state] = useContext(MainContext);

  return (
    <>
      {/* Navbar Dekstop */}
      <nav className="position-fixed fixed-top w-100 d-none d-md-block">
        <div className="navbar navbar-expand-md navbar-dark">
          <ul className="navbar-nav fs-5 text-uppercase text-light">
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/">
                <p
                  id="intro"
                  className={`nav-link mb-0 
                  ${state.pagePosition === "intro" && "active"}`}
                >
                  Intro
                </p>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/education">
                <p
                  className={`nav-link mb-0 
                  ${state.pagePosition === "education" && "active"}`}
                  id="education"
                >
                  Education
                </p>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/certification">
                <p
                  id="certification"
                  className={`nav-link mb-0 
                  ${state.pagePosition === "certification" && "active"}`}
                >
                  Certification
                </p>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/portfolio">
                <p
                  id="portfolio"
                  className={`nav-link mb-0 
                  ${state.pagePosition === "portfolio" && "active"}`}
                >
                  Portfolio
                </p>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/contact">
                <p
                  id="contact"
                  className={`nav-link mb-0 
                  ${state.pagePosition === "contact" && "active"}`}
                >
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* End of Navbar Dekstop */}

      {/* Navbar Mobile */}
      <nav className="position-fixed fixed-bottom w-100 d-block d-md-none">
        <div className="navbar navbar-expand navbar-dark">
          <ul className="navbar-nav fs-5 text-uppercase text-light w-100 d-flex justify-content-around">
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/">
                <p
                  id="intro"
                  className={`nav-link mb-0 
                  ${state.pagePosition === "intro" && "active"}`}
                >
                  <i className="fa-solid fa-house-user"></i>
                </p>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/education">
                <p
                  className={`nav-link mb-0 
                  ${state.pagePosition === "education" && "active"}`}
                  id="education"
                >
                  <i className="fa-solid fa-user-graduate"></i>
                </p>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/certification">
                <p
                  id="certification"
                  className={`nav-link mb-0 
                  ${state.pagePosition === "certification" && "active"}`}
                >
                  <i className="fa-solid fa-certificate"></i>
                </p>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/portfolio">
                <p
                  id="portfolio"
                  className={`nav-link mb-0 
                  ${state.pagePosition === "portfolio" && "active"}`}
                >
                  <i className="fa-solid fa-laptop-code"></i>
                </p>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{ all: "unset" }} to="/contact">
                <p
                  id="contact"
                  className={`nav-link mb-0 
                  ${state.pagePosition === "contact" && "active"}`}
                >
                  <i className="fa-solid fa-address-book"></i>
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* End of Navbar Mobile */}
    </>
  );
};

export default Navbar;
