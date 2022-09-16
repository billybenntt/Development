import React from "react";


function Navbar() {

    return (

        <nav className="dark">

            {/* Logo*/}
            <img className="nav--logo_icon" src="src/images/react-icon-small.png" alt="react-logo"/>
            <h3 className="nav--logo_text">ReactFacts</h3>


            {/*Toggler */}
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider">
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>


        </nav>

    )


}

export default Navbar
