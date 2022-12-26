import { Card, Col, Modal, Row } from "react-bootstrap";

const PortfolioModal = ({
  showPortfolioModal,
  setShowPortfolioModal,
  dataPortfolio,
}) => {
  return (
    <Modal
      show={showPortfolioModal}
      centered
      onHide={() => {
        setShowPortfolioModal(false);
      }}
      style={{
        display: "block",
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      className="rounded-0"
      dialogClassName="portfolio-modal"
    >
      <Card
        className="rounded-5 my-2 d-flex justify-content-center align-items-center p-5"
        style={{ minHeight: "50vh" }}
      >
        <Row>
          <Col
            lg={5}
            className="d-flex justify-content-center align-items-center"
          >
            <Card.Img
              src={dataPortfolio.picture}
              className="card-img-top img-fluid px-3 pt-2"
              alt={dataPortfolio.title}
            />
          </Col>
          <Col
            lg={7}
            className="d-flex justify-content-center align-items-center"
          >
            <Card.Body>
              <Card.Title className="text-center h2">
                {dataPortfolio.title}
              </Card.Title>
              <div
                style={{ maxHeight: "500px", overflowY: "scroll" }}
                className="py-2"
              >
                {dataPortfolio.desc?.split("\n").map((el, i) => {
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
                {dataPortfolio.tech?.map((tech, index) => (
                  <i
                    key={`tech-${index}`}
                    className={`fa-brands fa-${tech} mx-3`}
                  ></i>
                ))}
              </Card.Text>
              <div className="d-flex justify-content-center mt-4">
                {dataPortfolio.repository !== "" && (
                  <a
                    href={dataPortfolio.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary mx-3"
                  >
                    Repository
                  </a>
                )}
                {dataPortfolio.demo !== "" && (
                  <a
                    href={dataPortfolio.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-success mx-3"
                  >
                    Demo
                  </a>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Modal>
  );
};

export default PortfolioModal;
