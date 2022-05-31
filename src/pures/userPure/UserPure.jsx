import React, { useEffect, useState } from "react";

import "../../pages/auth/login/styles/_loginStyle.scss";
import PropTypes from "prop-types";
import { UserModel } from "../../models/UserClass";
import logoUser from "../../assets/img/logo-user.png";
import RatingStar from "../../components/rating/RatingStar";

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
    <>
      <div className="container-card">
        {dataClient.map((emisora) => (
          <div key={emisora.id}>
            <div className="card-pres">
              <div className="card-head">
                <img src={logoUser} alt="" />
              </div>
              <div className="card-container">
                <div className="info-1 show">{emisora.name}</div>
                <div className="info-2 show">{emisora.address}</div>
                <div className="info-3 show">{emisora.country}</div>
                <div className="show">
                  <RatingStar rating={emisora.rating} />
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
