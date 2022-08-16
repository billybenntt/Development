import React, {useState} from 'react'
import boxes from "./boxes.js";
import Box from "./Box.jsx";


export default function App() {

    const [current, setCurrent] = useState(boxes);


    function toggle(id) {
        setCurrent(prevState => {
            return prevState.map(obj => {
                    return obj.id === id ? {...obj, on: !obj.on} : {...obj}
                }
            )
        })
    }

    // Generate Full List
    const boxStack = current.map(element => <Box key={element.id} on={element.on} toggle={() => toggle(element.id)}/>)


    return (
        <main>
            {boxStack}
        </main>
    )
}
