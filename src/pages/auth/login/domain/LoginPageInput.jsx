import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/_loginStyle.scss";
import axios from "axios";
import logoFiado from "../../../../assets/img/el-fiado.png";
import { EXPRESIONES } from "../../../../models/ExpRegulares";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InputComp from "../../../../components/inputs/Input";

const LoginPage = () => {
  // ----------------------- Variables de estados -----------------------------
  const [user, setUser] = useState({ campo: "", valido: null });
  const [pass, setPass] = useState({ campo: "", valido: null });
  const [dataImport, setDataImport] = useState([]);

  // --------------------------------------------------------------------------

  //   const handleInput = (event) => {
  //     setDataUser({ ...dataUser, [event.target.name]: event.target.value });
  //   };
  const urlLogin = "https://fiadosya.herokuapp.com/auth/login";
  const handleSetData = () => {
    addObject();
    axios.post(urlLogin, dataImport).then((data) => console.log(data));
    setPass({ campo: "", valido: null });
    setUser({ campo: "", valido: null });
  };

  const addObject = () => {
    const envio = {
      email: user.campo,
      password: pass.campo,
    };
    setDataImport(envio);
  };

  useEffect(() => {
    document.title = "elFiado.com | Login";
  }, []);

  return (
    <>
      <div className="container">
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
            <h1 className="title-login">Que bueno que estés de vuelta</h1>
            <hr className="divisor" />
          </div>
          <div className="container-input">
            <form>
              <InputComp
                label="Usuarios"
                name="name"
                id="name"
                placeHold="ejemplo@email.com"
                type="email"
                msgError="Ingrese un correo valido"
                expresionRegular={EXPRESIONES.EMAIL}
                estado={user}
                setEstado={setUser}
              />

              <InputComp
                label="Constraseña"
                name="password"
                id="password"
                placeHold="Ingrese contraseña"
                type="password"
                msgError="Ingrese una constraseña valida"
                expresionRegular={EXPRESIONES.PASSWORD}
                estado={pass}
                setEstado={setPass}
              />

              {/*<InputComp enviosProps={passProps} />*/}

              {false && (
                <div className="error-login">
                  <p className="text-error">
                    <ReportProblemIcon className="icon-error" />
                    <b>Error: </b> Por favor diligenciar el formulario
                    correctamente
                  </p>
                </div>
              )}

              <div className="container-input">
                <button
                  className="signin-btn"
                  type="button"
                  onClick={() => {
                    handleSetData();
                  }}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
