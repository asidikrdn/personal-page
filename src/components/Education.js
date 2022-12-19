import { useEffect, useContext } from "react";
import { MainContext } from "../store/Store";
import { setPagePosition } from "../store/actions";
import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  const [state, dispatch] = useContext(MainContext);

  // console.log(state.userData.education);
  useEffect(() => {
    dispatch(setPagePosition("education"));
  }, [dispatch]);

  return (
    <Container fluid id="education" className="py-2">
      <h1 className="display-2 fw-bold judulHalaman text-center">Education</h1>
      <Row>
        {state.userData.education.map((data, index) => {
          return (
            <Col xs={12} md={6} className="px-5 py-3">
              <div
                className="d-flex flex-column align-items-center"
                key={index}
              >
                <img
                  src={data.logo}
                  alt={data.institute}
                  className="education-img mb-3"
                />
                <h2 className="text-center">{data.institute}</h2>
                <h3 className="lead text-center">{data.major}</h3>
                {/* <h5>
                  GPA : <span className="lead">{data.ipk}</span>
                </h5> */}
                <hr className="w-100" />
                <h4>{data["year-of-study"]}</h4>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Education;
