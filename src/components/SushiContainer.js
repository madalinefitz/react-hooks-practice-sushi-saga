import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiData, eatSushi, decreaseBudget}) {
 
    const [fourSushi, setFourSushi] = useState(0)

    const nextFour = ()=>{
        setFourSushi(i => i + 4)
    }

    const theFour = sushiData.slice(fourSushi, fourSushi + 4)
    
    const sushiComponents= theFour.map((sushi) => {
        return(<Sushi id={sushi.id} name={sushi.name} price={sushi.price} image={sushi.img_url} eatSushi={eatSushi} decreaseBudget={decreaseBudget} />)
    })
  
    return (
    <div className="belt">
      {sushiComponents}
      <MoreButton nextFour={nextFour}/>
    </div>
  );
}

export default SushiContainer;
