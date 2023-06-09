import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Buscar.scss';
import flech from '../../assets/icons/arrow-right.png';

import Menu from '../Menu/Menu';

const Buscar = () => {
    const [searchTerm, setSearchTerm] = useState('');

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
    <div className="body-buscar">
      <div className="navigation-bar">
        <div className="Busca">
          <Link to="/home">
            <img src={flech} alt="" />
          </Link>
          <h2>Buscar</h2>
        </div>
        <div className="content">
          <p>Encuéntralo en un ecosistema único</p>
        </div>
        <div className="buscar-bar">
          <input
            type="text"
            placeholder="  Buscar..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="buscar-in"
          />
        </div>
      </div>

      <div className="interests-container">
        <ul>
       
        </ul>
      </div>
      <Menu/>
    </div>
  );
};

export default Buscar;
