import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [inputvalue, setInputvalue] = useState('');
  const count = useRef(0);
  

    useEffect(() => {
        count.current = count.current + 1;
    })
  
  return (
    <>
        <section id='useref'>
              <h4>useRef Hook...</h4>
              <p> </p>
        <input type="text" placeholder='Name...' id='inputbox' name='input' value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} />
        
        <input type="text" placeholder='Name...' id='inputbox' name='input' value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} />
              <p>Render count : {count.current}</p>
      </section>
    </>
  )
}

export default UseRef
