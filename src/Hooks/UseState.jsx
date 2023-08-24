import React, { useState } from 'react'
import './style.css'

const UseState = () => {
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    color: 'Yellow',
    year: 1964
  });

  const increament = () => {
    setCount((count) => count + 1);
  }

  const changeColor = () => {
    setCar(previousState => {
      return {...previousState , color:'red', year:2021}
    })
  }

   
  return (
    <>
        <section className='hook-1'>
        <h4>useState Hook...</h4>
        <h4>Count: {count}</h4>
        <button onClick={increament}>click me</button>

        <h4>This is my {car.brand} {car.model} in {car.color} color since {car.year}!</h4>
        <button onClick={changeColor}>change color</button>
      </section>
    </>
  )
}

export default UseState
