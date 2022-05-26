import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../login/styles/_loginStyle.scss";
import logoFiado from "../../../../assets/img/el-fiado.png";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InputComp from "../../../../components/inputs/Input";

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

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^[a-zA-Z0-9\_\-.]{6,12}$/, // 6 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

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
                label="Usuarios"
                name="user"
                id="user"
                placeHold="ejemplo@email.com"
                type="email"
                msgError="Ingrese un correo valido"
                expresionRegular={expresiones.correo}
                estado={user}
                setEstado={setUser}
              />

              <InputComp
                label="Constraseña"
                name="pass"
                id="pass"
                placeHold="Ingrese contraseña"
                type="password"
                msgError="Ingrese una constraseña valida"
                expresionRegular={expresiones.password}
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
