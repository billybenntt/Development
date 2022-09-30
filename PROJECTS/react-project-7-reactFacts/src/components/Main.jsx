import React from "react";


function Main(props) {

    return (

        // Conditional Rendering
        <main className={props.darkMode ? "dark" : ""}>

            <h1 className="main--title">Fun Facts About React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
                                                                                                                                                                                                                                                                                     </main>
    )
}

export default Main
