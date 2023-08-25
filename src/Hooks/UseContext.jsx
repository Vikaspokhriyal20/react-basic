import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();
const UseContext = () => {
    const [user, setUser] = useState('Vikas Pokhriyal');

    const handleChange = () => {
        setUser('Aman Bisth');
    }

    return (
        <>
            <UserContext.Provider value={user}>
                <section id='usecontext'>
                    <h4>UseContext...</h4>
                    <p>{`Hello ${user}`}</p>
                    <Component1 />
                    <button onClick={handleChange}>Click Me</button>
                </section>
            </UserContext.Provider>

        </>
    )
}

function Component1(params) {
    return (
        <>
            <div className="component1">
            <h4>component-1</h4>
            </div>
            <Component2/>
        </>
    )
}

function Component2(params) {
    const studentName = useContext(UserContext);
    return (
        <>
           <div className="component2">
                <h4>component-2</h4>
                <p>{`Are you ${studentName}`}</p>
            </div>
            <Component3/>
        </>
    )
}
function Component3(params) {
    return (
        <>
           <div className="component3">
            <h4>component-3</h4>
            </div>
            <Component4/>
        </>
    )
}
function Component4(params) {
    const userName = useContext(UserContext);
    return (
        <>
           <div className="component4">
                <h4>component-4</h4>
                <p>{`Hello ${userName}`}</p>
            </div>
        </>
    )
}
export default UseContext
