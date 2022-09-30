const Contact = (props) => {
  return (
    <section id="contact" className="container-fluid p-0">
      <div className="row p-4">
        <div className="col-12 text-center my-5 pb-5">
          <h1 className="text-center display-1 judulHalaman fw-semibold">
            {props.name}
          </h1>
          <a
            href={`https://wa.me/${props.contact.telepon}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success m-3 rounded-4"
          >
            <h1>Hire Me</h1>
          </a>
          <a
            href="https://drive.google.com/file/d/1qTz4VoBzEbGb7Pnnv37e9mRzuZEqeEhL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success m-3 rounded-4"
          >
            <h1>Download CV</h1>
          </a>
        </div>
        <div className="col-12 col-md-6 pe-5">
          <h1 className="fw-semibold mb-4 display-5">Contact Details</h1>
          <div className="row g-0 my-3 display-6">
            <div className="col-2">
              <i class="fa-solid fa-location-dot me-2"></i>
            </div>
            <div className="col-10">
              <p>{props.contact.alamat}</p>
            </div>
            <div className="col-2">
              <i class="fa-solid fa-envelope me-2"></i>
            </div>
            <div className="col-10">
              <p>{props.contact.email}</p>
            </div>
            <div className="col-2">
              <i class="fa-brands fa-whatsapp me-2"></i>
            </div>
            <div className="col-10">
              <p>+{props.contact.telepon}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 ps-5">
          <h1 className="fw-semibold text-center mb-3 display-5">Follow Me</h1>
          <div className="d-flex justify-content-center display-3">
            <a
              href="https://www.github.com/asidikrdn/"
              target="_blank"
              rel="noreferrer"
              className="nav-link mx-3"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.gitlab.com/asidikrdn/"
              target="_blank"
              rel="noreferrer"
              className="nav-link mx-3"
            >
              <i className="fa-brands fa-gitlab"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/asidikrdn/"
              target="_blank"
              rel="noreferrer"
              className="nav-link mx-3"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://codepen.io/asidikrdn"
              target="_blank"
              rel="noreferrer"
              className="nav-link mx-3"
            >
              <i className="fa-brands fa-codepen"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
