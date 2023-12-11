export const Nav = () => {
  return (
    <>
    
      <nav className="sticky-top navbar-dark bg-dark">
        <div className="container">
          <div className="navbar">
            <span className="brand">
              <a href="index.php" className="navlink active">
                THENOSWEB
              </a>
            </span>
            <div>
              <button
                className="nav-btn"
                id="nav-btn"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="nav-icon">Button</span>
              </button>
            </div>
            <div className="collapse" id="collapse">
              <ul>
                <li className="navitem">
                  <a className="navlink" href="entrenamientos.php">
                    {" "}
                    Entrenamientos
                  </a>
                </li>
                <li className="navitem">
                  <a className="navlink" href="alimentacion.php">
                    {" "}
                    Alimentacion
                  </a>
                </li>
                <li className="navitem">
                  <a className="navlink" href="calculadora.php">
                    {" "}
                    Calculadoras
                  </a>
                </li>
                <li className="separation"></li>
                {/* <div className="dropdown">
                                <button className="navlink active loginnav drop-button" id="drop-button"></button>
                                <div id="mydropdown" className="accountoption">
                                    <a href="account.php">Cuenta</a>
                                    <div className="dropdown-divider"></div>
                                    <a href="php/logout.php">Cerrar sesión</a>
                                </div>
                            </div>
                            <a className="navlink active loginnav" href="Sign_Up.php"> Iniciar sesión</a> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
