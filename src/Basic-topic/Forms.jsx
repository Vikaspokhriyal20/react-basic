import React, { useState } from 'react'

const Forms = () => {
    const [name, setName] = useState('');
    const [mycar, setMycar] = useState('');

    const handleCar = (e) => {
        setMycar(e.target.value);
    }


    return (
        <>
            <main id='input-form'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Age..' />

                {
                    name >= 18 ? <p>Hello youn Boy</p> : <p>opps you are not younger</p>
                }
            </main>

            <main id='selectcar'>
                <select value={mycar} onChange={handleCar}>
                    <option value="disabled" disabled>select car..</option>
                    <option value="ford">Ford</option>
                    <option value="range-rover">range-rover</option>
                    <option value="audi">audi</option>
                    <option value="mustang">mustang</option>
                    <option value="defender">defender</option>
                    <option value="creata">creata</option>
                    <option value="tigor">tigor</option>
                    <option value="grand-vitara">grand-vitara</option>
                </select>
                {
                    mycar ? <p>Your selected car is - <kbd className='carname'>{mycar}</kbd></p> : null
                }
            </main>

        </>
    )
}

export default Forms
