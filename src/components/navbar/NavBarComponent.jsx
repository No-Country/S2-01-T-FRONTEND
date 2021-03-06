import React, { useContext, useState } from "react";
import logo from "../../assets/img/logo.png";

import { NavLink } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Navbar = () => {
  const [onDesplegar, setOnDesplegar] = useState(false);
  const { isLogged, userActive, setIsLogged, setUserActive } =
    useContext(UserContext);

  const handleDesplegar = () => {
    setOnDesplegar(!onDesplegar);
  };

  const handleLogout = () => {
    setIsLogged(false);
    setUserActive({});
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-img">
          <NavLink to="/app/home">
            <img src={logo} alt="logo-elFiado" />
          </NavLink>
        </div>
        <nav className="link-nav">
          {isLogged && (
            <NavLink className="links" to="/app/search">
              Buscar
            </NavLink>
          )}
          {isLogged && userActive.role === "shop" && (
            <>
              <NavLink
                className="links"
                to="/app/debts"
                activeClassName="active"
              >
                Deudas
              </NavLink>
              <NavLink className="links" to="/app/new-credit">
                Nuevo Credito
              </NavLink>
            </>
          )}
          <NavLink className="links" to="/about">
            Nosotros
          </NavLink>
          <NavLink className="links" to="/">
            Contactanos
          </NavLink>
        </nav>
        <nav className="user-perfil">
          <div className="">
            {isLogged ? (
              <>
                <NavLink className="links" to="/app/profile">
                  {`${userActive.firstName} ${userActive.lastName}`}
                </NavLink>
                <label type="button" className="links" onClick={handleLogout}>
                  Cerrar Sesión
                </label>
              </>
            ) : (
              <NavLink className="links" to="/auth/login">
                Acceder
              </NavLink>
            )}
          </div>
        </nav>

        <div className="cont-icon-menu">
          <MenuOpenIcon id="icon-menu" onClick={handleDesplegar} />
        </div>
      </div>
      {onDesplegar && (
        <div className="menu-hamb">
          <nav className="link-nav-hamb">
            {isLogged && (
              <NavLink
                onClick={handleDesplegar}
                className="links"
                to="/app/search"
              >
                Buscar
              </NavLink>
            )}
            {isLogged && userActive.role === "shop" && (
              <>
                <NavLink
                  className="links"
                  to="/app/debts"
                  activeClassName="active"
                  onClick={handleDesplegar}
                >
                  Deudas
                </NavLink>
                <NavLink
                  onClick={handleDesplegar}
                  className="links"
                  to="/app/new-credit"
                >
                  Nuevo Credito
                </NavLink>
              </>
            )}
            <NavLink onClick={handleDesplegar} className="links" to="/about">
              Nosotros
            </NavLink>
            <NavLink onClick={handleDesplegar} className="links" to="/">
              Contactanos
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;
