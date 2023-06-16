
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu/menu";
import { NewsContext } from "../../context/NewContext/NewState";
import "./newIndividual.scss";
import expandir from "../../assets/icons/barra_deslizamiento.png";

const NewIndividual = () => {
  const { id } = useParams();
  const { newInd, getNewById } = useContext(NewsContext);
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  useEffect(() => {
    getNewById(id);
  }, []);

  useEffect(() => {
  }, [newInd]);

  return (
    <div className="container">
      <Menu />
      {newInd ? (
        <>
          <div className="fondo">
            <img
              className="imagen-fondo"
              src={newInd.imageUrl}
              alt={newInd.title}
            />
            <div className="overlay">
              <div className="tags">
                {newInd.tags.map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
              <h2>{newInd.title}</h2>
            </div>
          </div>
          <div className={`texto ${isTextExpanded ? "expanded" : ""}`}>
            <div
              className="expand-button"
              onClick={() => setIsTextExpanded(!isTextExpanded)}
            >
              {isTextExpanded ? (
                <img src={expandir} alt="Minimizar" />
              ) : (
                <img src={expandir} alt="Expandir" />
              )}
            </div>
            <p>Fecha de publicación: {new Date(newInd.date).toLocaleDateString()}</p>
            <p>{newInd.body}</p>
          </div>
        </>
      ) : (
        <p>Cargando noticia...</p>
      )}
    </div>
  );
};

export default NewIndividual;
