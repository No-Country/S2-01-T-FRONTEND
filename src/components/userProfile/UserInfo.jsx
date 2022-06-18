import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import userAvatar from "../../assets/img/userImg.svg";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../../providers/UserProvider";
import { useContext } from "react";
import RatingStar from "../rating/RatingStar";

function UserInfo() {
  const { userActive } = useContext(UserContext);

  return (
    <UserInfoStyled>
      <Grid container className="userProfileContainer">
        <Grid item xl={12}>
          <Avatar
            className="userAvatar"
            src={userAvatar}
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid container xl={12} className="userData">
          <Grid item xl={6}>
            <Container>
              <h3>Nombre</h3>
              <p>{userActive.firstName}</p>
            </Container>
            <Container>
              <h3>Apellido</h3>
              <p>{userActive.lastName}</p>
            </Container>
            <Container>
              <h3>Identificación</h3>
              <p>{userActive.dni}</p>
            </Container>
            <Container>
              <h3>País</h3>
              <p>{userActive.country}</p>
            </Container>
          </Grid>
          <Grid item xl={6}>
            <Container>
              <h3>Ciudad</h3>
              <p>{userActive.city}</p>
            </Container>
            <Container>
              <h3>Correo Electrónico</h3>
              <p>{userActive.email}</p>
            </Container>
            <Container>
              <h3>Identificación</h3>
              <RatingStar rating={4} />
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </UserInfoStyled>
  );
}

const UserInfoStyled = styled.div`
  margin: 1.2em;
  padding: 1em;
  box-shadow: -4px 15px 36px 2px rgba(0, 0, 0, 0.75);

  .userProfileContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .userData {
    display: flex;
    justify-content: center;
  }
`;

export default UserInfo;
