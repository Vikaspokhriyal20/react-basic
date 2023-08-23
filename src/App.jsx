import React from 'react'
import First from './Basic-topic/First'
import './App.css'
import Props from './Basic-topic/Props'
import Event from './Basic-topic/Event';
import Conditional from './Basic-topic/Conditional';
import List from './Basic-topic/List';
import Forms from './Basic-topic/forms';
import Index from './Basic-topic/Index';
import UseState from './Hooks/UseState';



function App() {
  let productName = 'Dell Mouse';
  return (
    <>
      <First />
      <Props product={productName} />
      <Event />
      <Conditional />
      <List />
      <Forms />
      <Index />
      <UseState/>
    </>
  )
}

export default App