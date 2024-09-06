import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0)

  const increase = () =>{
    if(count < 5) setCount(++count);
  }
  const decrease = () =>{
    if(count > 0) setCount(--count);
  }

  return (
    <>
        <h2>Number : {count}</h2>
        <button onClick={increase}>increment</button>
        <br/>
        <br />
        <button onClick={decrease}>decrement</button>
        <br />
        <br />
        <h3>Number : {count}</h3>
    </>
  )
}

export default App
