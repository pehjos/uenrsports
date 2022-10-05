import React from 'react'
import { ArrowBarRight, ArrowRight, Dot } from 'react-bootstrap-icons'
import './schedule.css'
function Highlights({image,title}) {
  return (
    <div className='schedules'>
   
     <div className='schedule__content' >

<div className='schedule_card1'>
<img src={image}/>
<div className="info_content_text">
<h3>{title}</h3>
</div>
</div>

  </div>
    </div>
  )
}

export default Highlights