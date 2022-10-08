import { useEffect } from "react";

const Certification = (props) => {
  useEffect(() => {
    props.setPagePosition("certification");
  }, [props]);

  return (
    <section id="certification" className="container-fluid py-2">
      <h1 className="display-2 fw-bold judulHalaman text-center">
        Certification
      </h1>
      <div className="row">
        {props.certificate.map((cert, i) => {
          return (
            <div key={`sertifikat-${i}`} className="col-12 col-md-6">
              <div className="card rounded-5 py-3 my-2" style={{height:'98%'}}>
                <img
                  src={cert.gambar}
                  className="card-img-top img-fluid px-3 pt-2"
                  // style={{
                  //   width: "500px",
                  //   height: "300px",
                  //   // objectFit: "cover",
                  // }}
                  alt={cert.judul}
                />
                <div className="card-body">
                  <h2 className="card-title text-center">{cert.judul}</h2>
                  <p className="card-subtitle text-muted text-center">
                    Credential ID : <span>{cert.nomor}</span>
                  </p>

                  <p className="card-subtitle text-center fw-bold mt-5">
                    Issuing by :
                  </p>
                  <p className="card-text text-center fs-5 mb-0">
                    {cert.penerbit}
                  </p>
                  <p className="card-subtitle text-muted text-center fs-6">
                    {cert["waktu-terbit"]}
                  </p>
                  <h5 className="text-center mt-5">Skills Learned</h5>
                  <p className="card-text display-6 text-center">
                    {cert.keahlian.map((skill, i) => {
                      return (
                        <i
                          key={`keahlian-${i}`}
                          className={`fa-brands fa-${skill} mx-3`}
                        ></i>
                      );
                    })}
                  </p>
                  <div className="d-flex justify-content-center mt-5">
                    <a
                      href={cert.tautan}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success"
                    >
                      Show Credential
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certification;
