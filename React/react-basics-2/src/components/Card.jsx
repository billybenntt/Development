import React from 'react'
import pictureCard from "../assets/katie-zaferes.png"
import pictureStar from "../assets/star.png"

function Card() {

    return (
        <div className="container">
            <div className="card">
                <img src={pictureCard} alt="picture" className='card--image' />
                <div className="card--info">
                    <img src={pictureStar} alt="picture" className='card--star' />
                    <span className='card--rating'>5.0 (6).USA</span>
                    <p className='card--title'>Life Lessons with Katie Saferes</p>
                    <span className='card--price'>From $136 / Person</span>
                </div>

            </div>
        </div>
    )
}


export default Card;