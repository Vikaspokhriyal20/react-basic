import React, { useState , useEffect } from 'react'



const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);



  return (
    <>
      <main id='useeffect'>
        <h4>useEffect... {count} </h4>
        <button id='adding' onClick={() => setCount((c) => c + 1)}>+</button>
        <h4>calculation : {calculation}</h4>
      </main>
    </>
  ) 
}

export default UseEffect
