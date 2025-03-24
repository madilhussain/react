import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if(numbersAllowed) str += '0123456789';
    if(charAllowed) str += '!@#$%^&*(){}[]?/><.,|:;`~-=+_';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numbersAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="flex justify-center items-center p-6">
        <div className="p-8 w-full max-w-lg rounded-3xl shadow-xl border border-gray-800 text-white">
          <h2 className="text-4xl font-bold text-center mb-6">
            Password Generator
          </h2>
          <div className="space-y-7">
            <div className="flex gap-4 bg-gray-800 p-4 rounded-xl items-center border border-gray-700">
              <input 
                className="flex-1 bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none" 
                value={password}
                readOnly 
                placeholder="Generated Password" 
              />
              <button className="py-3 px-5 font-bold bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-300 shadow-md">
                COPY
              </button>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-400 mb-6">Password Length</label>
              <div className="relative flex items-center">
                <input 
                  type="range"
                  value={length}
                  min="6" 
                  max="80"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }} 
                  className="w-full cursor-pointer appearance-none bg-gray-700 h-2 overflow-hidden accent-blue-500" 
                />
                <span className="absolute right-2 text-sm bg-blue-600 px-2 py-1 rounded-lg shadow-md text-white">{length}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <label className="flex items-center gap-3 text-lg bg-gray-800 p-3 rounded-xl border border-gray-700">
                <input
                  type="checkbox"
                  id='numberInput'
                  defaultChecked={numbersAllowed}
                  onChange={
                    () => {
                      setNumbersAllowed((prev) => !prev);
                    }
                  }
                  className="w-5 h-5 accent-blue-500"
                /> Numbers
              </label>
              <label className="flex items-center gap-3 text-lg bg-gray-800 p-3 rounded-xl border border-gray-700">
                <input
                  type="checkbox"
                  id='charInput'
                  defaultChecked={charAllowed}
                  onChange={
                    () => {
                      setCharAllowed((prev) => !prev);
                    }
                  }
                  className="w-5 h-5 accent-blue-500"
                /> Symbols
              </label>
            </div>
            <button className="w-full p-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-lg transition duration-300 shadow-md">
              GENERATE PASSWORD
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
