
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './onBoarding.scss';
import { UserContext } from "../../context/UserContext/UserState";

import onBoard1 from "../../assets/image/onBoard1.png";
import onBoard2 from "../../assets/image/onBoard2.png";
import onBoard3 from "../../assets/image/onBoard3.png";
import pointMark1 from "../../assets/icons/puntos-izquierda.png";
import pointMark2 from "../../assets/icons/puntos-centro.png";
import pointMark3 from "../../assets/icons/puntos-derecha.png";

const OnBoarding = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const { updateFirstOnBoard } = useContext(UserContext);

    const steps = [
        <div className="step">
            <img src={onBoard1} alt="onBoard1" className="onBoard1" />
            <div className="onBoard1T">
                <p>Entérate de todo lo que está pasando en Marina de empresas</p>
                <div>
                    <img src={pointMark1} alt="puntos-izquierda" className="puntos-izquierda" />
                </div>
            </div>
        </div>,
        <div className="step">
            <img src={onBoard2} alt="onBoard2" className="onBoard2"/>
            <div className="onBoard2T">
                <p>No te pierdas ningún acontecimiento</p>
                <div>
                    <img src={pointMark2} alt="puntos-centro" className="puntos-centro" />
                </div>
            </div>
        </div>,
        <div className="step">
            <img src={onBoard3} alt="onBoard3" className="onBoard3" />
            <div className="onBoard3T">
                <p>Forma parte de un ecosistema único</p>
                <div>
                    <img src={pointMark3} alt="puntos-derecha" className="puntos-derecha" />
                </div>
            </div>
        </div>
    ];

    const nextStep = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            updateFirstOnBoard(false); // Llamada a la función updateFirstOnBoard para actualizar el atributo firstOnBoard en el backend
            navigate("/int");
        }
    }

    return (
        <div className="appContainer">
            {steps[step]}
            <div className="buttonContainer">
                <button className="botton" onClick={nextStep}><div>Siguiente</div></button>
            </div>
        </div>
    );
}

export default OnBoarding;
