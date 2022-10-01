const Intro = (props) => {
  // console.log(props.intro);
  return (
    <section id="intro" className="container-fluid py-2 px-4">
      {/* Tambahan untuk tampilan mobile */}
      <div className="container-fluid w-100 d-flex flex-column text-center d-block d-md-none">
        {/* <h1 className=" pt-5">{props.fullname}</h1> */}
        <img
          src={props.img}
          alt="Foto Profil"
          className="img-fluid w-75 my-auto mx-auto rounded-circle"
        />
        <h1 className="display-2 fw-bold judulHalaman">{props.fullname}</h1>
        <h5 className="opacity-75 mt-0 mb-4">{props.role}</h5>
      </div>
      {/* Akhir tambahan untuk tampilan mobile */}

      <h1 className="display-2 fw-bold judulHalaman d-none d-md-block">
        Hi, I'm {props.name}
      </h1>
      {props.intro.map((element, index) => {
        let text;
        if (
          element.includes("HTML") ||
          element.includes("CSS") ||
          element.includes("Javascript") ||
          element.includes("ReactJS")
        ) {
          text = element.split(" ");
          text = text.map((el) => {
            if (
              el.includes("HTML") ||
              el.includes("CSS") ||
              el.includes("Javascript") ||
              el.includes("ReactJS")
            ) {
              return <b key={Math.random()}>{el} </b>;
            } else {
              return el + " ";
            }
          });
          // console.log(text);
        } else {
          text = element;
        }

        return (
          <p key={index} className="h4 my-3">
            {text}
          </p>
        );
      })}
    </section>
  );
};

export default Intro;
