import React from 'react'
import style from './Hero.module.css'
import imageMe from '../assets/Navank_img.png'
import Button from '../components/Button';

function Hero(){

    return(
        <>
            <div className={style['hero-section-container']}>
                <div className={style['title-container']}>
                    <h1 className={style['title']}>Hi I am Navnit</h1>
                    <h3 className={style['subtitle']}>A Developer Who Loves to Develop </h3>
                    <Button text = 'See My Work'/>
                </div>
                <div className={style['image-container']}>
                    <img src={imageMe} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Hero;