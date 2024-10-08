import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numAllowed,setNum] = useState(false)
  const [charAllowed,setChar] = useState(false)
  const [password,setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += '012345679'
    if(charAllowed) str += '!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed])

  useEffect(()=>{generatePassword()}, [length,numAllowed,charAllowed])
  const copyPasswordToClipBoard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          readOnly
          ref={passwordRef}
           />
          <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={5} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} name='' id='' />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} onChange={()=>{setNum((prev)=> !prev)}} name='' id='' />
            <label htmlFor="nums">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{setChar((prev)=> !prev)}} name='' id='' />
            <label htmlFor="chars">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
