import React from 'react'
import style from './Title.module.css'

function Title({text}) {
  return (
    <div>
        <h1 className={style['about-title']}>{text}</h1>
    </div>
  )
}

export default Title