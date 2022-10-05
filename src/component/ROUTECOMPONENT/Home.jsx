
import React from 'react'
import Sidebar from '../players/Sidebar'
import '../players/homeplayers.css'
import { HomeMax } from '@mui/icons-material'
import Homeroutes from './Homeroutes'

function SettigsHome() {
  return (

  <div className='homeplayer'>
      <div className='sidebarhome'>
      <Sidebar />
      </div>
      <div className='pagehome'>
<Homeroutes/>
      </div>


    </div>
  )
}

export default SettigsHome
