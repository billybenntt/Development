import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import locations from "./data/data"



const cardStack = locations.map(element => <Card key={element.id}{...element} />)


function App() {

  return (
    <div className="App">
      <Navbar />

      <section className="catalog">
        {cardStack}
      </section>
    </div>
  )
}

export default App
