import React from 'react'

const UserInput = () => {
    return (
        <>
            <section id="userinput">
                <h2>User Input form..</h2>
                <div className="name-box">
                    <button id='name-btn'>🙂</button>
                    <input type="text" name="first" id="inputbox" placeholder='Name' />
                </div>
                <div className="phone-box">
                    <button id='name-btn'>📞</button>
                    <input type="text" name="first" id="inputbox" placeholder='Phone' />
                </div>
                <div className="email-box">
                    <button id='name-btn'>📧</button>
                    <input type="text" name="first" id="inputbox" placeholder='Phone' />
                </div>
                <button id='copy-btn'>Submit</button>
            </section>
        </>
    )
}

export default UserInput
