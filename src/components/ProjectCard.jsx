import React from 'react'
import style from './ProjectCard.module.css'

function ProjectCard({text, img}) {
  return (
    <div className={style['project-card']}>
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  )
}

export default ProjectCard