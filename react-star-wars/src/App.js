import { useEffect, useState } from 'react'
import Shiplist from './components/Shiplist'
import './App.css'

function App() {
  const [shipName, setShipName] = useState([])
  
  const getAllStarShips = async () => {
    const response = await fetch('https://swapi.dev/api/starships/')
    const data = await response.json()
    setShipName(data.results)
  }
 
  useEffect(() => {
    getAllStarShips()
  },[])
console.log(shipName)
  return (
    <div >
      <h1>Star Ships</h1>

      <div>
        <Shiplist datalist={shipName} />
      </div>
    </div>
  )
}

export default App
