import { useState } from "react"
import { useTodoStore } from "./store/todo"

const App = () => {

  const [input, setInput] = useState('');
  const [id, setId] = useState(0)
  const todos = useTodoStore((state) => state.todo)
  const addTodoHandler = useTodoStore((state) => state.addTodo)
  const removeTodoHandler = useTodoStore((state) => state.removeTodo)

  return <div>
    <input type="text" placeholder="Enter task" value={input} onChange={(e) => setInput(e.target.value)} />
    <button style={{ backgroundColor: 'green' }} onClick={() => {
      addTodoHandler(id + 1, input)
      setId((id) => id + 1)
    }}
    >Add Task</button>
    <br />

    {todos.map((todo) => {
      return <div>
        <ul key={todo.id}>
          {todo.id}.{todo.title}
          <button style={{ backgroundColor: 'red', marginLeft: '10px' }} onClick={() => removeTodoHandler(todo.id)}>Delete</button>
        </ul>
      </div>
    })}
  </div>
}

export default App;