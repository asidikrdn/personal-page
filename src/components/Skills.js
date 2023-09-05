import { useEffect, useContext } from "react";
import { MainContext } from "../store/Store";
import { setPagePosition } from "../store/actions";
import { Card, Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  const [state, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPagePosition("skills"));
  }, [dispatch]);

  return (
    <>
      <Container fluid id="cert" className="py-2">
        <h1 className="display-2 fw-bold judulHalaman text-center">
          Skills & Certificates
        </h1>
        <Row>
          {state.userData.certificates.map((cert) => {
            return (
              <Col key={cert.id} xs={12} md={6} className="p-3">
                <Card className="rounded-3 border border-top-0 border-bottom-0 border-end-0 border-info border-5 h-100">
                  <Card.Body className="pt-0 pb-1">
                    <Card.Title className="h4">{cert.title}</Card.Title>
                    <Card.Subtitle className="text-muted">
                      Credential ID : <span>{cert.id}</span>
                    </Card.Subtitle>
                    <Card.Subtitle className="fw-bold mt-3">
                      Issued by :
                    </Card.Subtitle>
                    <Card.Text className="fs-6 mb-0">{cert.issuer}</Card.Text>
                    <Card.Subtitle className="text-muted fs-6">
                      {cert.issuedOn}
                    </Card.Subtitle>
                  </Card.Body>
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
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Skills;
