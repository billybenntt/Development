import React from "react"
import JokesData from "./Jokes.js"
import Jokes from "./Jokes.jsx"

const jokesComp = JokesData.map(element => <Jokes setup={element.setup} punchline={element.punchline} />)


function App() {

  return (
    <div className="App">
      {jokesComp}
    </div>
  )
}

export default App


