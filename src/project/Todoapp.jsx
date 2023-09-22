import React from 'react'
import './todo.css'

const Todoapp = () => {
  return (
    <>
        <section id="todo-container">
              <h1>Todo app</h1>
              <div className="todo-input">
                  <input type="text" name='todo' id='todoinput' placeholder='Enter the task' />
                  <button id='todo-btn'>Add</button>
              </div>
              
      </section>
    </>
  )
}

export default Todoapp
