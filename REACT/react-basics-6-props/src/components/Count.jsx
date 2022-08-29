import React from "react"

export default function Count(prop) {
    console.log("Count component loaded")

    return (
        <div className="counter--count">
            <h1>{prop.number}</h1>
        </div>
    )
}
