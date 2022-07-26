import React from "react";

import "../../pages/auth/login/styles/_loginStyle.scss";
import logoUser from "../../assets/img/logo-user.png";
import logoFiado from "../../assets/img/logo-pagos.png";
import RatingStar from "../../components/rating/RatingStar";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const UserPure = ({ buscar }) => {
  const { userActive } = useContext(UserContext);

  if (userActive.role === "client") {
    const res = buscar.filter((clientFilter) => clientFilter.role === "shop");

    return (
      <>
        <div className="container-card">
          {res.map((cliente) => (
            <div key={cliente.id}>
              <div className="card-pres">
                <div className="card-head">
                  <img src={logoFiado} alt="" />
                </div>
                <div className="card-container">
                  <div className="info-1 ">
                    {cliente.firstName} {cliente.lastName}
                  </div>
                  <div className="info-2 show">{cliente.adress}</div>
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
  } else {
    const res = buscar.filter((clientFilter) => clientFilter.role === "client");

    return (
      <>
        <div className="container-card">
          {res.map((cliente) => (
            <div key={cliente.id}>
              <div className="card-pres">
                <div className="card-head">
                  <img src={logoUser} alt="" />
                </div>
                <div className="card-container">
                  <div className="info-1 ">
                    {cliente.firstName} {cliente.lastName}
                  </div>
                  <div className="info-2 show">{cliente.adress}</div>
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
  }

  // const res = buscar.filter((clientFilter) => clientFilter.role === "client");
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
