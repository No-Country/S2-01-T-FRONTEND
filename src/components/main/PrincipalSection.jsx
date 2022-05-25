import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function PrincipalSection() {
    return (
        <PrincipalSectionStyled>
            <h2>Lorem ipsum dolor sit amet, consectetur.</h2>          
            <p>Latin words, combined with a handful of model sentence structures,<br></br> to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum <br></br>is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <Button  color="warning" variant="contained" endIcon={<SearchIcon />}>Search </Button>
        </PrincipalSectionStyled>
    )

}

const PrincipalSectionStyled = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:50%;
    margin:1% 25%;

 
    

`

export default PrincipalSection