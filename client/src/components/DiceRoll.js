import React, { useState } from 'react';

const DiceRoll = () => {

  let [number, setNumber] = useState("");
  let [image, setImage] = useState("");

  const numberOptions = [
    {
      number: 1,
      image: "test1",
      id: 1
    },
    {
      number: 2,
      image: "test2",
      id: 2
    },
    {
      number: 3,
      image: "test3",
      id: 3
    },
    {
      number: 4,
      image: "test4",
      id: 4
    },
    {
      number: 5,
      image: "test5",
      id: 5
    },
    {
      number: 6,
      image: "test5",
      id: 6
    }
  ]

  const rollDie = () => {
    let randomNumber = Math.floor(Math.random() * numberOptions.length)
    setNumber(numberOptions[randomNumber].number)
    setImage(numberOptions[randomNumber].image)
  }

  return (
    <div className="container">
      <div className="container-inner">
        <h1>You rolled a {number}</h1>
        <div className="image-container">
          <div>{image}</div>
        </div>
        <button onClick={rollDie}> Roll</button>
      </div>
    </div>
  )
}

export default DiceRoll
