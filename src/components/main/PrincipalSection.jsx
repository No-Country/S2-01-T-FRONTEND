import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Logo from "../../assets/img/logo.png";
import TiendaPagos from "../../assets/img/tienda-pagos.png";
import Grid from '@mui/material/Grid';
import { NavLink } from "react-router-dom";

import Container from '@mui/material/Container';
import { width } from "@mui/system";

function PrincipalSection() {

    return (
        <PrincipalSectionStyled>

            <Grid container>

                <Grid item xs={12} md={6}  xl={6}>
                    <Container className="titleAndParagraph">
                        <h2>elFiado.com</h2>
                        <p>Conocé mas acerca del comportamiento crediticio <br></br>de tus clientes y viceversa</p>
                    </Container>
                    <Container className="registerAndHome"> 

                    <NavLink to="/register" style={{ textDecoration: 'none' }}>
                        <Button color="warning" variant="contained" className="registerBtn" to="/register">Registrate! </Button>
                    </NavLink>
                        <img src={Logo} alt="LogoIcon" />

                   
                        
                        
                    </Container>
                </Grid>

                <Grid item xs={12} md={6} xl={6} className="imgPrincipal">
                    <img className='tiendaPagosImg' src={TiendaPagos} alt='Tienda Pagos Img' />    
                </Grid>


            </Grid>


        </PrincipalSectionStyled>
    )

}

const PrincipalSectionStyled = styled.div`

    margin:1em;
    
    justify-content:center;
    align-items:center;

    img{
        width:80%;
        margin-left:10%;
        margin-top:1em;
    }
 
    .registerAndHome{
        display:flex;
        flex-direction:column;
        width:50%;
        margin-left:auto;
        margin-right:auto;
    } 

    .registerBtn{
        font-size:small;
    }

   

    

`

export default PrincipalSection