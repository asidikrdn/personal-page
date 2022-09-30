const Header = (props) => {
  return (
    <header className="position-fixed top-0">
      <div className="container-fluid h-100 w-100 d-flex flex-column text-light text-center">
        <h1 className=" pt-5">{props.fullname}</h1>
        <h5 className="opacity-75 mt-3">{props.role}</h5>
        <img
          src="../img/profil.jpg"
          alt="Foto Profil"
          className="img-fluid w-75 my-auto mx-auto rounded-circle"
        />
      </div>
    </header>
  );
};

export default Header;
