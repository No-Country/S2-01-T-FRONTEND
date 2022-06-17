import { Link, List, Box, ListItem, Typography, Grid, Stack } from '@mui/material';
import { Twitter, Instagram, Facebook, Phone, LocationOn, Mail } from '@mui/icons-material';
import logo from '../../assets/img/logo.png';
import '../footer/styles/_footerStyle.scss';
import React, { useState, useRef, useEffect } from 'react';

const Footer = () => {

    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        setHeight(ref.current.offsetHeight)
    }, []);
    console.log(height);
    
    return (<footer className='footer' ref={ref}>

            <Grid container direction="row" justifyContent="space-around">
                <Grid item sx={{ mt: 2 }} >
                    <Box component="span" sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                        <img
                            src={logo}
                            alt="logo"
                            height={50}>
                        </img>
                    </Box>
                    
                    <Stack spacing={2} direction="row">
                        <Link
                            href="https://twitter.com/fiadoya"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit">
                            <Twitter />
                        </Link>
                        <Link href="https://instagram.com/fiadoya" target="_blank" rel="noopener noreferrer" color="inherit"><Instagram /></Link>
                        <Link href="https://facebook.com/fiadoya" target="_blank" rel="noopener noreferrer" color="inherit"><Facebook /></Link>
                    </Stack>
                </Grid>

                <Grid item sx={{ mt: 2 }} className="grid-item-recursos">
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Recursos
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0, py: 0.5 }}>
                            <Link
                                href="/about"
                                variant="caption"
                                color="inherit"
                                sx={{ textDecoration: "none", fontSize: 12 }}>
                                Quiénes somos
                            </Link>
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link href="/terminos-y-condiciones" variant="caption" color="inherit" sx={{ textDecoration: "none", fontSize: 12 }}>Términos y condiciones</Link></ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link href="/politicas-de-privacidad" variant="caption" color="inherit" sx={{ textDecoration: "none", fontSize: 12 }}>Políticas de privacidad</Link></ListItem>
                    </List>
                </Grid>
            
                <Grid item sx={{ mt: 2 }} className="grid-item-servicios">
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Servicios
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link href="/registra-tu-negocio" variant="caption" color="inherit" sx={{ textDecoration: "none", fontSize: 12 }}>Registra tu negocio</Link></ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link href="/acuerdos-corporativos" variant="caption" color="inherit" sx={{ textDecoration: "none", fontSize: 12 }}>Acuerdos corporativos</Link></ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link href="mailto:fiadoya@gmail.com" variant="caption" color="inherit" sx={{ textDecoration: "none", fontSize: 12 }}>Contactanos</Link></ListItem>
                    </List>
                </Grid>

                <Grid item sx={{ mt: 2 }} className="grid-item-contacto">
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Contacto
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0, py: 0.5 }}>
                            <Phone sx={{ fontSize: 18 }} />
                            <Typography variant="caption" display="block" gutterBottom sx={{ fontSize: 12 }}>
                                (480) 555-0103
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><LocationOn sx={{ fontSize: 18 }} /><Typography variant="caption" display="block" gutterBottom sx={{ fontSize: 12 }}>4517 Washington Ave.</Typography></ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Mail sx={{ fontSize: 18 }} /><Typography variant="caption" display="block" gutterBottom sx={{ fontSize: 12 }}>debra.holt@example.com</Typography></ListItem>
                    </List>
                </Grid>
            </Grid>

    </footer>)
}

export default Footer;