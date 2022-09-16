import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {

    const [darkTheme , setDarkTheme] = React.useState(0)

    // Declare the change State function
    const toggle = (prop) => {
    }

    return (
        <div className="container">
            <Navbar/>

            {/* Pass the function */}
            <Main toggle={toggle}/>

        </div>)
}

export default App
