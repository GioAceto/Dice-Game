import React, { useState } from 'react';

const DiceRoll = () => {

  let [number, setNumber] = useState("")

  const numberOptions = [
    {
      number: 1,
      image: "test1"
    },
    {
      number: 2,
      image: "test2"
    },
    {
      number: 3,
      image: "test3"
    },
    {
      number: 4,
      image: "test4"
    },
    {
      number: 5,
      image: "test5"
    },
    {
      number: 6,
      image: "test5"
    }
  ]

  const rollDie = () => {
    let randomNumber = Math.floor(Math.random() * numberOptions.length)
    return numberOptions[randomNumber].number
  }

  return (
    <div className="container">
      <h1>You rolled a {number}</h1>
      <div className="image-container">

      </div>
      <button onClick={() => setNumber(rollDie)}>Roll</button>
    </div>
  )
}

export default DiceRoll
