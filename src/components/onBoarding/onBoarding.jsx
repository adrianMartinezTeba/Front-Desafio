import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import onBoard1 from "../../assets/image/onBoard1.png";
import frame1 from "../../assets/image/Frame1.png";
import frame2 from "../../assets/image/Frame2.png";
import onBoard3 from "../../assets/image/onBoard3.png";

const OnBoarding = () => {
    const [step, setStep] = useState(0);  // Inicializamos el paso en 0
    const navigate = useNavigate();

    const steps = [
        <div>
            <div>
                <img src={onBoard1} alt="onBoard1" className="onBoard1" />
            </div>
            <div className="onBoard1T">
                <p>Entérate de todo lo que está pasando en Marina de empresas.</p>
            </div>
        </div>,
        <div>
            <div>
                <img src={frame1} alt="Frame1" />
            </div>
            <div>
                <img src={frame2} alt="Frame2" />
            </div>
            <div>
                <p>No te pierdas ningún acontecimiento.</p>
            </div>
        </div>,
        <div>
            <div>
                <img src={onBoard3} alt="onBoard3" />
            </div>
            <div>
                <p>Forma parte de un ecosistema único.</p>
            </div>
        </div>
    ];

    const nextStep = () => {
        if (step < steps.length - 1) {  // Si no estamos en la última etapa
            setStep(step + 1);  // Pasamos a la siguiente etapa
        } else {
            navigate("/otra-pagina");  // Si ya estamos en la última etapa, redirigimos a otra página
        }
    }

    return (
        <div>
            {steps[step]}  {/* Mostramos la etapa correspondiente */}
            <button className="botton" onClick={nextStep}><div>Siguiente</div></button> {/* Botón que activa la función nextStep */}
        </div>
    );
}

export default OnBoarding;
