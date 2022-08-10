import React, {useState} from 'react'
import boxes from "./boxes.js";
import Box from "./Box.jsx";


export default function App() {

    const [current, setCurrent] = useState(boxes);


    // Generate Full List
    const boxStack = current.map(element => <Box title={element.id} isMarked={element.on} />)


    return (
        <main>
            {boxStack}
        </main>
    )
}
