import React ,{useState} from 'react'
import './index.scss'
import home from "../../src/pic/home.png"
import vid from "../pic/vid1.gif"
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [input,setInput]=useState("");

  const navigate=useNavigate();
  const submitHandler=()=>{
    navigate(`/room/${input}`)
  }

  return (
    <div className='content'>
      
        <div className='left'>
            <h1>welcome to konCall</h1>
            <p>KonCall is an online meeting platform that allows you to virtually 
            connect with people over the internet for meetings, presentations, 
            or even casual chats.</p>
            <div className="small">
            <div className="vid"><img src={vid} alt="loading..." /></div>
            <div className="btn">
                <button onClick={submitHandler}>Get Started</button>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Name'></input>
                <input type='text' placeholder='Code'></input>
            </div>
            </div>
            
        </div>

        <div className="right">
            <img src={home} alt="IMAGE" />
        </div>
       
    </div>
  )
}
