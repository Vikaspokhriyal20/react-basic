import React from 'react'
import { useReducer } from 'react'


const countvalue = 0;

const counterapp = (state, action) => {
   
    
    switch (action) {
        case 'add':
            return state + 1;
        case 'subtract':
            return state - 1;
        case 'reset':
            return 0;

        default:
            break;
    }

}


const UseReducer = () => {
    const [state, dispatch] = useReducer(counterapp, countvalue);

    return (
        <>
            <section id='usereducer'>
                <h4>UseReducer Hook...</h4>
                <p>{state}</p>
                <button onClick={() => dispatch('add')}>ADD</button>
                <button onClick={() => dispatch('subtract')}>SUBTRACT</button>
                <button onClick={() => dispatch('reset')}>RESET</button>

            </section>
        </>
    )
}

export default UseReducer
