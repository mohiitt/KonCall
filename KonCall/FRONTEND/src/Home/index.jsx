import React from 'react'
import './index.scss'
import home from "../../src/pic/home.png"
import vid from "../pic/vid1.gif"

export default function Home() {
  return (
    <div className='content'>
        <div className='left'>
            <h1>welcome to konConnect</h1>
            <p>ConferConnect is an online meeting platform that allows you to virtually 
            connect with people over the internet for meetings, presentations, 
            or even casual chats.</p>
            <div className="small">
            <div className="vid"><img src={vid} alt="loading..." /></div>
            <div className="btn">
                <button>Get Started</button>
                <input type='text' placeholder='Insert Link'></input>
            </div>
            </div>
            
        </div>

        <div className="right">
            <img src={home} alt="IMAGE" />
        </div>
       
    </div>
  )
}
