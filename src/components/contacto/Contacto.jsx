import React from "react";
import styled from "styled-components";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import test from '../../assets/img/test.svg';

import Grid from '@mui/material/Grid';


function Contacto() {
    return (

        <StyledContacto>

        <Grid container className="gridCtn" >

        <Grid item xs={12} sm={6} md={4}   className="contactoBox">
            <h2>Contacto</h2>
                <Container className="contacto">
                    <p>Suscríbete para mantenerte informado de nuestras novedades, tanto para clientes, como para comerciantes</p>
                    <input type='email' placeholder='Introduce tu email' className="mailInput"></input>
                 </Container>
            <Button size="small" color="warning" variant="contained" className="enterBtn">Enter</Button>
        </Grid>

        <Grid item xs={12} sm={6} md={6}  className="imgCtn">
         <img src={test}  alt="Imagen de contacto" className="contactoImg"/>
        </Grid>


        </Grid>       
            
        </StyledContacto>

    )

}


const StyledContacto = styled.div`

    display:flex;
    justify-content:space-around;
  

    .gridCtn{
      display:flex;
      justify-content:space-around;
      align-items:center;
    }
   

    .contactoBox{
        display:flex;
        flex-direction:column;
        align-items:center;        
    }  


    .imgCtn{
        margin-top:1em;
        display:flex;
        justify-content:center;
        margin-left:4em;
    }
   
   

    
    input{
        border-radius:10em;
        align-self:center;
        width:70%;
        text-align:center;
        background-color: #F1ECE7;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-bottom:1em;
        min-width:50%;       
        
    }

    .contacto{
        display:flex;
        flex-direction:column;

    }
    

        

   

  

`

export default Contacto