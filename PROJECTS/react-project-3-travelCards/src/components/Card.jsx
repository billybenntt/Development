import React from 'react'

export default function Card(props) {
    console.log(props);

    return (
        <div className="card">
            <img src={`../../public/${props.imageURL}`} alt="japan" className='card--image' />
            <div className="card--info">
                <div className="card--location">
                    <img src="../../public/marker.svg" alt="marker" className='card--marker' />
                    <span className='card--country'>{props.location} </span>
                    <a href={props.googleMap} target="_blank">View on Google maps</a>
                </div>
                <h1 className='card--title'>{props.title}</h1>
                <h3 className='card--date'>{props.startDate} - {props.endDate}</h3>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
    )
}


