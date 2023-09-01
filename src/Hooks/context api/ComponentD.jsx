import React, { useContext } from 'react'
import { CounterContext } from './UseContext'

const ComponentD = () => {
  const counter = useContext(CounterContext);
  return (
    <>
      <main id='componentD'>
        <strong>Component-D</strong>
        <p>Count: {counter}</p>
      </main>
    </>
  )
}

export default ComponentD
