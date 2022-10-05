
import React from 'react'
import Settings from './Settings'
import Sidebar from '../players/Sidebar'
import '../players/homeplayers.css'

function SettigsHome() {
  return (

  <div className='homeplayer'>
      <div className='sidebarhome'>
      <Sidebar />
      </div>
      <div className='pagehome'>
      <Settings/>

      </div>


    </div>
  )
}

export default SettigsHome
