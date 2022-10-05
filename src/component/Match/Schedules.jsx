import { Schedule } from '@mui/icons-material'
import React from 'react'
import { ArrowBarRight, ArrowRight, Dot } from 'react-bootstrap-icons'
import './schedule.css'
function Schedules({title,date,time}) {
  return (
    <div className='schedules'>
  
     <div className='schedule__content' >
  
<div className='schedule_card'>
<h3>{title}</h3>
<h4>{date}</h4>
<h4>{time}</h4>
<div className="info">
<p> More Info </p> 
<ArrowRight color="white"/>
</div>
</div>


  </div>
    </div>
  )
}

export default Schedules