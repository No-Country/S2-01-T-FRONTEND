import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const InputComp = ({
  label,
  id,
  name,
  type,
  placeHold,
  estado,
  setEstado,
  msgError,
  expresionRegular,
}) => {
  // ----------------------- Variables de estados -----------------------------

  // --------------------------------------------------------------------------
  // onKeyUp => esta fucion se ejecuta cuando levanto el dedo despues de haber presionado la tecla
  // onBlur => esta funcion se ejecuta cuando doy un click por fuera del input

  const handleInput = (event) => {
    setEstado({ ...estado, [event.target.name]: event.target.value });
  };

  const validate = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.value)) {
        // Correcto
        setEstado({ ...estado, valido: "true" });
      } else {
        setEstado({ ...estado, valido: "false" });
      }
    } else {
      console.log("No existe expresion regular");
    }
  };

  return (
    <div>
      <label htmlFor="user" className="label-login">
        {label}
      </label>
      <div className="group-input">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeHold}
          value={estado.value}
          className="input-login"
          onChange={handleInput}
          onKeyUp={validate}
          onBlur={validate}
          valido={estado.valido}
          required
        />
        {estado.valido === null ? (
          ((<CancelIcon className="icon-validate-cancel" />),
          (<CheckCircleIcon className="icon-validate-ok" />))
        ) : estado.valido === "false" ? (
          <CancelIcon className="icon-validate-cancel visible-x" />
        ) : (
          <CheckCircleIcon className="icon-validate-ok visible-ok" />
        )}
        {estado.valido === "false" && (
          <p className="msg-error-email">{msgError}</p>
        )}
      </div>
    </div>
  );
};

export default InputComp;
