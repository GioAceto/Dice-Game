import React, { useState } from 'react';

const DiceRoll = () => {

  let [number, setNumber] = useState("");
  let [image, setImage] = useState("./assets/images/blank.svg");
  let [opNumber, setOpNumber] = useState("");
  let [opImage, setOpImage] = useState("./assets/images/blank.svg");
  let [resultText, setResultTest] = useState("");
  let [opScore, setOpScore] = useState(0);
  let [yourScore, setYourScore] = useState(0);

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

  const rollDice = () => {
    let yourNumber = Math.floor(Math.random() * numberOptions.length)
    let opNumber = Math.floor(Math.random() * numberOptions.length)
    setNumber(numberOptions[yourNumber].number)
    setImage(numberOptions[yourNumber].image)
    setOpNumber(numberOptions[opNumber].number)
    setOpImage(numberOptions[opNumber].image)
  }

  console.log(image)

  return (
    <div className="container">
      <div className="score-board">
        <h2>Score</h2>
        <div className="score-board-inner">
          <div className="op-container">
            <h3>Opponent</h3>
            <span>{opScore}</span>
          </div>
          <div className="you-container">
            <h3>You</h3>
            <span>{yourScore}</span>
          </div>
        </div>
      </div>
      <div className="container-inner">
        <div className="container-inner-top">
          <h1>Opponent rolled a {opNumber}</h1>
          <div className="image-container">
            <img src={opImage} />
          </div>
        </div>
        <div className="container-inner-middle">
          <h2>{resultText}</h2>
        </div>
        <div className="container-inner-bottom">
          <h1>You rolled a {number}</h1>
          <div className="image-container">
            <img src={image} />
          </div>
          <button onClick={rollDice}> Roll</button>
        </div>
      </div>
    </div>
  )
}

export default DiceRoll
