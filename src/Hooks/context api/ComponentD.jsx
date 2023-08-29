import React, { useContext } from 'react'
import { CounterContext } from './UseContext'

const ComponentD = () => {
  const counter = useContext(CounterContext);
  return (
    <>
      <main id='componentD'>
        <h4>Component-D</h4>
        <p>Count: {counter}</p>
      </main>
    </>
  )
}

export default ComponentD
