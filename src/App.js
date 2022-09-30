import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

const dataSidik = {
  "nama-lengkap": "Ahmad Sidik Rudini",
  "nama-panggilan": "Sidik",
  peran: "Front-End Web Developer",
  intro: [
    `I'am a student of Informatics Engineering (extension class) at Ibn
  Khaldun University. The activity that I do apart from being a student is
  actively learning web programming independently to increase my skills.
  From these activities, I have created several simple static and dynamic
  web pages.`,
    `I am interested in becoming a Professional Front-End Web Developer. I
  have studied some basic web programming materials such as HTML, CSS, 
  and JavaScript. Recently, I've completed my ReactJS Course in
  NIOMIC Education.`,
    `And now I am very fully prepared and looking forward to new challenges
  in my Front-End Web Development career.`,
  ],
  edukasi: [
    {
      "nama-institusi": "SMK Negeri 3 Bogor",
      "tahun-belajar": "2014-2017",
      logo: "../img/logo-smk3.png",
    },
    {
      "nama-institusi": "Ibn Khaldun University",
      "tahun-belajar": "2020-Now",
      logo: "../img/logo-uika.png",
    },
  ],
  keahlian: ["HTML", "CSS", "JavaScript", "ReactJS"],
  kontak: {
    alamat: "Kota Bogor, Jawa Barat, Indonesia",
    email: "sidikrudini16@gmail.com",
    instagram: "https://www.instagram.com/asidikrdn/",
    github: "https://www.github.com/asidikrdn/",
    gitlab: "https://www.gitlab.com/asidikrdn/",
    linkedin: "https://www.linkedin.com/in/asidikrdn/",
    codepen: "https://codepen.io/asidikrdn",
  },
};

const App = () => {
  const [userData] = useState(dataSidik);
  const [navPosition, setNavPosition] = useState("intro");

  const handleNavigationClick = (e) => {
    setNavPosition(e.target.innerHTML.toLowerCase());
  };

  // console.log(navPosition);
  return (
    <>
      <Header
        fullname={userData["nama-lengkap"]}
        role={userData.peran}
      ></Header>
      <Navbar
        navPosition={navPosition}
        onNavClick={handleNavigationClick}
      ></Navbar>
      <MainContent userData={userData} navPosition={navPosition}></MainContent>
    </>
  );
};

export default App;
