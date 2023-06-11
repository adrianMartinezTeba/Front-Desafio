import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';
import { NewsContext } from '../../context/NewContext/NewState';

const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const { news, getAllNews } = useContext(NewsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllNews();
  }, []);

  useEffect(() => {
    console.log(news);
    setNoticias(news);
  }, [news]);

  const divNoticias = noticias.map((noticia) => (
    <div key={noticia.id}>
      <div>
        {noticia.tags.map((tag) => (
          <div key={tag}>
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <img src={noticia.imgUrl} alt="Imagen" />
      <p>{noticia.date}</p>
      <p>{noticia.body}</p>
    </div>
  ));


  return (
    <div className="home-container">
      <div className="noticias-container">
        <h3>Noticias</h3>
        <Link to="/profile">
          <img src="ruta_de_la_imagen" alt="Profile" />
        </Link>
        {noticias.length > 0 ? (
          divNoticias
        ) : (
          <p>No hay noticias disponibles.</p>
        )}
      </div>
      <div className="recientes-container">
        <p>Recientes</p>
        <button>Ver todo</button>
        <hr />
      </div>
      <Menu />
    </div>
  );
};

export default Home;