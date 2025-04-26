import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#fffff');

  return (
    <>
      <div className='w-full h-screen flex justify-center items-end' style={{backgroundColor: color}}>
        <div className='flex gap-5 py-3 px-5 bg-white rounded-4xl mb-12'>
          <button onClick={() => setColor('#ff6467')} className='py-3 px-6 rounded-3xl bg-red-400 text-white font-bold'>RED</button>
          <button onClick={() => setColor('#ffb900')} className='py-3 px-6 rounded-3xl bg-amber-400 text-white font-bold'>AMBER</button>
          <button onClick={() => setColor('#00BCD4')} className='py-3 px-6 rounded-3xl bg-cyan-500 text-white font-bold'>CYAN</button>
          <button onClick={() => setColor('#99a1af')} className='py-3 px-6 rounded-3xl bg-gray-400 text-white font-bold'>GRAY</button>
          <button onClick={() => setColor('#8a0194')} className='py-3 px-6 rounded-3xl bg-fuchsia-800 text-white font-bold'>FUCHSIA</button>
          <button onClick={() => setColor('#7bf1a8')} className='py-3 px-6 rounded-3xl bg-green-300 text-white font-bold'>GREEN</button>
          <button onClick={() => setColor('#005f5a')} className='py-3 px-6 rounded-3xl bg-teal-800 text-white font-bold'>TEAL</button>
          <button onClick={() => setColor('#8ec5ff')} className='py-3 px-6 rounded-3xl bg-blue-300 text-white font-bold'>BLUE</button>
          <button onClick={() => setColor('#000000')} className='py-3 px-6 rounded-3xl bg-black text-white font-bold'>BLACK</button>
          <button onClick={() => setColor('#7c86ff')} className='py-3 px-6 rounded-3xl bg-indigo-400 text-white font-bold'>INDIGO</button>
        </div>
      </div>
    </>
  )
}

export default App
