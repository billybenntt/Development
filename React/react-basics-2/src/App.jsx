import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="subcontainer">
        <Card name="juas" price="1200" />
        <Card name="gringa" price="2020" />
      </div>


    </div>
  )
}

export default App
