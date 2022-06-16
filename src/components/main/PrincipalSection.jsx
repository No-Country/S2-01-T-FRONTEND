import React from "react";
import styled from "styled-components";
import Logo from "../../assets/img/logo.png";
import TiendaPagos from "../../assets/img/tienda-pagos.png";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";

function PrincipalSection() {
  return (
    <PrincipalSectionStyled>
      <Grid container>
        <Grid item xs={12} md={6} xl={6}>
          <Container className="titleAndParagraph">
            <h2>elFiadoYa.com</h2>
            <p>
              Conocé mas acerca del comportamiento crediticio <br></br>de tus
              clientes y viceversa
            </p>
          </Container>
          <Container className="registerAndHome">
            <img src={Logo} alt="LogoIcon" />
          </Container>
        </Grid>

        <Grid item xs={12} md={6} xl={6} className="imgPrincipal">
          <img
            className="tiendaPagosImg"
            src={TiendaPagos}
            alt="Tienda Pagos Img"
          />
        </Grid>
      </Grid>
    </PrincipalSectionStyled>
  );
}

const PrincipalSectionStyled = styled.div`
  margin: 1em;

  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    margin-left: 10%;
    margin-top: 1em;
  }

  .registerAndHome {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .registerBtn {
    font-size: small;
  }
`;

export default PrincipalSection;
