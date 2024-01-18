import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Components/timeheading'
import Para from './Components/timeinfo'
import Display from './Components/timej'
function App() {

  return (
    <>
    <div className='centre'>
      <Heading />
      <Para />
      <Display />
    </div>
    </>
  )
}

export default App
