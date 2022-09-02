import React from "react"

export default function WindowTracker() {

    // Initialize State with initial Width in the form of an object
    const [dimensions, setDimensions] = React.useState({width: window.innerWidth})


    // Update the Width State whenever triggered
    const handleResize = () => {
        setDimensions(prevState => {
            return {
                ...prevState, width: window.innerWidth
            }
        })
    }

    // Trigger the Event Listener from External Event
    React.useEffect(() => {
        window.addEventListener("resize", handleResize)


    }, [])


    return (<h1>Window width: {dimensions.width}</h1>)
}
