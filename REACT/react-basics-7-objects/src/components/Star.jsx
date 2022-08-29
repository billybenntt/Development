import React from "react";


const Star = (props) => {

    let result = props.isFilled ? "star-filled.png" : "star-empty.png";

    return (
        <img src={`../public/images/${result}`} className="card--favorite" alt={"Image"} onClick={props.handleClick}/>
    )
}

export default Star;