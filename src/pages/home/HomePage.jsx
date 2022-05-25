import React from "react";
import styled from "styled-components";
import CardsContainer from "../../components/main/CardsContainer";
import PrincipalSection from "../../components/main/PrincipalSection";

const HomePage = () => {
  return (
    <SectionMain>
      <CardsContainer/>
      <PrincipalSection/>
    </SectionMain>
      
  );
};


const SectionMain = styled.div`
  
`




export default HomePage;
