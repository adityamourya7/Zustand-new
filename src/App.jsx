import { useTodoStore } from "../src/store/addTodo"
import { useState } from "react"

function App() {

  const [input, setInput] = useState('')

  const todo = useTodoStore((state) => state.todo)
  const addTodo = useTodoStore((state) => state.addTodo)

  return <div>
    <input type="text" placeholder="Name" value={input} onChange={(e) => setInput(e.target.value)} />
    <button onClick={() => addTodo(input)}>Add Task</button>
    <br />
    <h1>Task List:</h1>
    {todo.map((task) => {
      return <h2>{task}</h2>
    })}
  </div>
}

export default App;