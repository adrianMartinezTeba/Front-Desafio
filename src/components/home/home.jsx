import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Menu from '../Menu/Menu';
import { NewsContext } from '../../context/NewContext/NewState';
import { EventContext } from '../../context/EventContext/EventState';
import { UserContext } from '../../context/UserContext/UserState';

const Home = () => {
  const {getUserLogged,user} = useContext(UserContext)
  const { news, getAllNews } = useContext(NewsContext);
  const {getAllEvents,events} = useContext(EventContext)

  useEffect(() => {
    getAllNews();
    getAllEvents();
   getUserLogged();
  },[]);

  useEffect(() => {
    console.log(news);
    console.log(user);
    console.log(events);
  }, [news,user,events]);



  return (
    <div className="home-container">
      <div className="noticias-container">
        <h3>Noticias</h3>
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