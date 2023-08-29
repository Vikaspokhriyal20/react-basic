import React, { createContext, useState } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentD from './ComponentD';


export const UserContext = createContext();
export const SubjectContext = createContext();
export const CounterContext = createContext();
export const GreetContext = createContext();


const UseContext = () => {
    const [user, setUser] = useState('Vikas Pokhriyal');
    const [subject, setSubject] = useState('c++');
    const [count, setCount] = useState(0);
    const [greet, setGreet] = useState(true);

    const countApp = () => {
        setCount((count) => count + 1);
    }


    return (
        <>
            <GreetContext.Provider value={greet}>
                <CounterContext.Provider value={count}>
                    <SubjectContext.Provider value={subject} >
                        <UserContext.Provider value={user}>

                            <section id='usecontext'>
                                <h4>UseContext... Parent Component</h4>
                                <ComponentA />
                                <ComponentB />
                                <ComponentD />
                                <button onClick={countApp} >Click Me</button>
                                <button onClick={()=>setGreet(!greet)}>Greet</button>
                            </section>

                        </UserContext.Provider>
                    </SubjectContext.Provider>
                </CounterContext.Provider>
            </GreetContext.Provider>
        </>
    )
}

export default UseContext
