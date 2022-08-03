import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import memes from "./memesData.js"


const stackMeme = memes.data.memes.map(element => <img src={element.url} width="100px"></img>)
// const stackMeme = memesData.data.memes.map(element => element.name)




function App() {

  console.log(stackMeme);
  return (
    <div className="App">

      <Header />
      {stackMeme}
      <Meme />


    </div>
  )
}

export default App
