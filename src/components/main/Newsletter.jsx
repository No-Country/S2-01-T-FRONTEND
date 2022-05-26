import React from "react";
import styled from "styled-components";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import test from '../../assets/img/test.svg';


function Newsletter() {
    return (

        <StyledNewsletter>
            <Container maxWidth="sm" className="contactoBox">
                <h2>Contacto</h2>
                <Container className="contacto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quam in justo tristique efficitur.</p>
                    <input type='email' placeholder='Enter your email'></input>
                 </Container>
                <Button size="small" color="warning" variant="contained" className="enterBtn" >Enter</Button>
            </Container>
            <img src={test}/>


        </StyledNewsletter>

    )

}


const StyledNewsletter = styled.div`

    display:flex;


    .contactoBox{
        display:flex;
        flex-direction:column;
        align-items:center;
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
        
    }

    .contacto{
        display:flex;
        flex-direction:column;
    }

    .enterBtn{
        margin:1em;
        width:20%;
        
    }

`

export default Newsletter