import React from 'react'
import style from './Navbar.module.css'
import logo2 from '../assets/Logo.png'
function Navbar() {
  return (
    <>
        <div className={style['nav-container']}>
          <div className={style['logo-container']}>
            <img src={logo2} alt="Navnak" />
          </div>
          <div className= {style['nav-options']}>
            <ul>
              <li className={style['option']}>Home</li>
              <li className={style['option']}>About</li>
              <li className={style['option']}>Projects</li>
              <li className={style['option']}>Contact</li>
              <li className={style['option']}>Resume</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Navbar