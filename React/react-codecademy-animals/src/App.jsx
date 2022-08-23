import React from "react";
import {animals} from "./animals.js";


// Iterate over Object and Produce an Array of Img with each object property
const images = []
for (const animal in animals) {
    images.push(<img
        key={animal}
        alt={animal}
        src={animals[animal].image}
        className='animal'
        role='button'
        aria-label={animal}
    />)
}


// Variables for Conditional Rendering

const title = "";
const showBackground = true;


// Conditional Rendering Elements
const background = (<img src="public/files/images/ocean.jpg" alt="ocean" className="background"/>);
const animalFacts = (<div>
        <h1>{title ? title : `Click an animal for a fun fact`}</h1>
        {showBackground && background}
    </div>

);

// Main App
function App() {
    return (<div className="App">
        <div className="animals">{images}</div>
        {animalFacts}
    </div>)
}

export default App
