import React from 'react'
import './Hero.css'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>

            <div className='hero-explore'>
                <p>Explore the features</p>
                <img src="/arrow_btn.png" alt="arrow" />
            </div>

            <div className='hero-dots-wrapper'>
                <ul className='hero-dots'>
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
            </div>

            <div className='hero-play'>
                <img
                    onClick={() => setPlayStatus(!playStatus)}
                    src={playStatus ? '/pause_icon.png' : '/play_icon.png'}
                    alt={playStatus ? "Pause" : "Play"}
                />
            </div>
        </div>
    )
}

export default Hero
