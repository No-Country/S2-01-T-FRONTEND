import React, { useEffect, useState } from "react";

import "../../pages/auth/login/styles/_loginStyle.scss";
import PropTypes from "prop-types";
import { UserModel } from "../../models/UserClass";
import logoUser from "../../assets/img/logo-user.png";
import RatingStar from "../../components/rating/RatingStar";

const UserPure = ({ buscar }) => {
  /*
  const urlDataClient = "/dataClient.json";
  const [dataClient, setDataClient] = useState([]);
  const [dataCard, setDataCard] = useState([]);

  const getClient = async () => {
    try {
      await fetch(urlDataClient)
        .then((data) => data.json())
        .then((clientes) => {
          setDataClient(clientes);
          setDataCard(clientes);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const filterClient = (aBuscar = "jai") => {
    const resultFilter = dataCard.filter((element) => {
      if (
        element.name.toString().toLowerCase().includes(aBuscar.toLowerCase()) ||
        element.country.toString().toLowerCase().includes(aBuscar.toLowerCase())
      ) {
        return element;
      }
    });
    setDataClient(resultFilter);
  };

  useEffect(() => {
    getClient();
  }, []);
*/
  return (
    <>
      <div className="container-card">
        {buscar.map((cliente) => (
          <div key={cliente.id}>
            <div className="card-pres">
              <div className="card-head">
                <img src={logoUser} alt="" />
              </div>
              <div className="card-container">
                <div className="info-1 ">{cliente.name}</div>
                <div className="info-2 show">{cliente.address}</div>
                <div className="info-3 show">{cliente.country}</div>
                <div className="show">
                  <RatingStar rating={cliente.rating} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

UserPure.propTypes = {
  //user: PropTypes.instanceOf(UserModel),
};

export default UserPure;

/* 

<div className="container-card">
        {dataClient.map((emisora) => (
        <div key={emisora.id}>
          <p>{emisora.name}</p>
          <p>{emisora.role}</p>
        </div>
      ))}

        <div className="card-pres">
          <div className="card-head">
            <img src={logoUser} alt="" />
          </div>
          <div className="card-container">
            <div className="info show">{emisora.name}</div>
            <div className="info show">{emisora.address}</div>
            <div className="show">
              <RatingStar />
            </div>
          </div>
        </div>
      </div>

*/
