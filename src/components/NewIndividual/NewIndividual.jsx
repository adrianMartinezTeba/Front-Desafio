import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu/Menu";

const NewIndividual = () => {
  const { id } = useParams();
  const { newIndividual, getNewById } = useContext(CanalDifusionContext);

  useEffect(() => {
    getCanalDifusionById(id);
  }, []);
useEffect(()=>{
console.log(canalDifusion);
},[canalDifusion])
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
