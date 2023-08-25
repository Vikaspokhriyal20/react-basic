import React, { useState } from 'react'
import { useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
       setCount((count) => count + 1);
    }, 1000);
   
  },[count]);

    
  return (
    <>
        <main id='useeffect'>
        <h4>useEffect... {count} </h4>
        
      </main>
    </>
  )
}

export default UseEffect
