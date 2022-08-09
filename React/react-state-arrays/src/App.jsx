import React from 'react';

export default function App() {

    const currenStat = ["Thing 1", "Thing 2"]
    const [thingsArray, setCurrent] = React.useState(currenStat)
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={() => setCurrent(prevState => [...prevState, `Thing ${thingsArray.length + 1}`])}>Add Item</button>
            {thingsElements}
        </div>
    )
}
