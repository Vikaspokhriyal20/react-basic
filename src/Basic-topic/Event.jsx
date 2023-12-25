import React from 'react'

const Event = () => {

  const greet = () => {
    console.log('Hello User 👋😊');
  }
  return (
    <>
      <section>
        <button onClick={greet}>click</button>
      </section>
    </>
  )
}

export default Event

