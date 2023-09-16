import React from 'react'
import { useReducer } from 'react'


const initailState = 0;

const reducer = (state, action) => {
   
    
    switch (action) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return initailState;
        default:
            return state 
   
    }
}


const UseReducer = () => {
    const [counterOne, dispatch] = useReducer(reducer, initailState);
    const [counterTwo, dispatchTwo] = useReducer(reducer, initailState);

    return (
        <>
            <section id='usereducer'>
                <h4>UseReducer Hook...</h4>
                <p>{counterOne}</p>
                <button onClick={() => dispatch('INCREMENT')}>ADD</button>
                <button onClick={() => dispatch('DECREMENT')}>SUBTRACT</button>
                <button onClick={() => dispatch('RESET')}>RESET</button>

                <p>{counterTwo}</p>
                <button onClick={() => dispatchTwo('INCREMENT')}>ADD</button>
                <button onClick={() => dispatchTwo('DECREMENT')}>SUBTRACT</button>
                <button onClick={() => dispatchTwo('RESET')}>RESET</button>
  
            </section>
        </>
    )
}

export default UseReducer
