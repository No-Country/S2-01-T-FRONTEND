import React, { useEffect, useState } from "react";
import "../../login/styles/_loginStyle.scss";
import logoFiado from "../../../../assets/img/logo-pagos.png";
import logoClient from "../../../../assets/img/logo-user.png";
import { countrys } from "../../../../models/Coutries";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useForm } from "react-hook-form";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { EXPRESIONES } from "../../../../models/ExpRegulares";
import { ROLES } from "../../../../models/roleModels";
import axios from "axios";

const RegisterPage = () => {
  // ----------------------- Variables de estados -----------------------------
  const [client, setClient] = useState({});

  // --------------------------------------------------------------------------
  const urlPost = "https://fiadosya.herokuapp.com/auth/register";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleInput = (event) => {
    //setClient({ ...client, [event.target.name]: event.target.value });
    const { name, value } = event.target;
    setClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    setClient(e);
    //postRegister();
  };
  console.log(client);

  const postRegister = async () => {
    await axios.post({
      url: urlPost,
      method: "POST",
      data: client,
    });
  };

  useEffect(() => {
    document.title = "elFiado.com | Registrar";
  }, []);

  return (
    <>
      <div className="container">
        <div className="contenedor">
          <div className="container-img">
            <img
              className="img-reg"
              src={watch("role") === "Client" ? logoClient : logoFiado}
              alt="logo-imve"
            />
          </div>

          <div className="container-title">
            <h1 className="title-in">
              <DoubleArrowIcon className="icon-login" /> Registrarme
            </h1>
          </div>
          <div className="container-input">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label-login">Actividad Económica</label>
              <select
                className="form-control-reg input-login"
                id="role"
                name="role"
                onChange={handleInput}
                {...register("role", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  pattern: {
                    value: EXPRESIONES.NAME,
                    message: "El formato del nombre no es correcto",
                  },
                })}
              >
                <option value="">Seleccione un Rol</option>
                <option value={ROLES.SHOP}>Comercio</option>
                <option value={ROLES.CLIENT}>Cliente</option>
              </select>

              {!watch("role") ? (
                <div className="error-login">
                  <p className="text-error">
                    <b>Nota: </b> Por favor elija un rol para diligenciar el
                    formulario
                  </p>
                </div>
              ) : (
                <div>
                  {/* ------------------------ Inicio de los input ---------------------------*/}

                  {watch("role") === "Shop" && (
                    <>
                      <label htmlFor="user" className="label-login">
                        Razón Social
                      </label>
                      <div className="group-input">
                        <input
                          id="razonSocial"
                          name="razonSocial"
                          type="text"
                          placeholder="Ingrese Nombre de la Tienda"
                          className="input-login"
                          onChange={handleInput}
                          {...register("razonSocial", {
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                            pattern: {
                              value: EXPRESIONES.ADDRESS,
                              message: "El formato no es correcto",
                            },
                          })}
                        />
                      </div>
                      {errors.razonSocial && (
                        <p className="msg-error-email-reg">
                          {errors.razonSocial.message}
                        </p>
                      )}
                    </>
                  )}

                  <label htmlFor="user" className="label-login">
                    Nombre
                  </label>
                  <div className="group-input">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ingrese un Nombre"
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
                    Apellido
                  </label>
                  <div className="group-input">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Ingrese Apellido"
                      className="input-login"
                      onChange={handleInput}
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        pattern: {
                          value: EXPRESIONES.NAME,
                          message: "El formato del Apellido no es correcto",
                        },
                      })}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="msg-error-email-reg">
                      {errors.lastName.message}
                    </p>
                  )}

                  <label htmlFor="user" className="label-login">
                    Identificación
                  </label>
                  <div className="group-input">
                    <input
                      id="dni"
                      name="dni"
                      type="text"
                      placeholder="Ingrese identificación"
                      className="input-login"
                      onChange={handleInput}
                      {...register("dni", {
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
                  {errors.dni && (
                    <p className="msg-error-email-reg">{errors.dni.message}</p>
                  )}

                  <label htmlFor="user" className="label-login">
                    Correo Electrónico
                  </label>
                  <div className="group-input">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ejemplo@miemail.com"
                      className="input-login"
                      onChange={handleInput}
                      {...register("email", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
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
                    Número de Contacto
                  </label>
                  <div className="group-input">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="xxx-xxx-xxxx"
                      className="input-login"
                      onChange={handleInput}
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        pattern: {
                          value: EXPRESIONES.PHONE,
                          message:
                            "El formato del número telefónico no es correcto",
                        },
                      })}
                    />
                  </div>
                  {errors.phone && (
                    <p className="msg-error-email-reg">
                      {errors.phone.message}
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

                  <label className="label-login">Ciudad</label>
                  <div className="group-input">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Ingresa una Ciudad"
                      className="input-login"
                      onChange={handleInput}
                      {...register("city", {
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
                  {errors.city && (
                    <p className="msg-error-email-reg">{errors.city.message}</p>
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

              {watch("role") && (
                <div className="container-input">
                  <button className="signin-btn" type="submit">
                    <div className="ingresar">Registrarme</div>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
