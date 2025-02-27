import React from 'react'
import style from './Experience.module.css'
import TechCard from '../components/TechCard'
import Title from '../components/Title'

import htmlLogo from '../assets/htmlLogo.png'
import cssLogo from '../assets/CSSLogo.png'
import jsLogo from '../assets/JSLogo.png'
import reactLogo from '../assets/reactLogo.png'
import gitLogo from '../assets/githubLogo.jpeg'

function Experience() {
  return (
    <div className={style['experience-container']}>
        <Title text='Experience'/>
        <div className={style['tech-card-container']}>
            <TechCard text = 'HTML' shadowColor = '#e44d26' logo={htmlLogo}/>
            <TechCard text = 'CSS' shadowColor = '#1572b6' logo={cssLogo}/>
            <TechCard text = 'JS' shadowColor = '#f7df1e' logo={jsLogo}/>
            <TechCard text = 'React' shadowColor = '#00d8ff' logo={reactLogo}/>
            <TechCard text = 'GitHub' shadowColor = '#010101' logo={gitLogo}/>
    </div>
    </div>
  )
}

export default Experience