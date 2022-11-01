import { useEffect, useContext } from "react";
import { MainContext } from "../store/Store";
import { setPagePosition } from "../store/actions";

const Portfolio = () => {
  const [state, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPagePosition("portfolio"));
  }, [dispatch]);

  return (
    <section id="portfolio" className="container-fluid py-2">
      <h1 className="display-2 fw-bold judulHalaman text-center">Portfolio</h1>
      <div className="row">
        {state.userData.portfolio.map((data, index) => {
          return (
            <div key={`portfolio-${index}`} className="col-12 col-md-6">
              <div className="card rounded-5 my-2" style={{ height: "98%" }}>
                <img
                  src={data.gambar}
                  className="card-img-top img-fluid px-3 pt-2"
                  alt={data.judul}
                />
                <div className="card-body">
                  <h2 className="card-title text-center">{data.judul}</h2>
                  <div
                    style={{ height: "200px", overflow: "scroll" }}
                    className="py-2"
                  >
                    {data.deskripsi.split("\n").map((el, i) => {
                      let textDesc;
                      if (el === "") {
                        textDesc = <small>&nbsp;</small>;
                      } else textDesc = el;
                      return (
                        <p key={i} className="card-text py-0 my-0">
                          {textDesc}
                        </p>
                      );
                    })}
                  </div>
                  {/* <p className="card-text">
                    {data.deskripsi.split("\n").map((el) => {
                      let textDesc;
                      el === "&nbsp;"
                        ? (textDesc = <small>&nbsp;</small>)
                        : (textDesc = el);
                      return textDesc;
                    })}
                  </p> */}
                  <h5 className="text-center mt-4">Tech Stack</h5>
                  <p className="card-text display-6 text-center my-3">
                    {data.teknologi.map((tech, index) => (
                      <i
                        key={`tech-${index}`}
                        className={`fa-brands fa-${tech} mx-3`}
                      ></i>
                    ))}
                  </p>
                  <div className="d-flex justify-content-center mt-4">
                    <a
                      href={data.repositori}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-secondary mx-3"
                    >
                      Repository
                    </a>
                    <a
                      href={data.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success mx-3"
                    >
                      Demo
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

export default Portfolio;
