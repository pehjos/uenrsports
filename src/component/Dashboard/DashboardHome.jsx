import React from 'react'
import Page from './Dashboard'
import Sidebar from '../players/Sidebar'
import '../players/homeplayers.css'
import Anouncement from '../Calender/Anouncement'
function DashboardHome() {
  return (

  <div className='homeplayer'>
      <div className='sidebarhome'>
      <Sidebar />
      </div>
      <div className='pagehome'>
      <Page/>

      </div>
      <Anouncement/>

    </div>
  )
}

export default DashboardHome
