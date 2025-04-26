import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addCounterVal = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter) 
    }
  }

  const removeCounterVal = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter) 
    }
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>COUNTER</h1>
      <h1>({counter})</h1>
      <div className="card">
        <button onClick={addCounterVal}>Add Counter Value</button>
        <br /><br />
        <button onClick={removeCounterVal}>Remove Counter Value</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
