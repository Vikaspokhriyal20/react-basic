import React from 'react'
import First from './Basic-topic/First'
import './App.css'
import Props from './Basic-topic/Props'
import Event from './Basic-topic/Event';
import Conditional from './Basic-topic/Conditional';


function App() {
  let productName = 'Dell Mouse';
  return (
    <>
      <First />
      <Props product={productName} />
      <Event />
      <Conditional/>
    </>
  )
}

export default App