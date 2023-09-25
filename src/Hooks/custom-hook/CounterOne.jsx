import React from 'react'
import './customhook.css'
import useCounter from './useCounter'

const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(0 , 1);
  return (
    <>
      <section id='usecounter'>
        <h3>Custom Hook {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </>
  )
}

export default CounterOne
