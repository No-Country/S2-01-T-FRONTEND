import React from "react";
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import sale from "../../assets/img/sale.svg";
import suport from "../../assets/img/suport.svg";
import experience from "../../assets/img/experience.svg";
import Grid from '@mui/material/Grid';





function CardsContainer() {
    return (
        <StyledCardsContainer>
            <Grid container>
                <Grid item md={4} xs={12} className="gridItem">
                    <Card variant="outlined" className="card" >
                        <CardMedia
                            component="img"
                            alt="Logo"

                            image={suport}
                        />
                        <CardContent>
                            <h4>Suport</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={4} xs={12} className="gridItem">
                    <Card variant="outlined" className="card">
                        <CardMedia
                            component="img"
                            alt="Logo"

                            image={sale}
                        />
                        <CardContent>
                            <h4>Sale</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={4} xs={12} className="gridItem">
                    <Card variant="outlined" className="card" >
                        <CardMedia
                            component="img"
                            alt="Logo"
                            image={sale}
                        />
                        <CardContent>
                            <h4>Experience</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        width:75%;
        background-color:#EED9C7;
        border-radius:2em;
        box-shadow: rgba(0, 0, 0, 0.15) 3.2px 2px 5px;
        
        
      } 
`

export default CardsContainer





