import React, { useContext, useEffect } from "react";
import { CanalDifusionContext } from "../../context/CanalDifusionContext/CanalDifusionState";
import Menu from "../Menu/Menu";

const CanalesDifusion = () => {
  const { canalDifusiones, getAllCanalDifusion } = useContext(CanalDifusionContext);

  useEffect(() => {
    getAllCanalDifusion();
  }, [getAllCanalDifusion]);

  return (
    <div>
      <Menu />
      <div>
        <h2>Canales de Difusión</h2>
        {canalDifusiones.map((canal) => (
          <div key={canal._id} className="canal-item">
            <h3>{canal.name}</h3>
            <p>{canal.description}</p>
            {/* Mostrar más información del canal si es necesario */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanalesDifusion;
