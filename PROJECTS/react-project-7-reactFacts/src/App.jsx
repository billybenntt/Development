import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {

    // Initialize State
    const [darkTheme, setDarkTheme] = React.useState(0)

    // Declare the change State functions for Children
    const toggle = () => {
        setDarkTheme(prevState => {
            return !prevState
        })
    }

    return (<div className="container">

        {/* Pass Function to Change State to child component */}
        <Navbar darkMode={darkTheme} toggle={toggle}/>

        {/* Pass Variable with State to Prop */}
        <Main darkMode={darkTheme}/>

    </div>)
}

export default App
