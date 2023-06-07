import React from 'react'
import { Link } from 'react-router-dom';

import './Menu.scss'


import home from '../../assets/icons/home.png'
import search from '../../assets/icons/search.png'
import vector from '../../assets/icons/vector.png'
import calendar from '../../assets/icons/calendar-dates.png'



const Menu = () => {
  return (
    <div>
        <nav className="navbar">
            <div className='left-elements'>
            <img src={home} alt="" />
            </div>
       
        <div className='right-elements'>
        <Link to="/buscar" className="nav-link" >
        <div className="nav-image-container">
        <img src={search} alt="" />
        </div>
        </Link>
        <Link to="/vector"  className="nav-link">
        <div className="nav-image-container">
        <img src={vector} alt="" />
        </div>
        </Link>
        <Link to="/calendar" className="nav-link" >
        <div className="nav-image-container">
        <img src={calendar} alt="" />
        </div>
        </Link>
        </div>
        </nav>
    </div>
  )
}

export default Menu