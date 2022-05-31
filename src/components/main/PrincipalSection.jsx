import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Logo from "../../assets/img/logo.png";
import TiendaPagos from "../../assets/img/tienda-pagos.png"

import Container from '@mui/material/Container';

function PrincipalSection() {
    return (
        <PrincipalSectionStyled>

            <Container className="leftContainer">
                <Container className="titleAndParagraph">
                    <h2>elFiado.com</h2>
                    <p>Conocé mas acerca del comportamiento crediticio <br></br>de tus clientes y viceversa</p>
                </Container>
                <Container className="registerAndHome">
                    <Button color="warning" variant="contained" className="registerBtn">Registrate! </Button>
                    <img src={Logo} alt="LogoIcon" />
                </Container>
            </Container>

            <img className='tiendaPagosImg' src={TiendaPagos} alt='Tienda Pagos Img' />

        </PrincipalSectionStyled>
    )

}

const PrincipalSectionStyled = styled.div`

    margin:1em;
    display:flex;

    .leftContainer{
        width:50%;
    } 

    .registerAndHome{
        display:flex;
        flex-direction:column;
        width:50%;
        margin-left:auto;
    }  

    .tiendaPagosImg{
        width:45%;
    } 



`

export default PrincipalSection