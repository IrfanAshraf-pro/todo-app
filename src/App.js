import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todoform from './components/Todoform';
import TodoItems from './components/TodoItems';

function App() {
  const [itemEdit, setItemEdit] = useState(null)
  const [todo, setTodo] = useState([
    {
      id: 1,
      name: 'Learn Web development ',
      completed: false,
    },
    {
      id: 2,
      name: 'Learn Copywriting',
      completed: false,
    },
    {
      id: 3,
      name: 'Learn Amazon',
      completed: false,
    }
  ])
  const handleAdd = (e) => {
    const id = todo.length + 1
    const newTodo = {
      id,
      name: e,
      completed: false
    }
    setTodo([...todo, newTodo])
  }
  const handleDelete = (id) => {
    const newTo = todo.filter((to) => {
      return to.id !== id
    })
    setTodo(newTo)
  }
  const handleUpdate = (name, id) => {
    console.log(name, id);
    setTodo(todo.map((item) =>
      item.id === id ?
        { ...item, name } : item
    ))
    setItemEdit(null)
  }
  const handleCompleted = (ids,value) => {
    setTodo(todo.map((item) => 
      // if (item.id === ids) {
      //   const completed = !item.completed
      //   {...item,completed}
      // }
      item.id===ids ? {...item,completed:value}:item
    )
)
  }
  const handleEdit = (item) => {
    setItemEdit(item)
  }
  return (
    <div className="App">
      <Navbar />
      <Todoform handleAdd={handleAdd} editItem={itemEdit} handleUpdate={handleUpdate} />
      <TodoItems todos={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleCompleted={handleCompleted} />
    </div>
  );
}

export default App;
