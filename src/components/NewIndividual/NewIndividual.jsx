
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu/Menu";
import { NewsContext } from "../../context/NewContext/NewState";

const NewIndividual = () => {
  const { id } = useParams();
  const { news, getNewById } = useContext(NewsContext);

  useEffect(() => {
    getNewById(id);
  }, []);

  useEffect(() => {
    console.log(news);
    console.log(news?.tags);
  }, [news]);

  return (
    <div>
      <Menu />
      <h1>Noticia Individual</h1>
      {news ? (
        <>
          <h2>{news.title}</h2>
          <p>{news.body}</p>
          <p>Fecha de publicación: {new Date(news.date).toLocaleDateString()}</p>
          <img src={news.imageUrl} alt={news.title} />
          <p>Etiquetas: {news.tags ? news.tags.join(", ") : "Sin etiquetas"}</p>
        </>
      ) : (
        <p>Cargando noticias...</p>
      )}
    </div>
  );
};

export default NewIndividual;
