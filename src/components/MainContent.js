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
      </Routes>
      <Routes>
        <Route path="/education" element={<Education />} />
      </Routes>
      <Routes>
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default MainContent;
