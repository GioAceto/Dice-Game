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
      <div className="score-board">
        <h2>Score</h2>
        <div className="score-board-inner">
          <div className="op-container">
            <h3>Opponent</h3>
          </div>
          <div className="you-container">
            <h3>You</h3>
          </div>
        </div>
      </div>
      <div className="container-inner">
        <div className="container-inner-top">
          <h1>Opponent rolled a {number}</h1>
          <div className="image-container">
            <img src={image} />
          </div>
        </div>
        <div className="container-inner-middle">

        </div>
        <div className="container-inner-bottom">
          <h1>You rolled a {number}</h1>
          <div className="image-container">
            <img src={image} />
          </div>
          <button onClick={rollDie}> Roll</button>
        </div>
      </div>
    </div>
  )
}

export default DiceRoll
