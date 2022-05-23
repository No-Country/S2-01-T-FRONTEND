import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/_loginStyle.scss";
import logoFiado from "../../../../assets/img/el-fiado.png";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const LoginPage = () => {
  // ----------------------- Variables de estados -----------------------------
  const [dataUser, setDataUser] = useState([]);

  // --------------------------------------------------------------------------

  const handleInput = (event) => {
    
    setDataUser({ ...dataUser, [event.target.name]: event.target.value });
  };  
  
  return (
    <>
      <div className="container">
        <div className="contenedor">
          <div className="container-img">
            <img className="img-login" src={logoFiado} alt="logo-imve" />
          </div>

          <div className="container-title">
            <h1 className="title-in">
              {" "}
              <DoubleArrowIcon className="icon-login" /> Ingresar
            </h1>
          </div>
          <div className="container-title">
            <h1 className="title-login">Bienvenido</h1>
            <hr className="divisor" />
          </div>
          <div className="container-input">
            <form>
              <label className="label-login">Usuario</label>
              <input
                name="user"
                type="text"
                placeholder="ejemplo@email.co"
                className="input-login"
                onChange={handleInput}
              />
              <label className="label-login">Contraseña</label>
              <input
                name="password"
                type="password"
                placeholder="********"
                className="input-login"
                onChange={handleInput}
              />
            </form>
          </div>
          <div className="container-input">
            <button className="signin-btn" type="button">
              <div className="ingresar">Ingresar</div>
            </button>
          </div>
          <div className="forgot-login">
            {/*<label type="button" onClick={hanldlePass} className="forgot-pass">
            Olvide mi contraseña
            </label>*/}
            <Link className="forgot-pass" to="/addData">
              Olvide mi contraseña
            </Link>
            <hr className="div-forget" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
