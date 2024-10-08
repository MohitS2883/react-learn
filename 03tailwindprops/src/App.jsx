import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [color, setColor] = useState('olive')
  function changeColor(color){
    setColor(color)
  }
  return (
    <>
      <div className='w-full h-screen duration-200 bg-black'>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl'>
            <button
            onClick={() => changeColor('red')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'>test</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'>test</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
