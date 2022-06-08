import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'
import { Barra } from '../navbar/styles/elementsNavbar'
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from '@mui/material'
import { List, Drawer, ListItemButton, ListItemText } from "@mui/material"

const Navbar = () => {
    const [user, setUser] = useState(false)
    const [open, setOpen] = useState(false)
    return (<>
        <Barra>
            <NavLink to="/">
                <div className='icono_div'>
                    <img className="icono_img" src={logo} alt="logo" />
                </div>
            </NavLink>
            <ul className='container_options'>
                <NavLink to="/search" style={{ textDecoration: 'none' }}><li className='options'>Buscar</li></NavLink>
                <NavLink to="/ayuda" style={{ textDecoration: 'none' }}><li className='options'>Ayuda</li></NavLink>
                <NavLink to="/contact" style={{ textDecoration: 'none' }}><li className='options'>Contacto</li></NavLink>
                <NavLink to="/about" style={{ textDecoration: 'none' }}><li className='options'>Quienes Somos</li></NavLink>
            </ul>
            {
                user ?
                    <div className='container_buttons'>
                        <Button
                            variant='contained'
                            onClick={() => setUser(!user)}
                            className="buttons"
                        >Logout
                        </Button>
                    </div>
                    :
                    <div className='container_buttons'>
                        <NavLink to="/register" style={{ textDecoration: 'none' }}>
                            <Button variant='contained'
                                className="buttons"
                            >Registrarse</Button></NavLink>
                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                            <Button className="buttons"
                                variant='contained'
                                onClick={() => setUser(!user)}
                            >Acceder
                            </Button>
                        </NavLink>
                    </div>
            }
            <div className='burger'>
                <Button ><GiHamburgerMenu className='burger_icon' onClick={() => setOpen(!open)} /></Button>
                <Drawer className="drawer" anchor="right" open={open} onClose={() => setOpen(false)} >
                    <List className="list">
                        {

                            <ListItemButton style={{ display: "flex", flexDirection: "column" }} className="dropdown" onClick={() => setOpen(false)} >
                                <NavLink to="/search" style={{ textDecoration: "none" }}><ListItemText>Buscar</ListItemText> </NavLink>
                                <NavLink to="/ayuda" style={{ textDecoration: "none" }}><ListItemText>Ayuda</ListItemText></NavLink>
                                <NavLink to="/contact" style={{ textDecoration: "none" }}><ListItemText>Contacto</ListItemText></NavLink>
                                <NavLink to="/about" style={{ textDecoration: "none" }}><ListItemText>Quienes Somos</ListItemText> </NavLink>
                                <NavLink to="/login" style={{ textDecoration: "none" }}><ListItemText>Acceder</ListItemText> </NavLink>
                                <NavLink to="/register" style={{ textDecoration: "none" }}><ListItemText>Registrarse</ListItemText> </NavLink>
                            </ListItemButton>

                        }
                    </List>
                </Drawer>
            </div>
        </Barra>
    </>);
}
export default Navbar