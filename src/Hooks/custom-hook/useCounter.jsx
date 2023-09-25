import { useState } from "react"


const useCounter = (initailState = 0, value) => {
    const [count, setCount] = useState(initailState);

    const increment = () => {
        setCount(prevCount => prevCount + value);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - value);
    }

    const reset = () => {
        setCount(initailState);
    }
    return [count, increment, decrement, reset]
}

export default useCounter
