import React from "react"


function App() {

  const writeToConsole = () => {
    console.log("hi")
  }

  const hoverToConsole = () => {
    console.log("HelloMouse")
  }


  return (

    <div className="container">
      <img src="https://picsum.photos/640/360" alt="Judas" onMouseLeave={hoverToConsole} />
      <button onClick={writeToConsole}>Click me</button>
    </div>

  )

}

export default App
