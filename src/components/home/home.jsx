import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Menu from '../Menu/Menu';
import { NewsContext } from '../../context/NewContext/NewState';
import { EventsContext } from '../../context/EventContext/EventState';
import { UserContext } from '../../context/UserContext/UserState';

const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [userIMG, setUserIMG] = useState('');
  const {getUserLogged,user} = useContext(UserContext)
  const { news, getAllNews } = useContext(NewsContext);
  const {getAllEvents,events} = useContext(EventsContext)

  useEffect(() => {
    getAllNews();
    getAllEvents()
   getUserLogged()
  },[]);

  useEffect(() => {
    setNoticias(news);
    setAllEvents(events)
    setUserIMG(user)
    console.log(news);
    console.log(events);
    console.log(user);
    
  }, [news,events,user]);
  const imgPerfil = <img src={userIMG.imageURL} />
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
  // const divEvents = allEvents.map((eventElement)=>(
    
  // ))


  return (
    <div className="home-container">
      <div className="noticias-container">
        <h3>Noticias</h3>
        <Link to="/profile">
          {imgPerfil}
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
        {noticias.length > 0 ? (
          divNoticias
        ) : (
          <p>No hay noticias disponibles.</p>
        )}
      </div>
      <Menu />
    </div>
  );
};

export default Home;