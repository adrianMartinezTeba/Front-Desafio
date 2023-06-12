import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Menu from '../Menu/Menu';
import { NewsContext } from '../../context/NewContext/NewState';
import { EventContext } from '../../context/EventContext/EventState';
import { UserContext } from '../../context/UserContext/UserState';

const Home = () => {
  // const [noticias, setNoticias] = useState([]);
  // const [allEvents, setAllEvents] = useState([]);
  // const [userIMG, setUserIMG] = useState('');
  const {getUserLogged,user} = useContext(UserContext)
  const { news, getAllNews } = useContext(NewsContext);
  const {getAllEvents,events} = useContext(EventContext)

  useEffect(() => {
    getAllNews();
    getAllEvents();
   getUserLogged();
  //  setTimeout(() => {
  //    setNoticias(news);
  //    setUserIMG(user)
  //    setAllEvents(events)
    
  //  }, 500);
  },[]);

  useEffect(() => {
    console.log(news);
    console.log(events);
    console.log(user);
    
  }, [news,user,events]);
  // const imgPerfil = <img src={userIMG.imageUrl} width={'200px'} />
  // const divAllNoticias = noticias.map((noticia) => (
  //   <div>
  //     <div key={noticia.id}>
  //       <div>
  //         {noticia.tags.map((tag) => (
  //           <div key={tag}>
  //             <span>{tag}</span>
  //           </div>
  //         ))}
  //       </div>
  //       <img src={noticia.imgUrl} alt="Imagen" />
  //       <p>{noticia.date}</p>
  //       <p>{noticia.body}</p>
  //     </div>
  //   </div>
  // ));
  // const divAllEvents = allEvents.map((eventElement)=>(
  //   <div key={eventElement.id}>
  //     <img src={eventElement.imageUrl} />
  //     <div>
  //       {eventElement.name}
  //     </div>
  //     <div>
  //       <span>{eventElement.startDate}</span>
  //     </div>
  //     <div>
  //       {eventElement.tags.map((tag)=>(
  //         <button>{tag}</button>
  //       ))}
  //     </div>

  //   </div>
  // ))


  return (
    <div className="home-container">
      <div className="noticias-container">
        <h3>Noticias</h3>
        {/* <Link to="/profile">
          {imgPerfil}
        </Link> */}
        {/* {noticias.length > 0 ? (
          divAllNoticias
        ) : (
          <p>No hay noticias disponibles.</p>
        )} */}
      </div>
      <div className="recientes-container">
        <p>Recientes</p>
        <button>Ver todo</button>
        <hr />
        {/* {noticias.length > 0 ? (
          divAllNoticias
        ) : (
          <p>No hay noticias disponibles.</p>
        )} */}
      </div>
      <Menu />
    </div>
  );
};

export default Home;