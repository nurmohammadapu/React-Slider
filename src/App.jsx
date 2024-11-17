import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonial from './components/Testimonial'
import reviews from './Data';

function App() {
  

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 '>
          <div className='text-center'>
            <h1 className='text-4xl font-bold'>Our Testimonial</h1>
            <div className='bg-violet-400 h-[4px] w-[1/5] mt-1'></div>
            <Testimonial reviews={reviews}></Testimonial>
          </div>
    </div>
  )
}

export default App
