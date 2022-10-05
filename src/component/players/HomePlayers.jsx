import React from 'react'
import Page from './Page'
import Sidebar from './Sidebar'
import './homeplayers.css'
function HomePlayers() {
  return (

  <div className='homeplayer'>
      <div className='sidebarhome'>
      <Sidebar />
      </div>
      <div className='pagehome'>
      <Page/>
      </div>
   

    </div>
  )
}

export default HomePlayers
