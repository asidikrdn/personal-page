import { Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skills from "./Skills";

const MainContent = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default MainContent;
