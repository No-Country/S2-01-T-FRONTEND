import React from "react";
import styled from "styled-components"

const AboutMePage = () => {
  return (
    <>
      <AboutUs >
        <div className="color-change-5x">
          <h1>EL FIADO YA </h1>
          <h2>ACERCA DEL PROYECTO</h2>
          <p>
            La idea básicamente es una api que ayude al comercio a llevar un control de las cuentas FIADO de clientes. Pueden llevar un control de deuda tanto el comerciante como el cliente ( vencimientos, monto tope de cuenta , autorizados a realizar compras etc.). También puntuarlos para que otros comercios tengan una referencia de ese cliente
          </p>
          <h3>FRONTEND</h3>
          <ul>
            <li>Ezequiel Sanchez </li>
            <li>Luciano Olmedo</li>
            <li>  Jaime Agudelo</li>
            <li>Bautista Iglesias</li>
          </ul>
          <h3>BACKEND</h3>
          <ul>
            <li>Marcos Goncheff </li>
            <li>Abel Acevedo</li>
            <li> Gabriel Navarro</li>
          </ul>
        </div>
      </AboutUs>;
    </>
  )
};


const AboutUs = styled.div` 
 .color-change-5x{   
  animation:color-change-5x 16s linear infinite alternate both  
}
@keyframes color-change-5x{0%{background:#19dcea}25%{background:#b22cff}50%{background:#ea2222}75%{background:#f5be10}100%{background:#3bd80d}}

h1{
  display: flex;
  justify-content: center;
  text-align:center;
  font-size: 50px;
  text-decoration:underline;
}
h2{
  display: flex;
  justify-content: center;
  text-align:center;
  text-decoration:underline;

}
h3{
  text-decoration:underline;
}

p{
  display: flex;
  justify-content: center;
  text-align:center;
  font-weight: bold;
  font-size: 20px;
  
  
  
}
ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  

  
}
 
  

`

export default AboutMePage;
