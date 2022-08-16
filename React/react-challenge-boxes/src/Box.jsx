import React from "react";


export default function Box(prop) {


    const styles = {
        backgroundColor: prop.on ? "dodgerBlue" : "red",
    }



    return (
        <div className="box" style={styles} onClick={prop.toggle} >
            <p>{prop.id}</p>
        </div>

    )

}