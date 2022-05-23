import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/_loginStyle.scss";
import logoFiado from "../../../../assets/img/el-fiado.png";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CancelIcon from "@mui/icons-material/Cancel";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { CheckCircleIcon } from "@mui/icons-material/";

const LoginPage = () => {
  // ----------------------- Variables de estados -----------------------------
  const [dataUser, setDataUser] = useState([]);

  // --------------------------------------------------------------------------

  const refElement = useRef();

  const handleInput = (event) => {
    setDataUser({ ...dataUser, [event.target.name]: event.target.value });
  };

  const handleSetData = () => {};

  return (
    <>
      <div ref={refElement} className="container">
        <div className="contenedor">
          <div className="container-img">
            <img className="img-login" src={logoFiado} alt="logo-imve" />
          </div>

          <div className="container-title">
            <h1 className="title-in">
              <DoubleArrowIcon className="icon-login" /> Ingresar
            </h1>
          </div>
          <div className="container-title separator">
            <hr />
            <h1 className="title-login">Bienvenido</h1>
            <hr className="divisor" />
          </div>
          <div className="container-input">
            <form>
              <label htmlFor="user" className="label-login">
                Usuario
              </label>
              <div className="group-input">
                <input
                  id="user"
                  name="user"
                  type="email"
                  placeholder="ejemplo@email.co"
                  className="input-login"
                  onChange={handleInput}
                />
                <CancelIcon className="icon-validate-cancel" />
              </div>
              <label htmlFor="password" className="label-login">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Ingresar contraseña"
                className="input-login"
                onChange={handleInput}
              />

              <div className="error-login">
                <p className="text-error">
                  <ReportProblemIcon className="icon-error" />
                  <b>Error: </b> Por favor diligenciar el formulario
                  correctamente
                </p>
              </div>

              <div className="container-input">
                <button
                  className="signin-btn"
                  type="button"
                  onClick={handleSetData}
                >
                  <div className="ingresar">Ingresar</div>
                </button>
              </div>
            </form>
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
