const Intro = (props) => {
  // console.log(props.intro);
  return (
    <>
      <h1 className="display-2 fw-bold judulIntro">Hi, I'm {props.name}</h1>
      {props.intro.map((element, index) => {
        return (
          <p key={index} className="h4 my-3">
            {element}
          </p>
        );
      })}
    </>
  );
};

export default Intro;
