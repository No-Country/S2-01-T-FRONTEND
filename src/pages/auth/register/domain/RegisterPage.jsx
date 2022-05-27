import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../login/styles/_loginStyle.scss";
import logoFiado from "../../../../assets/img/el-fiado.png";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InputComp from "../../../../components/inputs/Input";
import { EXPRESIONES } from "../../../../models/ExpRegulares";

const RegisterPage = () => {
  // ----------------------- Variables de estados -----------------------------
  const [user, setUser] = useState({ campo: "", valido: null });
  const [pass, setPass] = useState({ campo: "", valido: null });

  // --------------------------------------------------------------------------

  const refElement = useRef();

  //   const handleInput = (event) => {
  //     setDataUser({ ...dataUser, [event.target.name]: event.target.value });
  //   };

  const handleSetData = () => {};

  /*const userProps = {
    label: "Usuarios",
    name: "user",
    id: "user",
    placeHold: "ejemplo@email.com",
    type: "email",
    msgError: "Ingrese un correo valido",
    estado: { user },
    setEstado: { setUser },
  };*/

  return (
    <>
      <div ref={refElement} className="container">
        <div className="contenedor">
          <div className="container-img">
            <img className="img-login" src={logoFiado} alt="logo-imve" />
          </div>

          <div className="container-title">
            <h1 className="title-in">
              <DoubleArrowIcon className="icon-login" /> Registrarme
            </h1>
          </div>
          <div className="container-title separator">
            <hr />
            <h1 className="title-login">Bienvenido</h1>
            <hr className="divisor" />
          </div>
          <div className="container-input">
            <form>
              <InputComp
                label="Nombre Completo"
                name="name"
                id="name"
                placeHold="Nombre"
                type="text"
                msgError="Ingrese un nombre valido"
                expresionRegular={EXPRESIONES.NAME}
                estado={user}
                setEstado={setUser}
              />

              <InputComp
                label="Tipo"
                name="pass"
                id="pass"
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

export default RegisterPage;
