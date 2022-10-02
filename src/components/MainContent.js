import { Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import Education from "./Education";
import Certification from "./Certification";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainContent = (props) => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Intro
              fullname={props.userData["nama-lengkap"]}
              name={props.userData["nama-panggilan"]}
              intro={props.userData.intro}
              role={props.userData.peran}
              img={props.userData["foto-profil"]}
              setPagePosition={props.setPagePosition}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/education"
          element={
            <Education
              education={props.userData.edukasi}
              setPagePosition={props.setPagePosition}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/certification"
          element={
            <Certification
              certificate={props.userData.sertifikasi}
              setPagePosition={props.setPagePosition}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/portfolio"
          element={
            <Portfolio
              portfolio={props.userData.portfolio}
              setPagePosition={props.setPagePosition}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/contact"
          element={
            <Contact
              name={props.userData["nama-lengkap"]}
              resumeLink={props.userData.resume}
              contact={props.userData.kontak}
              setPagePosition={props.setPagePosition}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default MainContent;
