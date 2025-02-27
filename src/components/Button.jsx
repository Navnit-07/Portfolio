import React from 'react'
import style from './Button.module.css'

function Button({text}) {
  return (
    <div>
        <button className= {style['button']}>{text}</button>
    </div>
  )
}

export default Button