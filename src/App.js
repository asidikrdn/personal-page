import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

const App = () => {
  // const [pagePosition, setPagePosition] = useState("intro");
  // const handleNavigationClick = (e) => {
  //   // console.log(e.target.id);
  //   setPagePosition(e.target.id);
  // };

  // console.log(navPosition);
  return (
    <Router>
      <Header></Header>
      <Navbar></Navbar>
      <MainContent></MainContent>
    </Router>
  );
};

export default App;
