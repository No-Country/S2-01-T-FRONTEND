import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../login/styles/_loginStyle.scss";
import logoFiado from "../../../../assets/img/el-fiado.png";
import logoClient from "../../../../assets/img/logo-user.png";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InputComp from "../../../../components/inputs/Input";
import { EXPRESIONES } from "../../../../models/ExpRegulares";
import Select from "../../../../components/selects/Select";
import { ROLES } from "../../../../models/roleModels";

const RegisterPage = () => {
  // ----------------------- Variables de estados -----------------------------
  const [name, setName] = useState({ campo: "", valido: null });
  const [user, setUser] = useState({ campo: "", valido: null });
  const [pass, setPass] = useState({ campo: "", valido: null });
  const [ident, setIdent] = useState({ campo: "", valido: null });
  const [addss, setAddss] = useState({ campo: "", valido: null });
  const [country, setCountry] = useState({ campo: "", valido: null });
  const [role, setRole] = useState({ campo: "", valido: null });

  // --------------------------------------------------------------------------

  const refElement = useRef();

  const handleInput = (event) => {
    setRole({ ...role, [event.target.name]: event.target.value });
  };

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
            <img
              className="img-login"
              src={role.campo === "client" ? logoClient : logoFiado}
              alt="logo-imve"
            />
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
              <label className="label-login">Actividad Económica</label>
              <select
                className="form-control-reg input-login"
                name="campo"
                onChange={handleInput}
              >
                <option value="">Select a category</option>
                <option value={ROLES.SHOP}>Comercio</option>
                <option value={ROLES.CLIENT}>Cliente</option>
              </select>

              {role.campo === "" ? (
                <div className="error-login">
                  <p className="text-error">
                    <b>Nota: </b> Por favor elija un rol para diligenciar el
                    formulario
                  </p>
                </div>
              ) : role.campo === "client" ? (
                <div>
                  <InputComp
                    label="Nombre Completo"
                    name="name"
                    id="name"
                    placeHold="Nombre"
                    type="text"
                    msgError="Ingrese un nombre valido"
                    expresionRegular={EXPRESIONES.NAME}
                    estado={name}
                    setEstado={setName}
                  />

                  <InputComp
                    label="Identificación"
                    name="identification"
                    id="identification"
                    placeHold="Indentificación"
                    type="text"
                    msgError="Ingrese un valor valido"
                    expresionRegular={EXPRESIONES.IDENT}
                    estado={ident}
                    setEstado={setIdent}
                  />

                  <InputComp
                    label="Correo Electrónico"
                    name="user"
                    id="user"
                    placeHold="ejemplo@miemail.com"
                    type="email"
                    msgError="Ingrese un correo valido"
                    expresionRegular={EXPRESIONES.EMAIL}
                    estado={user}
                    setEstado={setUser}
                  />

                  <InputComp
                    label="Direccion"
                    name="address"
                    id="address"
                    placeHold="Dirección"
                    type="text"
                    msgError="Ingrese una dirección valida"
                    expresionRegular={EXPRESIONES.ADDRESS}
                    estado={addss}
                    setEstado={setAddss}
                  />

                  <Select estado={country} setEstado={setCountry} />

                  <InputComp
                    label="Constraseña"
                    name="pass"
                    id="pass"
                    placeHold="Ingrese contraseña"
                    type="password"
                    msgError="Ingrese una constraseña valida"
                    expresionRegular={EXPRESIONES.PASSWORD}
                    estado={pass}
                    setEstado={setPass}
                  />
                </div>
              ) : (
                <div>
                  <InputComp
                    label="Razon Social"
                    name="razonSocial"
                    id="razonSocial"
                    placeHold="Nombre de comercio"
                    type="text"
                    msgError="Ingrese un nombre valido"
                    expresionRegular={EXPRESIONES.NAME}
                    estado={user}
                    setEstado={setUser}
                  />

                  <InputComp
                    label="NIT"
                    name="nit"
                    id="nit"
                    placeHold="Indentificación"
                    type="text"
                    msgError="Ingrese un valor valido"
                    expresionRegular={EXPRESIONES.IDENT}
                    estado={ident}
                    setEstado={setIdent}
                  />

                  <InputComp
                    label="Direccion"
                    name="address"
                    id="address"
                    placeHold="Dirección"
                    type="text"
                    msgError="Ingrese una dirección valida"
                    expresionRegular={EXPRESIONES.ADDRESS}
                    estado={addss}
                    setEstado={setAddss}
                  />

                  <Select estado={country} setEstado={setCountry} />

                  <InputComp
                    label="Constraseña"
                    name="pass"
                    id="pass"
                    placeHold="Ingrese contraseña"
                    type="password"
                    msgError="Ingrese una constraseña valida"
                    expresionRegular={EXPRESIONES.PASSWORD}
                    estado={pass}
                    setEstado={setPass}
                  />
                </div>
              )}

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

              {role.campo && (
                <div className="container-input">
                  <button
                    className="signin-btn"
                    type="button"
                    onClick={handleSetData}
                  >
                    <div className="ingresar">Ingresar</div>
                  </button>
                </div>
              )}
            </form>
          </div>

          {role.campo && (
            <div className="forgot-login">
              {/*<label type="button" onClick={hanldlePass} className="forgot-pass">
            Olvide mi contraseña
            </label>*/}
              <Link className="forgot-pass" to="/addData">
                Olvide mi contraseña
              </Link>
              <hr className="div-forget" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
