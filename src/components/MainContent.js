import Intro from "./Intro";
import Education from "./Education";
import Certification from "./Certification";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainContent = (props) => {
  return (
    <main>
      {props.navPosition === "intro" && (
        <Intro
          fullname={props.userData["nama-lengkap"]}
          name={props.userData["nama-panggilan"]}
          intro={props.userData.intro}
          role={props.userData.peran}
          img={props.userData['foto-profil']}
        />
      )}
      {props.navPosition === "education" && (
        <Education education={props.userData.edukasi} />
      )}
      {props.navPosition === "certification" && (
        <Certification certificate={props.userData.sertifikasi} />
      )}
      {props.navPosition === "portfolio" && (
        <Portfolio portfolio={props.userData.portfolio} />
      )}
      {props.navPosition === "contact" && (
        <Contact
          name={props.userData["nama-lengkap"]}
          resumeLink={props.userData.resume}
          contact={props.userData.kontak}
        />
      )}
    </main>
  );
};

export default MainContent;
