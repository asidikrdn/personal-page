export const initialState = {
  userData: {
    fullname: "Ahmad Sidik Rudini",
    "short-name": "Sidik",
    role: "Fullstack Web Developer",
    profilPict: "../img/profil.jpg",
    intro: [
      `I'am a student of Informatics Engineering (extension class) at Ibn Khaldun University. 
    The activity that I do apart from being a student is actively learning web programming independently to increase my skills. 
    From these activities, I have created several simple static and dynamic web pages.`,

      `I am interested in becoming a Professional Fullstack Developer. 
    I have studied some basic Front-End Web Development materials such as HTML, CSS, and Javascript Bootstrap, and ReactJS.
    I also studied Back-End Web Development materials uses Go language and database PostgreeSQL.`,

      `And now I am very fully prepared and looking forward to new challenges in my Fullstack Web Development career.`,
    ],
    education: [
      {
        institute: "SMK Negeri 3 Bogor",
        major: "Computer and Network Engineering",
        grade: "80.2",
        "year-of-study": "2014 - 2017",
        logo: "../img/logo-smk3.png",
      },
      {
        institute: "Ibn Khaldun University",
        major: "Informatics Engineering",
        grade: "3.83",
        "year-of-study": "2020 - Now",
        logo: "../img/logo-uika.png",
      },
    ],
    skills: [
      {
        role: "FrontEnd Web Development",
        tech: [
          "HTML5",
          "CSS3",
          ["Bootstrap"],
          "JavaScript",
          ["Fundamentals", "Document Object Model (DOM)"],
          "React",
          [
            "State",
            "Props",
            "Lifecycle",
            "useEffect",
            "ReactBootstrap",
            "State Management uses Redux",
            "State Management uses contextAPI + Reducer",
            "Consume API uses fetchAPI()",
            "Consume API uses Axios & React Query",
            "Payment integration uses Midtrans"
          ],
          "React Native",
          [
            "State",
            "Props",
            "Lifecycle",
            "useEffect",
            "Using Native Base library",
          ],
        ],
      },
      {
        role: "BackEnd Web Development",
        tech: [
          "Go",
          [
            "Fundamentals",
            "Web template & Conditional rendering",
            "Routing uses gorilla/mux",
            "Handle file upload (single and multiple)",
            "API server",
            "Database connection (PostgreeSQL & MySQL)",
            "Encryption uses bycrypt",
            "Auth uses gorilla/sessions",
            "Auth uses JWT",
            "ORM uses GORM",
            "Payment integration uses Midtrans",
            "Asset management uses Cloudinary"
          ],
          "Database",
          ["Data Modeling", "DDL & DML", "Table Relation"],
        ],
      },
    ],
    certificates: [
      {
        title: "Golang Basic",
        id: "00019310019/NIOMIC/XII/2022",
        issuer: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
        issuedOn: "December 2022",
        link: "https://certified.niomic.com/?number=00019310019/NIOMIC/XII/2022",
      },
      {
        title: "React Native Basic",
        id: "00019210015/NIOMIC/XII/2022",
        issuer: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
        issuedOn: "December 2022",
        link: "https://certified.niomic.com/?number=00019210015/NIOMIC/XII/2022",
      },
      {
        title: "React JS",
        id: "00019110006/NIOMIC/IX/2022",
        issuer: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
        issuedOn: "October 2022",
        link: "https://certified.niomic.com/?number=00019110006/NIOMIC/IX/2022",
      },
      {
        title: "React (Basic)",
        id: "c337ec334756",
        issuer: "HackerRank",
        issuedOn: "October 2022",
        link: "https://www.hackerrank.com/certificates/c337ec334756",
      },
      {
        title: "Javascript (Basic)",
        id: "9d37ebe97fca",
        issuer: "HackerRank",
        issuedOn: "October 2022",
        link: "https://www.hackerrank.com/certificates/9d37ebe97fca",
      },
      {
        title: "Problem Solving (Basic)",
        id: "610dbcd93d2e",
        issuer: "HackerRank",
        issuedOn: "October 2022",
        link: "https://www.hackerrank.com/certificates/610dbcd93d2e",
      },
      {
        title: "Javascript DOM",
        id: "00018310005/NIOMIC/IX/2022",
        issuer: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
        issuedOn: "September 2022",
        link: "https://certified.niomic.com/?number=00018310005/NIOMIC/IX/2022",
      },
      {
        title: "Javascript Basic",
        id: "00018210004/NIOMIC/IX/2022",
        issuer: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
        issuedOn: "September 2022",
        link: "https://certified.niomic.com/?number=00018210004/NIOMIC/IX/2022",
      },
      {
        title: "Git & Github",
        id: "00018110003/NIOMIC/IX/2022",
        issuer: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
        issuedOn: "September 2022",
        link: "https://certified.niomic.com/?number=00018110003/NIOMIC/IX/2022",
      },
      {
        title: "CSS",
        id: "00018010002/NIOMIC/IX/2022",
        issuer: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
        issuedOn: "September 2022",
        link: "https://certified.niomic.com/?number=00018010002/NIOMIC/IX/2022",
      },
      {
        title: "HTML",
        id: "00017910001/NIOMIC/IX/2022",
        issuer: "NIOMIC - PT CERDASKAN GENERASI BANGSA",
        issuedOn: "September 2022",
        link: "https://certified.niomic.com/?number=00017910001/NIOMIC/IX/2022",
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        id: "",
        issuer: "freeCodeCamp",
        issuedOn: "August 2022",
        link: "https://freecodecamp.org/certification/asidikrdn/javascript-algorithms-and-data-structures",
      },
      {
        title: "Responsive Web Design",
        id: "",
        issuer: "freeCodeCamp",
        issuedOn: "August 2022",
        link: "https://freecodecamp.org/certification/asidikrdn/responsive-web-design",
      },
      {
        title: "Belajar Dasar Pemrograman JavaScript",
        id: "QLZ98M3L9X5D",
        issuer: "Dicoding Indonesia",
        issuedOn: "June 2021 - June 2024",
        link: "https://www.dicoding.com/certificates/QLZ98M3L9X5D",
      },
    ],
    portfolio: [
      {
        title: "DeWe Tour",
        picture: "../img/dewetour.png",
        desc: "Find beautiful place with dewe tour, Dewe Tour is an application to find beautiful places, just from your hand.",
        tech: ["html5", "css3", "bootstrap", "js", "react"],
        repository: "",
        demo: "https://dewetour-asidikrdn.netlify.app/",
      },
      {
        title: "YouNoob",
        picture: "../img/younoob.png",
        desc: "YouNoob merupakan sebuah Un-Official YouTube player yang mengizinkan pengguna untuk dapat melihat, mencari, dan memutar video selayaknya aplikasi YouTube Resmi. \n\nAplikasi ini dibuat dengan tujuan untuk latihan dan bahan portfolio semata, bukan untuk dikonsumsi secara masif oleh umum. Dimohon kerjasamanya untuk melihat/menggunakan aplikasi ini seperlunya saja. \n\n* Untuk sementara aplikasi baru berjalan dengan baik pada tampilan dekstop, tampilan versi mobile akan segera ditambahkan.",
        tech: ["html5", "css3", "bootstrap", "js", "react"],
        repository: "https://github.com/asidikrdn/YouNoob",
        demo: "https://younoob.netlify.app/",
      },
      {
        title: "Mini Expense Tracker",
        picture: "../img/mini-expense-tracker.png",
        desc: `"Expense Tracker" refers to an expense recording system, this application will store the user's income and expenses and display the total difference between the two.`,
        tech: ["html5", "css3", "bootstrap", "react"],
        repository: "https://github.com/asidikrdn/mini-expense-tracker",
        demo: "https://mini-expense-tracker.netlify.app/",
      },
      {
        title: "CRUD Mahasiswa",
        picture: "../img/crud-mahasiswa.png",
        desc: `In programming, CRUD stands for Create, Read, Update and Delete. Namely the application that contains data processing. Usually CRUD needs a database as a storage medium. However, for the time being the Student CRUD app is more focused on React code, this CRUD is only stored in memory.`,
        tech: ["html5", "css3", "bootstrap", "react"],
        repository: "https://github.com/asidikrdn/mini-crud-mahasiswa",
        demo: "https://mini-crud-mahasiswa.netlify.app/",
      },
      {
        title: "Sistem Informasi Laundry",
        picture: "../img/sistem-informasi-laundry.png",
        desc: `A simple application for managing a laundry business.
        The main features contained in this application include: \n-Dashboard View \n-Service List \n-Customer List \n-Transaction List \n-Officer List \n-And Print Invoices. \n\nIn this application there are 2 user roles, namely admin and employees where each role has different access rights. Further information can be seen in the repository.`,
        tech: ["html5", "css3", "bootstrap", "php"],
        repository: "https://gitlab.com/asidikrdn/PPW_LaViola-Laundry",
        demo: "https://project.bakulkode.web.id/laviola/",
      },
      {
        title: "Landing Page",
        picture: "../img/landingpage.png",
        desc: `A simple landing page that contains company information to attract customers. For the time being, the data on the landing page is still dummy, because this project is the result of learning HTML, CSS and Bootstrap. However, this project can be used as a template if there are similar projects in the future.`,
        tech: ["html5", "css3", "bootstrap"],
        repository: "https://gitlab.com/asidikrdn/template-landingpage",
        demo: "https://template-landingpage.netlify.app/",
      },
    ],
    contact: {
      address: "Kota Bogor, Jawa Barat, Indonesia",
      email: "sidikrudini16@gmail.com",
      phone: "6287711356758",
      instagram: "https://www.instagram.com/asidikrdn/",
      github: "https://www.github.com/asidikrdn/",
      gitlab: "https://www.gitlab.com/asidikrdn/",
      linkedin: "https://www.linkedin.com/in/asidikrdn/",
      codepen: "https://codepen.io/asidikrdn",
    },
    cv: "https://drive.google.com/file/d/1uSrHxAJ2rcZaeNVSfihRmsLC0Khoq41Z/view?usp=sharing",
  },
  pagePosition: "intro",
};

// Membuat Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "pagePosition/intro": {
      return { ...state, pagePosition: action.payload };
    }
    case "pagePosition/education": {
      return { ...state, pagePosition: action.payload };
    }
    case "pagePosition/skills": {
      return { ...state, pagePosition: action.payload };
    }
    case "pagePosition/portfolio": {
      return { ...state, pagePosition: action.payload };
    }
    case "pagePosition/contact": {
      return { ...state, pagePosition: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
