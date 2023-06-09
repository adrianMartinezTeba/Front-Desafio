import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const [step, setStep] = useState(0);  // Inicializamos el paso en 0
  const navigate = useNavigate();

  const steps = [
    <div>
      <div>
        {/* Imagen de la Etapa 1 */}
      </div>
      <div>
        <p>Contenido de la etapa 1...</p>
      </div>
    </div>,
    <div>
      <div>
        {/* Imagen de la Etapa 2 */}
      </div>
      <div>
        <p>Contenido de la etapa 2...</p>
      </div>
    </div>,
    <div>
      <div>
        {/* Imagen de la Etapa 3 */}
      </div>
      <div>
        <p>Contenido de la etapa 3...</p>
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
      <button onClick={nextStep}>Siguiente</button> {/* Botón que activa la función nextStep */}
    </div>
  );
}

export default OnBoarding;
