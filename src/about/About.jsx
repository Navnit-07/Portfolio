import React from 'react'
import style from './About.module.css'
import Title from '../components/Title';

function About(){
    return(
        <>
            <div className={style['about-container']}>
                <Title text = 'About'/>
                <div className={style['about-content']}>
                    I'm Navnit, an explorer and lifelong learner who loves turning knowlege into real-world solutions. I don't always chase the most complex problems, but I focus on creating smart and effective strategies. My process involves deeply understanding projects, building detailed models, and bringing them to life through coding.
                    <br/>
                    <br/>
                    I enjoy pushing boundaries, even when it feels uncomfortable because that's how real learning happens. For me, persistency is key - I believe in never giving up, no matter the challenge.
                </div>
            </div>
        </>
    )
}

export default About;