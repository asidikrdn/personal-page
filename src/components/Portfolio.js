import { useState, useEffect, useContext } from "react";
import { MainContext } from "../store/Store";
import { setPagePosition } from "../store/actions";
import { Card, Col, Container, Row } from "react-bootstrap";
import PortfolioModal from "./PortfolioModal";

const Portfolio = () => {
  const [state, dispatch] = useContext(MainContext);

  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [dataPortfolio, setDataPortfolio] = useState({});

  useEffect(() => {
    dispatch(setPagePosition("portfolio"));
  }, [dispatch]);

  return (
    <>
      <PortfolioModal
        showPortfolioModal={showPortfolioModal}
        setShowPortfolioModal={setShowPortfolioModal}
        dataPortfolio={dataPortfolio}
      />
      <Container id="portfolio" fluid className="py-2">
        <h1 className="display-2 fw-bold judulHalaman text-center">
          Portfolio
        </h1>
        <Row>
          {state.userData.portfolio.map((data, index) => {
            return (
              <Col key={`portfolio-${index}`} xs={12} md={4}>
                <Card
                  className="rounded-5 my-2"
                  style={{ height: "98%" }}
                  onClick={() => {
                    setDataPortfolio(data);
                    setShowPortfolioModal(true);
                  }}
                >
                  <Card.Img
                    src={data.picture}
                    className="card-img-top img-fluid px-3 pt-2"
                    alt={data.title}
                  />
                  <Card.Body>
                    <Card.Title className="text-center h2">
                      {data.title}
                    </Card.Title>
                    {/* <div
                      style={{ height: "200px", overflowY: "scroll" }}
                      className="py-2"
                    >
                      {data.desc.split("\n").map((el, i) => {
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
                    <h5 className="text-center mt-4">Tech Stack</h5>
                    <Card.Text className="display-6 text-center my-3">
                      {data.tech.map((tech, index) => (
                        <i
                          key={`tech-${index}`}
                          className={`fa-brands fa-${tech} mx-3`}
                        ></i>
                      ))}
                    </Card.Text>
                    <div className="d-flex justify-content-center mt-4">
                      <a
                        href={data.repository}
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
                    </div> */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <section>
        <div className="row"></div>
      </section>
    </>
  );
};

export default Portfolio;
