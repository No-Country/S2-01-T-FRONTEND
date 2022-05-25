import { Link, List, Box, ListItem, Typography, Grid } from '@mui/material';
import { Twitter, Instagram, Facebook, Phone, LocationOn, Mail } from '@mui/icons-material';
import logo from '../../assets/img/logo.png';
import '../footer/styles/_footerStyle.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Footer = () => {
    return (<footer>

            <Grid container direction="row" justifyContent="space-around">
                <Grid item sx={{ my: 2 }}>
                    <Box component="span" sx={{ display: 'block' }}>
                        <img
                            src={logo}
                            alt="logo"
                            height={50}>
                        </img>
                    </Box>
                    {/* <Box> */}
                    <Link
                        href="https://twitter.com/fiadoya"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit">
                        <Twitter />
                    </Link>
                    <Link href="https://instagram.com/fiadoya" target="_blank" rel="noopener noreferrer" color="inherit"><Instagram /></Link>
                    <Link href="https://facebook.com/fiadoya" target="_blank" rel="noopener noreferrer" color="inherit"><Facebook /></Link>
                    {/* </Box> */}
                </Grid>

                <Grid item sx={{ my: 2 }}>
                    <Typography variant="h6" gutterBottom component="div" fontWeight="fontWeightRegular">
                        Recursos
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0, py: 0.5 }}>
                            <Link fontWeight="fontWeightLight"
                                href="/"
                                variant="body2"
                                color="inherit"
                                sx={{ textDecoration: "none"}}>
                                Lorem Ipsum
                            </Link>
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link fontWeight="fontWeightLight" href="/" variant="body2" color="inherit" sx={{ textDecoration: "none"}}>Lorem Ipsum</Link></ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link fontWeight="fontWeightLight" href="/" variant="body2" color="inherit" sx={{ textDecoration: "none"}}>Lorem Ipsum</Link></ListItem>
                    </List>
                </Grid>
            
                <Grid item sx={{ my: 2 }}>
                    <Typography variant="h6" gutterBottom component="div" fontWeight="fontWeightRegular">
                        Servicios
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link fontWeight="fontWeightLight" href="/" variant="body2" color="inherit" sx={{ textDecoration: "none"}}>Lorem Ipsum</Link></ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link fontWeight="fontWeightLight" href="/" variant="body2" color="inherit" sx={{ textDecoration: "none"}}>Lorem Ipsum</Link></ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Link fontWeight="fontWeightLight"href="/" variant="body2" color="inherit" sx={{ textDecoration: "none"}}>Lorem Ipsum</Link></ListItem>
                    </List>
                </Grid>

                <Grid item sx={{ my: 2 }}>
                    <Typography variant="h6" gutterBottom component="div" fontWeight="fontWeightRegular">
                        Contacto
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0, py: 0.5 }}>
                            <Phone />
                            <Typography variant="body2" gutterBottom component="div" fontWeight="fontWeightLight">
                                (480) 555-0103
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><LocationOn /><Typography variant="body2" gutterBottom component="div" fontWeight="fontWeightLight">4517 Washington Ave.</Typography></ListItem>
                        <ListItem sx={{ px: 0, py: 0.5 }}><Mail /><Typography variant="body2" gutterBottom component="div" fontWeight="fontWeightLight">debra.holt@example.com</Typography></ListItem>
                    </List>
                </Grid>
            </Grid>

    </footer>)
}

export default Footer;