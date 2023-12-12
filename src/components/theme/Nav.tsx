export const Nav = () => {
  return (
    <>
      <nav className="sticky-top navbar-dark bg-dark navbar navbar-expand-lg">
        <div className="container">
          <span className="navbar-brand">
            <a href="index.php" className="nav-link active">
              THENOSWEB
            </a>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="entrenamientos.php">
                  Entrenamientos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="alimentacion.php">
                  {" "}
                  Alimentacion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="calculadora.php">
                  {" "}
                  Calculadoras
                </a>
              </li>
              <li className="separation"></li>
              {/* <div className="dropdown">
                                <button className="nav-link active loginnav drop-button" id="drop-button"></button>
                                <div id="mydropdown" className="accountoption">
                                    <a href="account.php">Cuenta</a>
                                    <div className="dropdown-divider"></div>
                                    <a href="php/logout.php">Cerrar sesión</a>
                                </div>
                            </div>
                            <a className="nav-link active loginnav" href="Sign_Up.php"> Iniciar sesión</a> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
