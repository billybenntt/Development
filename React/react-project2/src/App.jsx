import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import cardInfo from "../data"



function App() {

  const cardStack = cardInfo.map(element => <Card key={element.id} {...element} />)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardStack}
      </section>
    </div>
  )
}

export default App
