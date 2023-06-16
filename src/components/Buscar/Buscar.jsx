import React, { useContext, useEffect, useState } from 'react';

import './Buscar.scss';


import Menu from '../Menu/menu';
import { UserContext } from '../../context/UserContext/UserState';
import { EventContext } from '../../context/EventContext/EventState';
import { NewsContext } from '../../context/NewContext/NewState';

const Buscar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {events,getAllEvents} = useContext(EventContext);
    const { user,users, getUserLogged,getAllUsers } = useContext(UserContext);
    const {news,getAllNews} = useContext(NewsContext)
    useEffect(()=>{
getAllEvents(),
getAllUsers(),
getAllNews(),
getUserLogged()

    },[])
    useEffect(()=>{

    },[events,user,users,news])
  const handleSearch = () => {
    // Lógica para realizar la búsqueda con el término ingresado
    console.log('Realizar búsqueda:', searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
   
      <div className="navigation-bar">
      
          <input
            type="text"
            placeholder="     Buscar..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="buscar-in"
          />
      <Menu/>
    </div>
  );
};

export default Buscar;
