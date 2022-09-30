const Intro = (props) => {
  // console.log(props.intro);
  return (
    <section id="intro" className="container-fluid py-2 px-4">
      <h1 className="display-2 fw-bold judulHalaman">Hi, I'm {props.name}</h1>
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
