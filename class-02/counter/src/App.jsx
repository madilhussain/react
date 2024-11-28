import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HELLO WORLD!</h1>
      <h2>Counter Value: 05</h2>
      <button>Add Value</button>
      <button>Remove Value</button>
    </>
  )
}

export default App
