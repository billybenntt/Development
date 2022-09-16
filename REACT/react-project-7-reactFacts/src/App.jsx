import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {

    const [initialState , setInitialState] = React.useState(0)


    return (
        <div className="container">
            <Navbar/>
            <Main/>

        </div>)
}

export default App
