import React,{useEffect, useState} from 'react'

function Todoform({handleAdd,editItem,handleUpdate}) {
    const [task, setTask] = useState('')
    const [edit, setEdit] = useState(false)
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.length > 0) {
            if (!edit) {
            handleAdd(task)
            } else {
                handleUpdate(task, editItem.id) 
                setEdit(false)
            }
            setTask('')
        }
    }
    useEffect(() => {
        if (editItem) {
            setTask(editItem.name);
            setEdit(true)
        }
   },[editItem]) 
   
  return (
      <div className='form-container'>
          <form className='formContainer' onSubmit={handleSubmit}>
              <input type="text" className='form-input' value={task}
                  onChange={ handleChange} />
              <button className='form-button' type='submit'>Submit</button>
         </form>
      </div>
  )
}

export default Todoform
