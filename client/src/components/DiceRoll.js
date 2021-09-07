import React, { useState } from 'react';

const DiceRoll = () => {

  let [number, setNumber] = useState("");
  let [image, setImage] = useState("./assets/images/blank.svg");

  const numberOptions = [
    {
      number: 1,
      image: './assets/images/one.svg',
    },
    {
      number: 2,
      image: './assets/images/two.svg',
    },
    {
      number: 3,
      image: './assets/images/three.svg',
    },
    {
      number: 4,
      image: "./assets/images/four.svg",
    },
    {
      number: 5,
      image: "./assets/images/five.svg",
    },
    {
      number: 6,
      image: "./assets/images/six.svg",
    }
  ]

  const rollDie = () => {
    let randomNumber = Math.floor(Math.random() * numberOptions.length)
    setNumber(numberOptions[randomNumber].number)
    setImage(numberOptions[randomNumber].image)
  }

  console.log(image)

  return (
    <div className="container">
      <div className="container-inner">
        <h1>You rolled a {number}</h1>
        <div className="image-container">
          <img src={image} />
        </div>
        <button onClick={rollDie}> Roll</button>
      </div>
    </div>
  )
}

export default DiceRoll
