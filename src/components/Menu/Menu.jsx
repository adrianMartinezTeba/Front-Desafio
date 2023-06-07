import React from 'react'


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
        <img src={search} alt="" />
        <img src={vector} alt="" />
        <img src={calendar} alt="" />
        </div>
        </nav>
    </div>
  )
}

export default Menu