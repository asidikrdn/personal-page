import { useEffect, useContext } from "react";
import { MainContext } from "../App";
import { setPagePosition } from "../store/actions";

const Education = () => {
  const [state, dispatch] = useContext(MainContext);

  // console.log(state.userData.education);
  useEffect(() => {
    dispatch(setPagePosition("education"));
  }, [dispatch]);

  return (
    <section id="education" className="container-fluid py-2">
      <h1 className="display-2 fw-bold judulHalaman text-center">Education</h1>
      <div className="row">
        {state.userData.edukasi.map((data, index) => {
          return (
            <div key={index} className="col-12 col-md-6 px-5 py-3">
              <div
                className="d-flex flex-column align-items-center"
                key={index}
              >
                <img
                  src={data.logo}
                  alt={data.institusi}
                  className="education-img mb-3"
                />
                <h1 className="text-center">{data.institusi}</h1>
                <h3 className="lead text-center">{data.jurusan}</h3>
                {/* <h5>
                  GPA : <span className="lead">{data.ipk}</span>
                </h5> */}
                <hr className="w-100" />
                <h3>{data["tahun-belajar"]}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
