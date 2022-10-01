import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

const dataUserEN = {
  "nama-lengkap": "Ahmad Sidik Rudini",
  "nama-panggilan": "Sidik",
  peran: "Front-End Web Developer",
  "foto-profil": "../img/profil.jpg",
  intro: [
    `I'am a student of Informatics Engineering (extension class) at Ibn
  Khaldun University. The activity that I do apart from being a student is
  actively learning web programming independently to increase my skills.
  From these activities, I have created several simple static and dynamic
  web pages.`,
    `I am interested in becoming a Professional Front-End Web Developer. I
  have studied some basic web programming materials such as HTML, CSS, 
  and Javascript. Recently, I've completed my ReactJS Course in
  NIOMIC Education.`,
    `And now I am very fully prepared and looking forward to new challenges
  in my Front-End Web Development career.`,
  ],
  edukasi: [
    {
      institusi: "SMK Negeri 3 Bogor",
      jurusan: "Computer and Network Engineering",
      ipk: "80.2",
      "tahun-belajar": "2014 - 2017",
      logo: "../img/logo-smk3.png",
    },
    {
      institusi: "Ibn Khaldun University",
      jurusan: "Informatics Engineering",
      ipk: "3.83",
      "tahun-belajar": "2020 - Now",
      logo: "../img/logo-uika.png",
    },
  ],
  sertifikasi: [
    {
      judul: "Javascript DOM",
      nomor: "00018310005/NIOMIC/IX/2022",
      penerbit: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
      "waktu-terbit": "September 2022",
      keahlian: ["html5", "css3", "js"],
      tautan: "https://certified.niomic.com/?number=00018310005/NIOMIC/IX/2022",
      gambar: "../img/NIOMIC-JavaScript_DOM.jpg",
    },
    {
      judul: "Javascript Basic",
      nomor: "00018210004/NIOMIC/IX/2022",
      penerbit: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
      "waktu-terbit": "September 2022",
      keahlian: ["js"],
      tautan: "https://certified.niomic.com/?number=00018210004/NIOMIC/IX/2022",
      gambar: "../img/NIOMIC-JavaScript_Basic.jpg",
    },
    {
      judul: "Git & Github",
      nomor: "00018110003/NIOMIC/IX/2022",
      penerbit: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
      "waktu-terbit": "September 2022",
      keahlian: ["git", "github"],
      tautan: "https://certified.niomic.com/?number=00018110003/NIOMIC/IX/2022",
      gambar: "../img/NIOMIC-Git_Github.jpg",
    },
    {
      judul: "CSS",
      nomor: "00018010002/NIOMIC/IX/2022",
      penerbit: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
      "waktu-terbit": "September 2022",
      keahlian: ["html5", "css3", "bootstrap", "font-awesome"],
      tautan: "https://certified.niomic.com/?number=00018010002/NIOMIC/IX/2022",
      gambar: "../img/NIOMIC-CSS.jpg",
    },
    {
      judul: "HTML",
      nomor: "00017910001/NIOMIC/IX/2022",
      penerbit: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
      "waktu-terbit": "September 2022",
      keahlian: ["html5"],
      tautan: "https://certified.niomic.com/?number=00017910001/NIOMIC/IX/2022",
      gambar: "../img/NIOMIC-HTML.jpg",
    },
    {
      judul: "JavaScript Algorithms and Data Structures",
      nomor: "",
      penerbit: "freeCodeCamp",
      "waktu-terbit": "August 2022",
      keahlian: ["js"],
      tautan:
        "https://freecodecamp.org/certification/asidikrdn/javascript-algorithms-and-data-structures",
      gambar: "../img/freeCodeCamp-JavaScript.jpg",
    },
    {
      judul: "Responsive Web Design",
      nomor: "",
      penerbit: "freeCodeCamp",
      "waktu-terbit": "August 2022",
      keahlian: ["html5", "css3"],
      tautan:
        "https://freecodecamp.org/certification/asidikrdn/responsive-web-design",
      gambar: "../img/freeCodeCamp-Responsive_Web_Design.jpg",
    },
    {
      judul: "Belajar Dasar Pemrograman JavaScript",
      nomor: "QLZ98M3L9X5D",
      penerbit: "Dicoding Indonesia",
      "waktu-terbit": "June 2021 - June 2024",
      keahlian: ["js"],
      tautan: "https://www.dicoding.com/certificates/QLZ98M3L9X5D",
      gambar: "../img/DICODING-JavaScript.jpg",
    },
  ],
  portfolio: [
    {
      judul: "Mini Expense Tracker",
      gambar: "../img/mini-expense-tracker.png",
      deskripsi: `"Expense Tracker" merujuk ke sistem pencatatan pengeluaran, 
      aplikasi ini akan menyimpan pemasukan dan pengeluaran user serta menampilkan total selisih 
      antara keduanya.`,
      teknologi: ["html5", "css3", "bootstrap", "react"],
      repositori: "https://github.com/asidikrdn/mini-expense-tracker",
      demo: "https://mini-expense-tracker.netlify.app/",
    },
    {
      judul: "CRUD Mahasiswa",
      gambar: "../img/crud-mahasiswa.png",
      deskripsi: `Dalam programming, CRUD merupakan singkatan dari Create Read Update dan Delete. 
      Yakni aplikasi yang berisi pengolahan data. Biasanya CRUD butuh database sebagai media penyimpanan. 
      Akan tetapi untuk sementara ini app CRUD Mahasiswa lebih fokus ke kode React, 
      CRUD ini hanya disimpan di memory saja.`,
      teknologi: ["html5", "css3", "bootstrap", "react"],
      repositori: "https://github.com/asidikrdn/mini-crud-mahasiswa",
      demo: "https://mini-crud-mahasiswa.netlify.app/",
    },
    {
      judul: "Sistem Informasi Laundry",
      gambar: "../img/sistem-informasi-laundry.png",
      deskripsi: `Aplikasi sederhana untuk mengelola usaha laundry. 
      Fitur utama yang terdapat pada aplikasi ini diantaranya Tampilan Dashboard, Daftar Layanan, 
      Daftar Pelanggan, Daftar Transaksi, Daftar Petugas, dan Cetak Invoice.
      Pada aplikasi ini terdapat 2 role user, yaitu admin dan karyawan dimana masing-masing role memiliki hak akses yang berbeda. 
      Informasi lebih lanjut dapat dilihat pada repository.`,
      teknologi: ["html5", "css3", "bootstrap", "php"],
      repositori: "https://gitlab.com/asidikrdn/PPW_LaViola-Laundry",
      demo: "https://project.bakulkode.web.id/laviola/",
    },
    {
      judul: "Landing Page",
      gambar: "../img/landingpage.png",
      deskripsi: `Landing Page sederhana yang berisikan informasi perusahaan untuk menarik pelanggan. 
      Untuk sementara ini data yang ada di dalam landing page masih bersifat dummy, 
      karena proyek ini merupakan hasil belajar HTML CSS dan Bootstrap. 
      Akan tetapi proyek ini dapat dijadikan template apabila ada proyek serupa kedepannya.`,
      teknologi: ["html5", "css3", "bootstrap"],
      repositori: "https://gitlab.com/asidikrdn/template-landingpage",
      demo: "https://template-landingpage.netlify.app/",
    },
  ],
  kontak: {
    alamat: "Kota Bogor, Jawa Barat, Indonesia",
    email: "sidikrudini16@gmail.com",
    telepon: "6287711356758",
    instagram: "https://www.instagram.com/asidikrdn/",
    github: "https://www.github.com/asidikrdn/",
    gitlab: "https://www.gitlab.com/asidikrdn/",
    linkedin: "https://www.linkedin.com/in/asidikrdn/",
    codepen: "https://codepen.io/asidikrdn",
  },
  resume:
    "https://drive.google.com/file/d/1XC2K-8S7wFXkdJ84c8cllMslbYGPoJEB/view?usp=sharing",
};

const App = () => {
  const [userData] = useState(dataUserEN);
  const [navPosition, setNavPosition] = useState("intro");

  const handleNavigationClick = (e) => {
    // console.log(e.target.id);
    setNavPosition(e.target.id);
  };

  // console.log(navPosition);
  return (
    <>
      <Header
        fullname={userData["nama-lengkap"]}
        role={userData.peran}
        img={userData["foto-profil"]}
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
