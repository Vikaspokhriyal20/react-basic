import React, { useContext } from 'react'
import { GreetContext, SubjectContext, UserContext } from './UseContext'


const ComponentB = () => {

  const userdata = useContext(SubjectContext);
  const UserName = useContext(UserContext);
  const MyGreet = useContext(GreetContext);

  return (
    <>
      <main id='componentB' >
        <h4>Component-B</h4>
        <p>{`Subject Name ${userdata} User-Name : ${UserName}`}</p>
        {
          MyGreet ? <h3>Hello users 😊</h3> : <h3>thank you 🎊</h3>
        }
      </main>
    </>
 
  );
}



export default ComponentB
