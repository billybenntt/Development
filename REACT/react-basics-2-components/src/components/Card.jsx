import React from 'react'
import pictureCard from "../assets/katie-zaferes.png"
import pictureStar from "../assets/star.png"

function Card(props) {

    const { name, price } = props;


    return (
        <div className="card--container">
            <div className="card">
                <img src={pictureCard} alt="picture" className='card--image' />
                <div className="card--info">
                    <img src={pictureStar} alt="picture" className='card--star' />
                    <span className='card--rating'>5.0 (6).USA</span>
                    <p className='card--title'>Life {name} with {name} Saferes</p>
                    <span className='card--price'>From ${price} / Person</span>
                </div>

            </div>
        </div>
    )
}


export default Card;