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
  const [client, setClient] = useState(null);

  // --------------------------------------------------------------------------
  //const urlPost = "https://fiadosya.herokuapp.com/auth/register";

  // const urlDataClient = "/dataClient.json";
  const urlLocal = "http://localhost:3005/client";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  /* const handleInput = (event) => {
    //setClient({ ...client, [event.target.name]: event.target.value });
    const { name, value } = event.target;
    setClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };*/

  const onSubmit = async (e) => {
    try {
      await axios.post(urlLocal, e).then((res) => console.log(res.status));
      reset();
    } catch (error) {
      console.log(
        "No se pudo crear el " + ROLES.CLIENT + " con error: " + error
      );
      reset();
    }
  };

  const postData = async (e) => {
    try {
      return await axios.post(urlLocal, e);
    } catch (error) {
      console.log(
        "No se pudo crear el " + ROLES.CLIENT + " con error: " + error
      );
    }
  };

  useEffect(() => {
    document.title = "elFiado.com | Registrar";
  }, []);

  return (
    <>
      <div className="container-register">
        <div className="container-head">
          <div className="container-img-reg">
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
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-input">
            <label className="label-login">Actividad Económica</label>
            <select
              className="form-control-reg input-reg"
              id="role"
              name="role"
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
          </div>

          {!watch("role") ? (
            <div className="error-login">
              <p className="text-error">
                <b>Nota: </b> Por favor elija un rol para diligenciar el
                formulario
              </p>
            </div>
          ) : (
            <div className="contenedor-register">
              {/* ------------------------ Inicio de los input ---------------------------*/}

              <div className="label-input">
                <label htmlFor="user" className="label-login">
                  Razón Social
                </label>
                <div className="group-input">
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    placeholder="Ingrese Nombre de la Tienda"
                    className="input-reg"
                    {...register("company_name", {
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
                {errors.company_name && (
                  <p className="msg-error-email-reg">
                    {errors.company_name.message}
                  </p>
                )}
              </div>

              <div className="label-input">
                <label htmlFor="user" className="label-login">
                  Nombre
                </label>
                <div className="group-input">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Ingrese un Nombre"
                    className="input-reg"
                    {...register("firstName", {
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
                {errors.firstName && (
                  <p className="msg-error-email-reg">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="label-input">
                <label htmlFor="user" className="label-login">
                  Apellido
                </label>
                <div className="group-input">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Ingrese Apellido"
                    className="input-reg"
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
              </div>

              <div className="label-input">
                <label htmlFor="user" className="label-login">
                  Identificación
                </label>
                <div className="group-input">
                  <input
                    id="dni"
                    name="dni"
                    type="text"
                    placeholder="Ingrese identificación"
                    className="input-reg"
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
              </div>

              <div className="label-input">
                <label htmlFor="user" className="label-login">
                  Correo Electrónico
                </label>
                <div className="group-input">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ejemplo@miemail.com"
                    className="input-reg"
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
                  <p className="msg-error-email-reg">{errors.email.message}</p>
                )}
              </div>

              <div className="label-input">
                <label htmlFor="user" className="label-login">
                  Contraseña
                </label>
                <div className="group-input">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="******"
                    className="input-reg"
                    {...register("password", {
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
                {errors.password && (
                  <p className="msg-error-email-reg">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="label-input">
                <label htmlFor="user" className="label-login">
                  Dirección de Domicilio
                </label>
                <div className="group-input">
                  <input
                    id="adress"
                    name="adress"
                    type="text"
                    placeholder="712 Red Bark Ln, Henderson, NV 89011"
                    className="input-reg"
                    {...register("adress", {
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
                {errors.adress && (
                  <p className="msg-error-email-reg">{errors.adress.message}</p>
                )}
              </div>

              <div className="label-input">
                <label className="label-login">Ciudad</label>
                <div className="group-input">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Ingresa una Ciudad"
                    className="input-reg"
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
              </div>

              <div className="label-input">
                <label className="label-login">Pais</label>
                <select
                  className="form-control-reg input-reg"
                  id="country"
                  name="country"
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
                {errors.country && (
                  <p className="msg-error-email-reg">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/*<InputComp enviosProps={passProps} />*/}

          {false && (
            <div className="error-login">
              <p className="text-error">
                <ReportProblemIcon className="icon-error" />
                <b>Error: </b> Por favor diligenciar el formulario correctamente
              </p>
            </div>
          )}
          <div>
            {watch("role") && (
              <div className="container-input">
                <button className="signin-btn" type="submit">
                  <div className="ingresar">Registrarme</div>
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
