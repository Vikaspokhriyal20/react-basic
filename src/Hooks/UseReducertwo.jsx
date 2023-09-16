import React, { useReducer } from 'react'

const initailState = {
    firstCounter: 0,
    secountCounter: 10
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state ,  firstCounter: state.firstCounter + action.value }
        case 'DECREMENT':
            return { ...state, firstCounter: state.firstCounter - action.value }
            case 'INCREMENT2':
                return { ...state ,  secountCounter: state.secountCounter + action.value }
            case 'DECREMENT2':
                return { ...state ,  secountCounter: state.secountCounter - action.value }
        case 'RESET':
            return initailState;
        default:
            return state

    }
}

const UseReducertwo = () => {
    const [count, dispatch] = useReducer(reducer, initailState);

    return (
        <>
            <main id='usereducer'>
                <h2>{count.firstCounter}</h2>
                <p>{count.secountCounter}</p>
                <button onClick={() => dispatch({ type: 'INCREMENT', value: 2 })}>Add</button>
                <button onClick={() => dispatch({ type: 'DECREMENT', value: 2 })}>minus</button>
                <button onClick={() => dispatch({ type: 'INCREMENT2', value: 5 })}>Add</button>
                <button onClick={() => dispatch({ type: 'DECREMENT2', value: 5 })}>minus</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
            </main>      
            
        </>
    )
}

export default UseReducertwo
