import React from 'react'
import { memo } from 'react'

const Todos = ({todos}) => {
  console.log('child render');
  return (
    <>
        <section>
        <p>My Todos..</p>  
        {
          todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
          })
        }
          
      </section>
    </>
  )
}

export default memo(Todos);
