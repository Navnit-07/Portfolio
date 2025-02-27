import React from 'react'
import style from './Portfolio.module.css'
import ProjectCard from '../components/ProjectCard'
import Title from '../components/Title'
import Project1 from '../assets/project1.jpg'
import Project2 from '../assets/project2.jpg'
import Project3 from '../assets/project3.jpg'
import Project4 from '../assets/project4.jpg'
import Project5 from '../assets/project5.jpg'
import Project6 from '../assets/project6.jpg'

function Portfolio() {
  return (
    <>
        <div className={style['portfolio-container']}>
            <Title text='Portfolio'/>
            <div className={style['card-container']}>
            <ProjectCard text = 'Campus Navigation System' img={Project1}/>
            <ProjectCard text = 'MedCrypta'img={Project2}/>
            <ProjectCard text = 'Focus On Today' img={Project3}/>
            <ProjectCard text = 'Recipe Blog' img={Project4}/>
            <ProjectCard text = 'Jerry Escapes (Game)' img={Project5}/>
            <ProjectCard text = 'School Website' img={Project6}/>
            </div>
        </div>
    </>
  )
}

export default Portfolio