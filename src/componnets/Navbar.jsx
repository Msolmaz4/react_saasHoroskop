import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
      <div>
        <img src="logo.png" alt="" />
      </div>
      <div className = "links">
       <a href="#horoscope">Horoscope</a>
       <a href="#daily">Daily</a>
       <a href="#tarot">Tarot</a>
       <a href="#article">Article</a>
       <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar