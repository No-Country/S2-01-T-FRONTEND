import React from "react";
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import logo from "../../assets/img/logo.png"





function CardsContainer() {
    return (
        <StyledCardsContainer>
            <Card className="card" >
                <CardMedia
                    component="img"
                    alt="Logo"
                                       
                    image={logo}
                    />        
                <CardContent>
                    <h4>Suport</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </CardContent>
            </Card>
            <Card className="card">
            <CardMedia
                    component="img"
                    alt="Logo"
                                        
                    image={logo}
                    />  
                <CardContent>
                    <h4>Sale</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </CardContent>
            </Card>
            <Card className="card">
            <CardMedia
                    component="img"
                    alt="Logo"
                                       
                    image={logo}
                    />  
                <CardContent>
                    <h4>Experience</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </CardContent>
            </Card>
        </StyledCardsContainer>
    );
}



const StyledCardsContainer = styled.div`
    margin:2% 10%;
    display:flex;
    text-align:center;
    justify-content:space-around;
    width:80%;
    
    

    .card{
        margin-top:1em;
        width:15%;
        background-color:#EED9C7;
        border-radius:2em;
        
      }
`

export default CardsContainer

