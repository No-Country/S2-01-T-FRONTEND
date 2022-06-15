import React from "react";
import styled from "styled-components";
import Logo from "../../assets/img/logo.png";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const AboutUs = () => {
    return (
        <AboutUsStyled>
            <Container className="aboutUsImg">
                <img src={Logo} alt='logo' />
                <h2>elFiadoYa.com</h2>
            </Container>
            <Container className="aboutUsText">
                <h2>Quiénes somos?</h2>
                <Typography variant="body1" gutterBottom>
                    Somos un grupo unido por la necesidad de responder a un problema
                    que a todos nos afecta: La confianza respecto a los pagos. Para eso decidimos crear una
                    aplicación que califique a los usuarios  a su cumplimiento en los pagos.
                    En nuestra aplicación vas a encontrar clientes y comerciantes, de manera tal que todos puedan calificarse.
                    Nuestra misión es llegar a todos aquellos negocios que siguen confiando en sus clientes y que éstos puedan confiar en los comerciantes.
                </Typography>


                <Typography variant="body2" gutterBottom className="teamNc">
                    <Grid container>
                        <Grid item lg={12}>
                            <h3>Equipo No Country</h3>
                        </Grid>
                        <Grid item lg={6} className='team'>
                            <h4>Front End</h4>
                            <ul>
                                <li>Ezequiel Sanchez </li>
                                <li>Luciano Olmedo</li>
                                <li>  Jaime Agudelo</li>
                                <li>Bautista Iglesias</li>
                            </ul>
                        </Grid>
                        <Grid item lg={6} className='team'>
                            <h4>Back end</h4>
                            <ul>
                                <li>Marcos Goncheff </li>
                                <li>Abel Acevedo</li>
                                <li> Gabriel Navarro</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>


        </AboutUsStyled>

    )
}


const AboutUsStyled = styled.div`
    display:flex;
    text-align:center;
    ul{
        list-style:none;
        margin:0;             
        }

    h4{
        margin:0.1em;
        
    }    


    .team{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
    }    


    .aboutUsImg{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }

    .aboutUsText{
        text-align:center;
        display:flex;
        flex-direction:column;
        margin:2em;
    }

    .teamNc{
        display:flex;
        flex-direction:column;
        align-items:center;
    }


`

export default AboutUs