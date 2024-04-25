import { useState } from 'react'
import './app.scss'
import VideoPage from './VideoPage/index.jsx'
import Home from './Home/index.jsx'
import Navbar from './Navbar/index.jsx' 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
 
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
    path:"/room/:id",
     element:<VideoPage/>
    }
  ]);
  return (
    <>
    <div><Navbar /></div>
    <RouterProvider router={router}/>
  
        
      
    
    </>
  )
}

export default App
