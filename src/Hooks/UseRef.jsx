import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  const [inputvalue, setInputvalue] = useState('');
  
  const count = useRef(0);
  const inputElement = useRef();

  

  useEffect(() => {
    count.current = count.current + 1;
  }, [count.current])

  const focusInput = () => {
    inputElement.current.focus();
  }
  
  return (
    <>
        <section id='useref'>
              <h4>useRef Hook...</h4>
             
        <input type="text" placeholder='Name...' id='inputbox' name='input' value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} ref={inputElement}/>
        
        <input type="text" placeholder='Name...' id='inputbox' name='input' value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} />
        <p>Render count : {count.current}</p>

        <button onClick={focusInput}>Focus</button>
      </section>
    </>
  )
}

export default UseRef


