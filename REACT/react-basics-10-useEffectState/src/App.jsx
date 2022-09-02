import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {

   //  initialize state with true value
   const [show, setShow] =  React.useState(true)

    const changeStatus = () => {
     //   Standard Toggle State Function
     setShow(prevState => {
         return !prevState
     })
        console.log(show)
    }

    return (
        <div className="container">

            {/* Attach event Listener*/}
            <button onClick={changeStatus}>  {show ? "Unmount" : "Mount"  } WindowTracker       </button>

            {/* Only Show with Show is true*/}
            { show && <WindowTracker/>}
        </div>
    )
}
