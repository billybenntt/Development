import React from "react";




function App() {
    console.log("Full Component Load")
    const [data, setData] = React.useState('posts')
    const [count, setCount] = React.useState(1)


    // The First Parameter is An Anonymous Function that runs the External Action
    // The Second Parameter is a dependency Array, if Empty the External Action will run only once upon initial render
    // Any value declared in the array will make the function run upon changes on the values of the dependencies


    React.useEffect(() => {
        console.log("Load Effect")
        const apiData = `https://swapi.dev/api/people/${count}`
        // Updating the API State
        fetch(apiData).then(res => res.json()).then(data => {
            setData(data)
        })
    }, [count])




    return (<div className="App">
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <h2>The Character is {count}</h2>
        <button onClick={() => setCount(prevState => (prevState + 1))}>Next</button>

    </div>)
}

export default App
