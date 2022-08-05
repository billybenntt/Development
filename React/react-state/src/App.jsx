import React from "react"

export default function App() {

    let [current, setCurrent] = React.useState(0)

    const addStuff = () => {
         setCurrent(function (oldValue) {
             return oldValue + 1
         })
    }

    const removeStuff = () => {
         setCurrent(current => current - 1)
    }


    return (
        <div className="counter">
            <button className="counter--minus" onClick={removeStuff}>-</button>
            <div className="counter--count">
                <h1>{current}</h1>
            </div>
            <button className="counter--plus" onClick={addStuff}>+</button>
        </div>
    )
}
