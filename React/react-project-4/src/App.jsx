import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import memePack from "./memesData.js"
// const stackMeme = memePack.data.memes.map(element => <p src={element.url} ></p>)
// const stackMeme = memesData.data.memes.map(element => element.name)



function App() {

  const result = React.useState("Hello")
  console.log(result)
  return (
    < div className="App" >
      <Header />
      <Meme />
    </div >
  )
}
export default App
