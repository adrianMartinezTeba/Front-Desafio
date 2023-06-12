import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CanalDifusionContext } from "../../context/CanalDifusionContext/CanalDifusionState";
import Menu from "../Menu/Menu";

const CanalDifusion = () => {
  const { id } = useParams();
  const { canalDifusion, getCanalDifusionById } = useContext(CanalDifusionContext);

  useEffect(() => {
    getCanalDifusionById(id);
  }, []);

  return (
    <div>
      <Menu />
      <h1>Canal de Difusión Individual</h1>
      {canalDifusion ? (
        <>
          <h2>{canalDifusion.name}</h2>
          <p>{canalDifusion.description}</p>
          {/* Mostrar otros detalles del canal de difusión */}
        </>
      ) : (
        <p>Cargando canal de difusión...</p>
      )}
    </div>
  );
};

export default CanalDifusion;
