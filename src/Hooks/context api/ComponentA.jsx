import React, { useContext } from 'react'
import { UserContext, SubjectContext, CounterContext } from './UseContext'


const ComponentA = () => {
  const counter = useContext(CounterContext);
  return (
    <>
      <section id='componentA'>
        <h4>Component-A</h4>
        <p>Count: {counter}</p>
      </section>
    </>
  )
}

export default ComponentA
