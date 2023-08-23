import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";


const eyeColorMapper = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby
}

function BabyHog(props) {
  const [weight, setWeight] = useState(120)
  function handleChangeWeight(e) {
    const newWeight = e.target.name === "+" ? weight + 10 : weight - 10;
    setWeight(newWeight)


  }

  return (
    <li className="hogbabies">
      <h1>{props.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby:{props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[props.eyeColor]}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
