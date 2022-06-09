import React from "react";
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Estrella from "../../assets/img/estrella.png"

import Experiencia from "../../assets/img/experiencia.png";
import Support from "../../assets/img/support.png";

import Grid from '@mui/material/Grid';





function CardsContainer() {
    return (
        <StyledCardsContainer>
            <Grid container spacing={4} className="gridCtn">
                <Grid item md={3} xs={12} className="gridItem">
                    <Card variant="outlined" className="card" >
                        <CardMedia
                            component="img"
                            alt="Logo"

                            image={Support}
                        />
                        <CardContent>
                            <h4>Soporte</h4>
                            <p>Respondemos ante cualquier inconveniente <br   />que tengas en el sitio. </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12} className="gridItem">
                    <Card variant="outlined" className="card">
                        <CardMedia
                            component="img"
                            alt="Logo"

                            image={Estrella}
                        />
                        <CardContent>
                            <h4>Calificación</h4>
                            <p>Siendo cliente o comerciante siempre vas <br   />a saber con quien tratar.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12} className="gridItem">
                    <Card variant="outlined" className="card" >
                        <CardMedia
                            component="img"
                            alt="Logo"
                            image={Experiencia}
                        />
                        <CardContent>
                            <h4>Experiencia</h4>
                            <p>Cuenta tu experiencia en  <br   />nuestro sitio y que nos conozcan. </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </StyledCardsContainer>
    );
}



const StyledCardsContainer = styled.div`


    img{
        margin-top:1em;
        width:20%;
    }

    .gridCtn{
        display:flex;
        justify-content:space-around;
    }

    .gridItem{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .card{
        display:flex;
        flex-direction:column;
        text-align:center;     
        align-items:center;
        justify-content:center;  
        margin-top:1em;
        width:100%;
        
        background-color:#EED9C7;
        border-radius:2em;
        box-shadow: rgba(0, 0, 0, 0.15) 3.2px 2px 5px;       
        
      } 
`

export default CardsContainer





