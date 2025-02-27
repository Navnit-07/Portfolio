import React from 'react'
import style from './TechCard.module.css'

function TechCard({text, shadowColor, logo}) {
  return (
    <div className={style['tech-card']} 
              style={shadowColor ? { boxShadow: `0 10px 10px -5px ${shadowColor}` } : {}}
          
          
    >
        <img src={logo} alt={text} className={style['logo']}/>   
        <p>{text}</p>
    </div>
  )
}

export default TechCard