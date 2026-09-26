import React from 'react'
import { useNameStore } from './store/useNameStore';
import { useState } from "react";

const App = () => {

  const name = useNameStore((state) => state.name);
  const SetName = useNameStore((state) => state.setName);

  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  return <div>
    <input type="text" placeholder="name" value={input} onChange={handleChange} />
    <button onClick={() => SetName(input)}>Submit</button>
    <br />
    <h1>Current Name: {name}</h1>
  </div>
}

export default App;