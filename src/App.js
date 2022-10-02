import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import UserData from "./UserData";

const App = () => {
  const [userData] = useState(UserData);
  const [pagePosition, setPagePosition] = useState("intro");

  // const handleNavigationClick = (e) => {
  //   // console.log(e.target.id);
  //   setPagePosition(e.target.id);
  // };

  // console.log(navPosition);
  return (
    <Router>
      <Header
        fullname={userData["nama-lengkap"]}
        role={userData.peran}
        img={userData["foto-profil"]}
      ></Header>
      <Navbar active={pagePosition}></Navbar>
      <MainContent
        userData={userData}
        setPagePosition={setPagePosition}
      ></MainContent>
    </Router>
  );
};

export default App;
