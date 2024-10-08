import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15
  const [counter, setCounter] = useState(0) // [variable,method]
  const addValue = () =>{
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    // no change due to batching
  }
  const remValue = () => {
    setCounter(counter => counter - 1)
    setCounter(counter => counter - 1)
    setCounter(counter => counter - 1)
    setCounter(counter => counter - 1)
  }
  // state is constantly monitored any change it will re render the webpage

  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter Value {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>{" "}
      <button
      onClick={remValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
