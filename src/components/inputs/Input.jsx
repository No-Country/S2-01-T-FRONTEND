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
    setEstado({ ...estado, campo: event.target.value });
  };

  const handleKey = () => {
    if (expresionRegular) {
      console.log("first");
    }
  };

  const handleBlur = () => {};

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
          value={estado.campo}
          className="input-login"
          onChange={handleInput}
          onKeyUp={() => {}}
          onBlur={() => {}}
        />
        {estado ? (
          <CancelIcon className="icon-validate-cancel" />
        ) : (
          <CheckCircleIcon className="icon-validate-ok" />
        )}
        <p className="msg-error-email">{msgError}</p>
      </div>
    </div>
  );
};

export default InputComp;
