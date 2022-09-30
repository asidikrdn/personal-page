import Intro from "./Intro";
import Education from "./Education";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainContent = (props) => {
  return (
    <main>
      <div className="container-fluid py-2">
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
        {props.navPosition === "portfolio" && <Portfolio />}
        {props.navPosition === "contact" && <Contact />}
      </div>
    </main>
  );
};

export default MainContent;
