import React, { useState } from 'react'
import Todos from './Todos'

const Index = () => {
    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo-1', 'todo-2', 'todo-3', 'todo-4']);

  const increment = () => {
    setCount((count) => count + 1);
  }

  return (
    <>
      <main>
      <Todos todos={todos} />
      <button onClick={increment}>click me {count}</button>
      </main>
    
    </>
  )
} 

export default Index
