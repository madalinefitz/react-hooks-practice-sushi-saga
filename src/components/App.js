import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis"

function App() {

  const [sushiData, setSushiData] = useState([])
  useEffect( () => {
    fetch(API)
      .then(r => r.json())
      .then(setSushiData)
    }, [])

  const [budget, setBudget] = useState(50)

  const decreaseBudget = (price) => {
    setBudget(budget>=price ? budget-price : budget)
  }
  
  
  return (
    <div className="app">
      <SushiContainer sushiData={sushiData} decreaseBudget={decreaseBudget}/>
      <Table budget={budget} sushiData={sushiData}/>
    </div>
  );
}

export default App;
