import Intro from "./Intro";
import Education from "./Education";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainContent = (props) => {
  return (
    <main>
      {props.navPosition === "intro" && (
        <Intro
          name={props.userData["nama-panggilan"]}
          intro={props.userData.intro}
        />
      )}
      {props.navPosition === "education" && (
        <Education education={props.userData.edukasi} />
      )}
      {props.navPosition === "skills" && <Skills />}
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
