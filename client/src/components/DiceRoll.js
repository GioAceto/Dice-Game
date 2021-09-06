import React from 'react'

const DiceRoll = () => {

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
    }
  ]

  return (
    <div className="container">
      <h1>You rolled a </h1>
      <div className="image-container">

      </div>
      <button>Roll Die</button>
    </div>
  )
}

export default DiceRoll
