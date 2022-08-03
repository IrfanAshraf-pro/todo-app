import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin5Fill} from 'react-icons/ri'
function Todo({ item, handleDelete,handleEdit, handleCompleted }) {
  const deleteItem=() => {
    handleDelete(item.id)
  }
  const edit = () => {
    handleEdit(item)
  }
  const completed = () => {
    handleCompleted(item.id,!item.completed)
  }
  return (
      <div className={`todo-container ${item.completed ?'completed' : 'unComplete'}`}>
          <div className="todo-icons">
              <BiEdit
                className="edit-icon icon"
                size="18px"
                color="white"
          onClick={edit}
          cursor="pointer"
        />
              <RiDeleteBin5Fill
                className="delete-icon icon"
                size="18px"
                cursor="pointer"
                color="white"
                onClick={deleteItem}
              />
          </div>
          <div className="todo-body">
          <div className="todo-status-container">
              <BsCheck2Circle
              className="check-icon icon"
              size="40px"
            color="white"
            onClick={completed}
            cursor="pointer"
              />
          </div>
          <div className='todo-name'>{ item.name}</div>
          </div>
    </div>
  )
}

export default Todo
