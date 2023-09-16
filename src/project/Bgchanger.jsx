import React, { useState } from 'react'
import './bgchanger.css'

const Bgchanger = () => {
    const [color, setColor] = useState('white');

    return (
        <section id='bgchanger' style={{ backgroundColor: color }}>

            <h3>Background-Changer..!</h3> 

            <main id='navbar' style={{ backgroundColor: color }}>
                <button id='red' onClick={() => setColor('red')}>red</button>
                <button id='blue' onClick={() => setColor('blue')}>blue</button>
                <button id='pink' onClick={() => setColor('pink')}>pink</button>
                <button id='yellow' onClick={() => setColor('yellow')}>yellow</button>
                <button id='black' onClick={() => setColor('black')}>black</button>
                <button id='orange' onClick={() => setColor('orange')}>orange</button>
            </main>
        </section>
    )
}

export default Bgchanger

