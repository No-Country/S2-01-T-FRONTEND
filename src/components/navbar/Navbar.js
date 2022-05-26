import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'
import { AppBar, Button, Tabs, Tab, Box, Toolbar } from '@mui/material';
import { IconoDiv, IconoImg } from '../navbar/styles/elementsNavbar'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [login, setLogin] = useState(false)
    return (<>
        <AppBar sx={{ background: "red" }} position="sticky" >
            <Toolbar>
                <NavLink to="/">
                    <IconoDiv>
                        <IconoImg src={logo} alt="logo" />
                    </IconoDiv>
                </NavLink>

                {
                    login ?
                        <Tabs sx={{ marginLeft: "auto" }}
                            textColor="inherit"
                            display="flex"
                        >
                            <NavLink to="/" style={{ textDecoration: "none",color:"black" }}><Tab label="Search" /></NavLink>
                            <NavLink to="/" style={{ textDecoration: "none",color:"black" }}><Tab label="Contactanos" /></NavLink>
                            <NavLink to="/" style={{ textDecoration: "none",color:"black" }}><Tab label="Acerca de" /></NavLink>
                        </Tabs>
                        :
                        ""
                }
                <Box sx={{ marginLeft: "auto" }}>
                    {
                        login ? <Button
                            sx={{ marginLeft: "10px" }}
                            variant="contained"
                            onClick={() => setLogin(!login)}
                        >Logout</Button>
                            :
                            <>
                                <NavLink to="/register" style={{ textDecoration: "none" }} ><Button variant="contained" color="success" >Registrarse</Button></NavLink>
                                <NavLink to="/login"style={{ textDecoration: "none" }}><Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => setLogin(!login)}>Login</Button></NavLink>
                            </>

                    }
                </Box>
            </Toolbar>
        </AppBar>
    </>);
}


export default Navbar