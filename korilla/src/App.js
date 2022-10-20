import { useState } from 'react'
import './App.css';
import Receipts from './components/Receipts';

const data = [
  {
    person: "Karolin",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Korchata",
      cost: 22,
    },
    paid: false,
  },
  {
    person: "Mark",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19,
    },
    paid: false,
  },
  {
    person: "Matt",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20,
    },
    paid: true,
  },
]; 
function App() {

  const [receipt, setReceipt] = useState(data);
  function updatePaid(person) {
    
   const newReceipt= receipt.map(item => {
      if (item.person === person) {
        return {...item, paid: true} 
      } else {
        return item
      }
      }
   )
    setReceipt(newReceipt);
console.log(newReceipt);
  }
  
  
  return (
    <div className="top">
      <h1>Korilla</h1>
      <Receipts receipts={receipt} updatePaid={updatePaid} />
    </div>
  );
}

export default App;
