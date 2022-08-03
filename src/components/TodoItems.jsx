import React from 'react'
import Todo from './Todo';

function TodoItems({ todos,handleDelete,handleEdit, handleCompleted }) {
  return (
    <div className='todos-container'>
          {
              todos.length>0 ? (
                todos.map((item) => (
                  <Todo item={item} key={item.id} handleDelete={handleDelete} handleEdit={handleEdit}  handleCompleted={handleCompleted}/>
              ))
        ) : (
            <p className='todos-empty'>No todos </p>
              )
      }
    </div>
  )
}

export default TodoItems
