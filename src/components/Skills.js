import { useEffect, useContext } from "react";
import { MainContext } from "../store/Store";
import { setPagePosition } from "../store/actions";

const Skills = () => {
  const [state, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPagePosition("skills"));
  }, [dispatch]);

  return (
    <>
      <section id="skills" className="container-fluid py-2">
        <h1 className="display-2 fw-bold judulHalaman text-center">Skills</h1>
        <div className="row">
          {state.userData.skills.map((skill) => {
            return (
              <div className="col-12 col-lg-6 px-5 py-2">
                <div
                  className="card mx-2 rounded-5 border-success"
                  style={{ boxShadow: "3px 3px 5px 1px #005D66" }}
                >
                  <div className="card-body">
                    <div className="card-title">
                      <h4 className="text-center">{skill.role}</h4>
                      <hr className="w-75 mx-auto text-success" />
                    </div>
                    <div className="card-text">
                      <ul>
                        {skill.tech.map((techData) => {
                          return Array.isArray(techData) ? (
                            <ul>
                              {techData.map((subTech) => {
                                return <li>{subTech}</li>;
                              })}
                            </ul>
                          ) : (
                            <li>{techData}</li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="cert" className="container-fluid py-2">
        <h1 className="display-2 fw-bold judulHalaman text-center">
          Certificates
        </h1>
        <div className="row">
          {state.userData.certificates.map((cert) => {
            return (
              <div className="col-12 col-md-6 p-3">
                <div className="card rounded-3 border border-top-0 border-bottom-0 border-end-0 border-info border-5 h-100">
                  <div className="card-body pt-0 pb-1">
                    <h4 className="card-title ">{cert.title}</h4>
                    <p className="card-subtitle text-muted ">
                      Credential ID : <span>{cert.id}</span>
                    </p>
                    <p className="card-subtitle  fw-bold mt-3">Issued by :</p>
                    <p className="card-text  fs-6 mb-0">{cert.issuer}</p>
                    <p className="card-subtitle text-muted  fs-6">
                      {cert.issuedOn}
                    </p>
                  </div>
                  <div className="mx-auto d-block w-75">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="d-block w-100 btn btn-outline-success"
                    >
                      Show Credential
                    </a>
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

export default Skills;
