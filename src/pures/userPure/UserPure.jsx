import React, { useEffect, useState } from "react";

import "./styleUserPure.scss";
import PropTypes from "prop-types";
import { UserModel } from "../../models/UserClass";
import { getClient } from "../../services/getClient";
import logoUser from "../../assets/img/logo-user.png";

const UserPure = ({ user }) => {
  const urlDataClient = "/dataClient.json";
  const [dataClient, setDataClient] = useState([]);

  useEffect(() => {
    try {
      fetch(urlDataClient)
        .then((data) => data.json())
        .then((dataClien) => setDataClient(dataClien));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container-card">
      <h2>Nombre: {user.name}</h2>
      {dataClient.map((emisora) => (
        <div key={emisora.id}>
          <p>{emisora.id}</p>
          <p>{emisora.name}</p>
          <p>{emisora.address}</p>
          <p>{emisora.role}</p>
        </div>
      ))}

      <div className="card-pres">
        <div className="card-head">
          <img src={logoUser} alt="" />
        </div>
        <div className="card-container">
          <div className="info show">Jaime Agudelo</div>
          <div className="info show">Bogotá, Colombia</div>
          <div className="info show">Calificación:</div>
          <div className="info show">Comentarios:</div>
        </div>
      </div>
    </div>
  );
};

UserPure.propTypes = {
  //user: PropTypes.instanceOf(UserModel),
};

export default UserPure;
