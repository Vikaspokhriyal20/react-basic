import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0;
    },[counterOne])
    return (
        <>
            <section id='usememo'>
                <h4>Usememo hook...</h4>
                <button onClick={incrementOne}>count {counterOne}</button>
                <button onClick={incrementTwo}>count {counterTwo}</button>
                <p>{isEven ? 'Even' : 'Odd'}</p>

            </section>
        </>
    )
}

export default Usememo
