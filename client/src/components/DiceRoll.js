import React, { useState } from 'react';

const DiceRoll = () => {

  let [number, setNumber] = useState("");
  let [image, setImage] = useState("");

  const numberOptions = [
    {
      number: 1,
      image: '../images/one.svg',
      id: 1
    },
    {
      number: 2,
      image: '../images/two.svg',
      id: 2
    },
    {
      number: 3,
      image: '../images/three.svg',
      id: 3
    },
    {
      number: 4,
      image: "../images/four.svg",
      id: 4
    },
    {
      number: 5,
      image: "../images/five.svg",
      id: 5
    },
    {
      number: 6,
      image: "../images/six.svg",
      id: 6
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
