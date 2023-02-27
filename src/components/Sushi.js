import React, { useState } from "react";

function Sushi({key, name, price, image, decreaseBudget}) {
    const[eatenSushi, setEatenSushi] = useState(false)
    const eatSushi = ()=>{
      setEatenSushi(true) 
    } 

    const budgetChange = ()=>{
      decreaseBudget(price)
    }
      

  return (
    <div className="sushi" >  
      <div className="plate" onClick={eatSushi && budgetChange} >
        {eatenSushi ? null : (
          <img
            key={key}
            src= {image}
            alt={name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
