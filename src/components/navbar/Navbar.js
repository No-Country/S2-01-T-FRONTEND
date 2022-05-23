import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'
import { AppBar, Button, Tabs, Tab, Box, Toolbar } from '@mui/material';
import {IconoDiv,IconoImg} from '../navbar/styles/elements.navbar'

const Navbar = () => {
    const [login, setLogin] = useState(false)
    return (<>
        <AppBar sx={{ background: "red" }} position="sticky" >
            <Toolbar>
                <IconoDiv>
                    <IconoImg src={logo} alt="logo" />
                </IconoDiv>
                {
                    login ?
                        <Tabs sx={{ marginLeft: "auto" }}
                            textColor="inherit"
                            display="flex"
                        >
                            <Tab label="Search" onClick={() => alert("Search")} />
                            <Tab label="Productos" onClick={() => alert("productos")} />
                            <Tab label="Contactanos" onClick={() => alert("Contactanos")} />
                            <Tab label="Acerca de" onClick={() => alert("Acerca de")} />
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
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => setLogin(!login)}>Login</Button>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    </>);
}


export default Navbar