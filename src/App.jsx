import React from 'react'
import First from './Basic-topic/First'
import './App.css'
import Props from './Basic-topic/Props'
import Event from './Basic-topic/Event';
import Conditional from './Basic-topic/Conditional';
import List from './Basic-topic/List';
import Forms from './Basic-topic/Forms';
import Index from './Basic-topic/Index';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import UseContext from './Hooks/context api/UseContext';
import UseRef from './Hooks/UseRef';
import UseReducer from './Hooks/UseReducer';
import Bgchanger from './project/Bgchanger';
import UseReducertwo from './Hooks/UseReducertwo';
import DateFetchingOne from './project/DateFetchingOne';
import DataFetchingTwo from './project/DataFetchingTwo';
import UseCallback from './Hooks/UseCallback';
import PasswordGen from './project/PasswordGen';




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
      <UseState />
      <UseEffect />
      <UseContext />
      <UseRef />
      <UseReducer />
      <UseReducertwo/>
      <Bgchanger />
      <DateFetchingOne />
      <DataFetchingTwo />
      <UseCallback />
      <PasswordGen/>
    </>
  )
}

export default App