import React from "react";
import styled from "styled-components";
import CardsContainer from "../../components/contacto/CardsContainer";
import Contacto from "../../components/contacto/Contacto";

const ContactPage = () => {
  return (
    <StyledConctactPage>
      <Contacto />
      <CardsContainer />
    </StyledConctactPage>
  );
};

const StyledConctactPage = styled.div`
  margin: 1.5em auto 1.5em auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export default ContactPage;
