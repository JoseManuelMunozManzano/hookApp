import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// La diferencia entre el Link y el NavLink
// El NavLink da una característica extra, que es saber cual es la ruta en la cual me
// encuentro y activar alguna clase de CSS. Ver en el ejemplo activeClassName

export const NavBar = () => {
  return (
    // <nav>
    //   {/* Usar los anchor tags no es la manera correcta de usar la navegación
    //   cuando se esta trabajando con React Router.
    //   El problema es que se fuerza el refresco de la página, cosa que no queremos */}
    //   {/* No hay que usarlos. Hay que transformarlos en Links.  */}
    //   <ul>
    //     <li>
    //       {/* <a href="./">Home</a> */}
    //       <Link to="./">Home</Link>
    //     </li>
    //     <li>
    //       {/* <a href="./login">Login</a> */}
    //       <Link to="./login">Login</Link>
    //     </li>
    //     <li>
    //       {/* <a href="./about">About</a> */}
    //       <Link to="./about">About</Link>
    //     </li>
    //   </ul>
    // </nav>

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* No olvidar el exact porque si no Home quedará siempre active */}
            <NavLink
              exact
              activeClassName="active"
              to="./"
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="./about"
              className="nav-link"
            >
              About
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="./login"
              className="nav-link"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
