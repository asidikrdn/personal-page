const Navbar = (props) => {
  return (
    <nav className="position-fixed fixed-top w-100">
      <div className="navbar navbar-expand-md navbar-dark">
        <div className="nav-brand text-light mx-2 d-md-none">
          <h1>Ahmad Sidik Rudini</h1>
        </div>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fs-5 text-uppercase text-light">
            <li className="nav-item mx-3">
              <p
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
      </div>
    </nav>
  );
};

export default Navbar;
