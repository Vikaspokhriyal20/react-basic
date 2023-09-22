import React, { useCallback, useEffect, useRef, useState } from 'react'
import './bgchanger.css'

const PasswordGen = () => {
    const [length, setLength] = useState(8);
    const [totalnum, setTotalnum] = useState(false);
    const [totalchar, setTotalchar] = useState(false);
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if (totalnum) {
            str += '0123456789';
        }
        if (totalchar) {
            str += '!@#$%&*{}[]+-*~_`';
        }
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass);

    }, [length, totalchar, totalnum, setPassword])


    useEffect(() => {
        passwordGenerator();
    }, [length, totalchar, totalnum, passwordGenerator])


    const copyToclipboard = useCallback(() => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 20);
    }, [password])


    return (
        <>
            <main id='passwordmaker'>
                <h3>Password Generator</h3>
                <input type="text" id='inputbox' value={password} ref={passwordRef} readOnly />

                <div className="btn-container">

                    <div className="range">
                        <input type="range" id="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
                        <label htmlFor="range">Lenght : {length}</label>
                    </div>

                    <div className="numbercheckbox">
                        <input type="checkbox" id="check" defaultChecked={totalnum} onChange={() => {
                            setTotalnum((prev) => !prev)
                        }} />
                        <label htmlFor="number">Numbers</label>
                    </div>

                    <div className="charcheckbox">
                        <input type="checkbox" id="check" defaultChecked={totalchar} onChange={() => {
                            setTotalchar((prev) => !prev)
                        }} />
                        <label htmlFor="char">Charactors</label>
                    </div>

                </div>
                <button id='copy-btn' onClick={copyToclipboard}>copy</button>
            </main>
        </>
    )

}

export default PasswordGen
