import React from 'react'
import picture from "../assets/photo-grid.png"


const Hero = () => {
    return (
        <div className="hero">
            <img src={picture} alt="photogrid" className='hero--logo' />

            <div className="hero--experiences">
                <h1>Online Experience</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>

        </div>
    )
}




export default Hero;