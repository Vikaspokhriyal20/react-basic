import React, { useState } from 'react'

const UseCallback = () => {
    const [firstnum, setFirstnum] = useState();
    const [secoundnum, setSecoundnum] = useState();
    const [total,setTotal] = useState();
  
    const handleOne = (e) => {
        setFirstnum(e.target.value);
    }
    const handleTwo = (e) => {
        setSecoundnum(e.target.value);
    }



    const handleAdding = () => {
        setTotal(firstnum+secoundnum);
    }
    
    const handleSubtract = () => {
        setTotal(firstnum - secoundnum);
    }


    return (
        <>
            <section id='usecallback'>
                <h4>UseCallback...</h4>
                <p>Total - {total}</p>
                <input type="text" id='inputbox' placeholder='Enter the Number' value={firstnum} onChange={handleOne} />
                <input type="text" id='inputbox' placeholder='Enter the Number' value={secoundnum} onChange={handleTwo} />
                <button onClick={handleAdding}>Add</button>
                <button onClick={handleSubtract}>Sub</button>
            </section>
        </>
    )
}

export default UseCallback
