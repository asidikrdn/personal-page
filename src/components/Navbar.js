const Navbar = (props) => {
  return (
    <>
      {/* Navbar Dekstop */}
      <nav className="position-fixed fixed-top w-100 d-none d-md-block">
        <div className="navbar navbar-expand-md navbar-dark">
          <ul className="navbar-nav fs-5 text-uppercase text-light">
            <li className="nav-item mx-3">
              <p
                id="intro"
                className={
                  props.navPosition === "intro"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                Intro
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="education"
                className={
                  props.navPosition === "education"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                Education
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="certification"
                className={
                  props.navPosition === "certification"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                Certification
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="portfolio"
                className={
                  props.navPosition === "portfolio"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                Portfolio
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="contact"
                className={
                  props.navPosition === "contact"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                Contact
              </p>
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
              <p
                id="intro"
                className={
                  props.navPosition === "intro"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                <i className="fa-solid fa-house-user"></i>
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="education"
                className={
                  props.navPosition === "education"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                <i className="fa-solid fa-user-graduate"></i>
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="certification"
                className={
                  props.navPosition === "certification"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                <i className="fa-solid fa-certificate"></i>
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="portfolio"
                className={
                  props.navPosition === "portfolio"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                <i className="fa-solid fa-laptop-code"></i>
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="contact"
                className={
                  props.navPosition === "contact"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                <i className="fa-solid fa-address-book"></i>
              </p>
            </li>
          </ul>
        </div>
      </nav>

      {/* <nav className="position-fixed fixed-bottom w-100 d-block d-md-none">
        <div className="navbar navbar-expand navbar-dark">
          <ul className="navbar-nav fs-5 text-uppercase text-light w-100 d-flex justify-content-around">
            <li className="nav-item mx-3">
              <p
                id="intro"
                className={
                  props.navPosition === "intro"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                A
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="education"
                className={
                  props.navPosition === "education"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                B
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="certification"
                className={
                  props.navPosition === "certification"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                C
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="portfolio"
                className={
                  props.navPosition === "portfolio"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                D
              </p>
            </li>
            <li className="nav-item mx-3">
              <p
                id="contact"
                className={
                  props.navPosition === "contact"
                    ? "nav-link mb-0 active"
                    : "nav-link mb-0"
                }
                onClick={props.onNavClick}
              >
                E
              </p>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* End of Navbar Mobile */}
    </>
  );
};

export default Navbar;
