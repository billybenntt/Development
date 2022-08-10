import React from "react";


export default function Box(prop) {

    const [currentLocal, setCurrentLocal] = React.useState(prop.isMarked)

    const styles = {
        backgroundColor: currentLocal ? "dodgerBlue" : "red",
    }


    const changeState = () => {
        setCurrentLocal(prevState => {
            return !prevState
        })
    }


    return (
        <div className="box" style={styles} onClick={changeState}>
            <p>{prop.title}</p>
        </div>

    )

}