import React, { useState, useContext } from "react";
import logo from "../../assets/img/logo.png";
import { Barra } from "../navbar/styles/elementsNavbar";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@mui/material";
import { List, Drawer, ListItemButton, ListItemText } from "@mui/material";
import { UserContext } from '../../providers/UserProvider'

const Navbar = () => {

  const { isLogged, setIsLogged } = useContext(UserContext)

  const [open, setOpen] = useState(false);
  return (
    <>
      <Barra>
        <NavLink to="/app/home">
          <div className="icono_div">
            <img className="icono_img" src={logo} alt="logo" />
          </div>
        </NavLink>
        {isLogged ? (
          <>
            <ul className="container_options">              
              <NavLink to="/app/search" style={{ textDecoration: "none" }}>
                <li className="options">Buscar</li>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <li className="options">Contacto</li>
              </NavLink>
              <NavLink to="/app/ayuda" style={{ textDecoration: "none" }}>
                <li className="options">Ayuda</li>
              </NavLink>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <li className="options">Quienes Somos</li>
              </NavLink>
            </ul>
            <div className="container_buttons">
              <Button
                variant="contained"
                onClick={() => setIsLogged(!isLogged)}
                className="buttons"
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <ul className="container_options">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <li className="options">Contacto</li>
              </NavLink>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <li className="options">Quienes Somos</li>
              </NavLink>
            </ul>
            <div className="container_buttons">
              <NavLink to="/auth/register" style={{ textDecoration: "none" }}>
                <Button variant="contained" className="buttons">
                  Registrarse
                </Button>
              </NavLink>
              <NavLink to="/auth/login" style={{ textDecoration: "none" }}>
                <Button
                  className="buttons"
                  variant="contained"
                  onClick={() => setIsLogged(!isLogged)}
                >
                  Acceder
                </Button>
              </NavLink>
            </div>
          </>
        )}
        <div className="burger">
          <Button>
            <GiHamburgerMenu
              className="burger_icon"
              onClick={() => setOpen(!open)}
            />
          </Button>
          <Drawer
            className="drawer"
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ paperAnchorRight: "red" }}
          >
            <List sx={{ background: "red" }} className="list">
              {
                <ListItemButton
                  style={{ display: "flex", flexDirection: "column" }}
                  className="dropdown"
                  onClick={() => setOpen(false)}
                >
                  <NavLink to="/auth/login" style={{ textDecoration: "none", color: "white" }}>
                    <ListItemText>Acceder</ListItemText>{" "}
                  </NavLink>
                  <NavLink
                    to="/auth/register"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText>Registrarse</ListItemText>{" "}
                  </NavLink>
                  <NavLink to="/app/search" style={{ textDecoration: "none", color: "white" }}>
                    <ListItemText >Buscar</ListItemText>{" "}
                  </NavLink>
                  <NavLink to="/about" style={{ textDecoration: "none", color: "white" }}>
                    <ListItemText>Quienes Somos</ListItemText>{" "}
                  </NavLink>
                  <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
                    <ListItemText>Contacto</ListItemText>
                  </NavLink>
                  <NavLink to="/app/ayuda" style={{ textDecoration: "none", color: "white" }}>
                    <ListItemText>Ayuda</ListItemText>
                  </NavLink>
                </ListItemButton>
              }
            </List>
          </Drawer>
        </div>
      </Barra>
    </>
  );
};
export default Navbar;
