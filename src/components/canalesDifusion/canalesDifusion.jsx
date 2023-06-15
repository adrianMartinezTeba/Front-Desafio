
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CanalDifusionContext } from "../../context/CanalDifusionContext/CanalDifusionState";
import Menu from "../Menu/Menu";
import "./CanalesDifusion.scss";

const Scrollable = ({ children }) => {
  return <div className="scrollable">{children}</div>;
};

const CanalesDifusion = () => {
  const { canalDifusiones, getAllCanalDifusion } = useContext(CanalDifusionContext);

  const [filteredCanalOfi, setFilteredCanalOfi] = useState([]);
  const [filteredCanalesEDEM, setFilteredCanalesEDEM] = useState([]);
  const [filteredCanalesLANZADERA, setFilteredCanalesLANZADERA] = useState([]);
  const [filteredCanalesMarina, setFilteredCanalesMarina] = useState([]);
  const [filteredCanalOTROS, setFilteredCanalOTROS] = useState([]);
  const [isTextoMaximizado, setIsTextoMaximizado] = useState(false);

  useEffect(() => {
    getAllCanalDifusion();
  }, [getAllCanalDifusion]);

  useEffect(() => {
    const canalDifusionOficial = canalDifusiones.filter((item) => item.oficial === true);
    setFilteredCanalOfi(canalDifusionOficial);

    const canalesEDEM = canalDifusiones.filter((item) => item.createdBy === "EDEM");
    setFilteredCanalesEDEM(canalesEDEM);

    const canalesLANZADERA = canalDifusiones.filter((item) => item.createdBy === "LANZADERA");
    setFilteredCanalesLANZADERA(canalesLANZADERA);

    const canalesMarina = canalDifusiones.filter((item) => item.createdBy === "Marina de Empresas");
    setFilteredCanalesMarina(canalesMarina);

    const canalOTROS = canalDifusiones.filter(
      (item) =>
        item.createdBy !== "EDEM" &&
        item.createdBy !== "LANZADERA" &&
        item.createdBy !== "Marina de Empresas"
    );
    setFilteredCanalOTROS(canalOTROS);
  }, [canalDifusiones]);

  const [isOficialesOpen, setIsOficialesOpen] = useState(false);
  const [isCanalesEDEMOpen, setIsCanalesEDEMOpen] = useState(false);
  const [isCanalesLANZADERAOpen, setIsCanalesLANZADERAOpen] = useState(false);
  const [isCanalesMarinaOpen, setIsCanalesMarinaOpen] = useState(false);
  const [isOtrosOpen, setIsOtrosOpen] = useState(false);

  const toggleOficiales = () => {
    setIsOficialesOpen(!isOficialesOpen);
  };

  const toggleCanalesEDEM = () => {
    setIsCanalesEDEMOpen(!isCanalesEDEMOpen);
  };

  const toggleCanalesLANZADERA = () => {
    setIsCanalesLANZADERAOpen(!isCanalesLANZADERAOpen);
  };

  const toggleCanalesMarina = () => {
    setIsCanalesMarinaOpen(!isCanalesMarinaOpen);
  };

  const toggleOtros = () => {
    setIsOtrosOpen(!isOtrosOpen);
  };

  const toggleTextoMaximizado = () => {
    setIsTextoMaximizado(!isTextoMaximizado);
  };

  return (
    <div className="canales-difusion-container">
      <Menu />
      <div className={`canales-container ${isTextoMaximizado ? "maximizado" : ""}`}>
        <h2>No te pierdas nada</h2>

        <div className="canales-difusion-subgrupo-item">
          <h4 onClick={toggleCanalesMarina}>Canales Marina de Empresas</h4>
          {isCanalesMarinaOpen && (
            <Scrollable>
              {filteredCanalesMarina.map((canal) => (
                <Link to={`/canal/${canal._id}`} className="canal-link" key={canal._id}>
                  <h4>{canal.name}</h4>
                </Link>
              ))}
            </Scrollable>
          )}
        </div>

        <div className="canales-difusion-subgrupo-item">
          <h4 onClick={toggleCanalesEDEM}>Canales EDEM</h4>
          {isCanalesEDEMOpen && (
            <Scrollable>
              {filteredCanalesEDEM.map((canal) => (
                <Link to={`/canal/${canal._id}`} className="canal-link" key={canal._id}>
                  <h4>{canal.name}</h4>
                </Link>
              ))}
            </Scrollable>
          )}
        </div>

        <div className="canales-difusion-subgrupo-item">
          <h4 onClick={toggleCanalesLANZADERA}>Canales LANZADERA</h4>
          {isCanalesLANZADERAOpen && (
            <Scrollable>
              {filteredCanalesLANZADERA.map((canal) => (
                <Link to={`/canal/${canal._id}`} className="canal-link" key={canal._id}>
                  <h4>{canal.name}</h4>
                </Link>
              ))}
            </Scrollable>
          )}
        </div>

        <div
          className={`canales-difusion-grupo-item ${isOtrosOpen && isTextoMaximizado ? "expanded" : ""}`}
          onClick={toggleTextoMaximizado}
        >
          <h3 onClick={toggleOtros}>Otros Canales</h3>
          <div className="scrollable">
            {isOtrosOpen && (
              <>
                {filteredCanalOTROS.map((canal) => (
                  <Link to={`/canal/${canal._id}`} className="canal-link" key={canal._id}>
                    <h4>{canal.name}</h4>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanalesDifusion;

