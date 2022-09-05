import React from "react"

export default function WindowTracker() {

    // Initialize State with initial Width in the form of an object
    const [dimensions, setDimensions] = React.useState(window.innerWidth)

    // Update the Width State whenever triggered
    const handleResize = () => {
        setDimensions(window.innerWidth)
    }

    // Trigger the Event Listener from External Event
    React.useEffect(() => {

        // Run when component is mounted
        window.addEventListener("resize", handleResize)

        // Run When the component is unmounted
        return () => {
            console.log("Cleanup")
             window.removeEventListener("resize", handleResize)
        }


    }, [])


    return (<h1>Window width: {dimensions}</h1>)
}
