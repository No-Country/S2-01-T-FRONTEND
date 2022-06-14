import React, { useState } from "react";
import InputComp from "../../components/inputs/Input";
import "./styles/pages/_newCreditPage.scss";

const NewCredit = () => {

    const [dni, setDni] = useState({ campo: "", valido: null });
    const [monto, setMonto] = useState({ campo: "", valido: null });

    const expresiones = {
        dni: /^\d[0-9]{0,7}$/, // numerico, 1 a 8 caracteres.
        monto: /^\d[0-9]{0,5}$/ // numerico, hasta 5 cifras.
    };

    return (
        <div className="new-credit">
            <h1 className="new-credit-title">Crear un nuevo fiado</h1>
            <div className="container-form">
                <div className="container-input">
                    <form>
                        <InputComp
                            label="DNI cliente (sin puntos ni comas)"
                            name="dni"
                            id="dni"
                            placeHold="Ej: 21395486"
                            type="dni"
                            msgError="Ingrese un DNI válido"
                            expresionRegular={expresiones.dni}
                            estado={dni}
                            setEstado={setDni}
                        />

                        <InputComp
                            label="Monto a fiar"
                            name="password"
                            id="password"
                            placeHold="Ingrese un monto"
                            type="monto"
                            msgError="Ingrese un monto válido"
                            expresionRegular={expresiones.monto}
                            estado={monto}
                            setEstado={setMonto}
                        />

                        <div className="container-input">
                            <button
                            className="signin-btn"
                            type="button"
                            // onClick={handleSetData}
                            >
                            <div className="ingresar">Crear</div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default NewCredit;