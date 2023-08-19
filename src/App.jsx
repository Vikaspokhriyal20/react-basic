import React from 'react'
import First from './Basic-topic/First'
import './App.css'
import Props from './Basic-topic/Props'


function App() {
  let user = 'THIS MESSAGE FROM APP.JSX';
  return (
    <>
      <First />
      <Props user={user} />
    </>
  )
}

export default App