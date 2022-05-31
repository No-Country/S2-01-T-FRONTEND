import React from "react";
import styled from "styled-components";
import CardsContainer from "../../components/main/CardsContainer";
import PrincipalSection from "../../components/main/PrincipalSection";
import Newsletter from "../../components/main/Newsletter";

const HomePage = () => {
  return (
    <SectionMain>
      <PrincipalSection/>
      <Newsletter/>      
      <CardsContainer/>
    </SectionMain>
      
  );
};


const SectionMain = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
  
`




export default HomePage;
