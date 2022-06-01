import React from "react";
import styled from "styled-components";

import PrincipalSection from "../../components/main/PrincipalSection";


const HomePage = () => {
  return (
    <SectionMain>
      <PrincipalSection/>
     
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
