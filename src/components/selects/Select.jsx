import React from "react";
import { countrys } from "../../models/Coutries";

const Select = ({ estado, setEstado }) => {
  const handleInput = (event) => {
    setEstado({ ...estado, campo: event.target.value });
  };

  return (
    <div>
      <label className="label-login">Pais</label>
      <select
        className="form-control-reg input-login"
        name="country"
        placeholder="Code and Country"
        onChange={handleInput}
      >
        <option>Select a Country</option>
        {countrys.map((country) => (
          <option key={country.code} value={country.label}>
            {`${country.label} (+${country.phone})`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
