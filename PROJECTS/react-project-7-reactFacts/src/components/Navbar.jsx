import React from "react";


function Navbar(props) {

    return (

        <nav className={props.darkMode ? "dark" : ""}>

            {/* Logo*/}
            <img className="nav--logo_icon" src="src/images/react-icon-small.png" alt="react-logo"/>
            <h3 className="nav--logo_text">ReactFacts</h3>


            {/*Toggler */}
            <div className="toggler">
                <p className="toggler--light">Light</p>


                {/* Use Event Listener from parent component */}
                <div className="toggler--slider" onClick={props.toggle}>
                    <div className="toggler--slider--circle"></div>
                </div>


                <p className="toggler--dark">Dark</p>
            </div>


        </nav>

    )


}

export default Navbar
