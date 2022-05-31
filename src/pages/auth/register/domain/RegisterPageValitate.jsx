import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../login/styles/_loginStyle.scss";
import logoFiado from "../../../../assets/img/logo-pagos.png";
import logoClient from "../../../../assets/img/logo-user.png";

import { countrys } from "../../../../models/Coutries";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useForm } from "react-hook-form";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";

import { EXPRESIONES } from "../../../../models/ExpRegulares";

import { ROLES } from "../../../../models/roleModels";

const RegisterPage = () => {
  // ----------------------- Variables de estados -----------------------------
  const [client, setClient] = useState({ role: "" });

  // --------------------------------------------------------------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInput = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    console.log(e);
    setClient([""]);
  };

  return (
    <>
      <div className="container">
        <div className="contenedor">
          <div className="container-img">
            <img
              className="img-reg"
              src={client.role === "Client" ? logoClient : logoFiado}
              alt="logo-imve"
            />
          </div>

          <div className="container-title">
            <h1 className="title-in">
              <DoubleArrowIcon className="icon-login" /> Registrarme - Validate
            </h1>
          </div>
          <div className="container-title separator">
            <hr />
            <h1 className="title-login">Bienvenido</h1>
            <hr className="divisor" />
          </div>
          <div className="container-input">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label-login">Actividad Económica</label>
              <select
                className="form-control-reg input-login"
                id="role"
                name="role"
                onChange={handleInput}
              >
                <option value="">Seleccione un Rol</option>
                <option value={ROLES.SHOP}>Comercio</option>
                <option value={ROLES.CLIENT}>Cliente</option>
              </select>

              {client.role === "" ? (
                <div className="error-login">
                  <p className="text-error">
                    <b>Nota: </b> Por favor elija un rol para diligenciar el
                    formulario
                  </p>
                </div>
              ) : (
                <div>
                  {/* ------------------------ Inicio de los input ---------------------------*/}

                  <label htmlFor="user" className="label-login">
                    {client.role === "Client"
                      ? "Nombre Completo"
                      : "Razón Social"}
                  </label>
                  <div className="group-input">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nombre y Apellido"
                      className="input-login"
                      onChange={handleInput}
                      {...register("name", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        pattern: {
                          value: EXPRESIONES.NAME,
                          message: "El formato del nombre no es correcto",
                        },
                      })}
                    />
                  </div>
                  {errors.name && (
                    <p className="msg-error-email-reg">{errors.name.message}</p>
                  )}

                  <label htmlFor="user" className="label-login">
                    Identificación
                  </label>
                  <div className="group-input">
                    <input
                      id="ident"
                      name="ident"
                      type="text"
                      placeholder="Ingrese identificación"
                      className="input-login"
                      onChange={handleInput}
                      {...register("ident", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        minLength: {
                          value: 6,
                          message:
                            "La identificación debe contener al menos 6 caracteres",
                        },
                        pattern: {
                          value: EXPRESIONES.IDENT,
                          message: "No debe contener letras, puntos o espacios",
                        },
                      })}
                    />
                  </div>
                  {errors.ident && (
                    <p className="msg-error-email-reg">
                      {errors.ident.message}
                    </p>
                  )}

                  <label htmlFor="user" className="label-login">
                    Correo Electrónico
                  </label>
                  <div className="group-input">
                    <input
                      id="user"
                      name="email"
                      type="email"
                      placeholder="ejemplo@miemail.com"
                      className="input-login"
                      onChange={handleInput}
                      {...register("email", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                          valido: true,
                        },
                        pattern: {
                          value: EXPRESIONES.EMAIL,
                          message: "El formato del correo no es correcto",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="msg-error-email-reg">
                      {errors.email.message}
                    </p>
                  )}

                  <label htmlFor="user" className="label-login">
                    Contraseña
                  </label>
                  <div className="group-input">
                    <input
                      id="pass"
                      name="pass"
                      type="password"
                      placeholder="******"
                      className="input-login"
                      onChange={handleInput}
                      {...register("pass", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        minLength: {
                          value: 6,
                          message:
                            "La contraseña debe contener al menos 6 caracteres",
                        },
                        pattern: {
                          value: EXPRESIONES.PASSWORD,
                          message:
                            "No debe contener caracteres especiales (/@´'=?¡) ni espacios",
                        },
                      })}
                    />
                  </div>
                  {errors.pass && (
                    <p className="msg-error-email-reg">{errors.pass.message}</p>
                  )}

                  <label htmlFor="user" className="label-login">
                    Dirección de Domicilio
                  </label>
                  <div className="group-input">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="712 Red Bark Ln, Henderson, NV 89011"
                      className="input-login"
                      onChange={handleInput}
                      {...register("address", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },

                        pattern: {
                          value: EXPRESIONES.ADDRESS,
                          message: "El formato no es valido",
                        },
                      })}
                    />
                  </div>
                  {errors.address && (
                    <p className="msg-error-email-reg">
                      {errors.address.message}
                    </p>
                  )}

                  <div>
                    <label className="label-login">Pais</label>
                    <select
                      className="form-control-reg input-login"
                      id="country"
                      name="country"
                      onChange={handleInput}
                      {...register("country", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                    >
                      <option value="">Select a Country</option>
                      {countrys.map((country) => (
                        <option key={country.code} value={country.label}>
                          {`${country.label} (+${country.phone})`}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.country && (
                    <p className="msg-error-email-reg">
                      {errors.country.message}
                    </p>
                  )}
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

              {client.role && (
                <div className="container-input">
                  <button className="signin-btn" type="submit">
                    <div className="ingresar">Ingresar</div>
                  </button>
                </div>
              )}
            </form>
          </div>

          {client.role && (
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
