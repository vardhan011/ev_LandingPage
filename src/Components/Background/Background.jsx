import React from 'react'
import './Background.css'


const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='background fade-in ' autoPlay loop muted>
                <source src='/video1.mp4' type="video/mp4" />
            </video>
        )
    }
    else if (heroCount === 0) {
        return <img src='/image1.png' className='background fade-in' alt='' />

    }
    else if (heroCount === 1) {
        return <img src='/image1.png' className='background fade-in' alt='' />

    }
    else if (heroCount === 2) {
        return <img src='/image2.png' className='background fade-in' alt='' />

    }
}

export default Background