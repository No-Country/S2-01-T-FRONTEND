import React from "react";
import styled from "styled-components";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import test from '../../assets/img/test.svg';


function Contacto() {
    return (

        <StyledContacto>
            <Container maxWidth="sm" className="contactoBox">
                <h2>Contacto</h2>
                <Container className="contacto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quam in justo tristique efficitur.</p>
                    <input type='email' placeholder='Enter your email' className="mailInput"></input>
                 </Container>
                <Button size="small" color="warning" variant="contained" >Enter</Button>
            </Container>            
            <img src={test} className="imgContacto" alt="Imagen de contacto"/>
        </StyledContacto>

    )

}


const StyledContacto = styled.div`

    display:flex;
    
    align-items:center;

    flex-wrap:wrap;

    justify-content:center;
    

    .contactoBox{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:45%;
    }    

    .imgContacto{
        margin:1.5em;
        width:50%;
    }

    h2{
        text-align:center;
        margin-bottom:0.5%;
    }
    input{
        border-radius:10em;
        align-self:center;
        width:60%;
        text-align:center;
        background-color: #F1ECE7;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-bottom:1em;
        min-width:50%;
        
        
    }

    .contacto{
        display:flex;
        flex-direction:column;


    

        

   

  

`

export default Contacto