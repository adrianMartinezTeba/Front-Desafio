import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Menu.scss'


import home from '../../assets/icons/home.png'
import search from '../../assets/icons/search.png'
import vector from '../../assets/icons/vector.png'
import calendar from '../../assets/icons/calendar-dates.png'
import { UserContext } from '../../context/UserContext/UserState';

const Menu = () => {
  const {getUserLogged,user} = useContext(UserContext)
  useEffect(()=>{
    getUserLogged()
    
        },[])
        
    useEffect(() => {
      
    },[user]);
  
  return (
    <div>
        <nav className="navbar">
            <div className='left-elements'>
            <Link to="/" className="nav-link" >
            <img src={home} alt="" />
            </Link>
            </div>
       
        <div className='right-elements'>
        <Link to="/profile" className="nav-link" >
        <div className="nav-image-container">
        <img src={user.imageUrl} alt="" width={'50px'}/>
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