import { useState } from 'react'
import './app.scss'
import './Navbar.jsx'

import Navbar from './Navbar.jsx'

function App() {
  return (
    <>
    <Navbar/>
    
      <div className='heading'>
        <h1 className='h1'>Welcome to <span className='s'>ConferConnect</span></h1>
      <p>
        ConferConnect is an online meeting platform that allows you to virtually connect with people over the internet for meetings, presentations, or even casual chats.
        </p>
      </div>
      
      </>
   
    
  )
}

export default App
