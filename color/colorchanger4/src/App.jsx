import { useState } from 'react';
import mainImage from './assets/char.jpg';
import walterImage from './assets/Walter.jpeg';
import jesseImage from './assets/Jesse.png'
import Goodman from './assets/AllGoodman.jpeg'
import gus from './assets/Gus.png'
import Skyler from './assets/Skyler.png'
import Hank from './assets/Hank.png'
import Marie from './assets/Marie.png'
import jr from './assets/WhiteJr.png'
import mike from './assets/mike.png'
import './App.css';

function App() {
  const [image, setImage] = useState(`url(${mainImage})`);

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundImage: image }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
              onMouseEnter={() => setImage(`url(${walterImage})`)}
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#4CAF50'}}>
              Heisenberg
            </button>
            <button 
              onMouseEnter={() => setImage(`url(${jesseImage})`)} 
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#FFEB3B' }}>
              Jesse Pinkman
            </button>
            <button 
              onMouseEnter={() => setImage(`url(${Goodman})`)} 
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#F44336' }}>
              Saul Goodman
            </button>
            <button 
              onMouseEnter={() => setImage(`url(${gus})`)} 
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#1976D2' }}>
              Gus Fring
            </button>
            <button 
              onMouseEnter={() => setImage(`url(${Skyler})`)} 
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#81D4FA' }}>
              Skyler White Yo
            </button>
            <button 
              onMouseEnter={() => setImage(`url(${Hank})`)} 
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#6B8E23' }}>
              Hank Schrader
            </button>
            <button 
              onMouseEnter={() => setImage(`url(${Marie})`)} 
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#9C27B0' }}>
              Marie Schrader
            </button>
            <button 
              onMouseEnter={() => setImage(`url(${jr})`)} 
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#A5D6A7' }}>
              White Jr
            </button>
            <button 
              onMouseEnter={() => setImage(`url(${mike})`)} 
              onMouseLeave={() => setImage(`url(${mainImage})`)}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{ backgroundColor:'#9E9E9E' }}>
              Mike
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
