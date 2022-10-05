import React from 'react'
import { ArrowLeft, Folder, Stack } from 'react-bootstrap-icons'
import {useNavigate} from 'react-router-dom'
import './about.css'
function About() {
    const navigate =useNavigate()
  return (
    <div className='about'>
         <div className='navback' onClick={() => navigate(-1)}>
    <ArrowLeft className='bar'/>
    <p>Back</p>
    </div> 
<div className='about_content'>
<h3>About Us </h3>
<div className='content_ab'>
<div className='left_about'>
<img src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/05/06135652/Playermaker-main.jpg"/>
</div>
<div className='right_about'>
<h5>The University of Energy and Natural Resources (UENR) is a public-funded national institution that seeks to provide leadership and management of energy and natural resources and be a centre of excellence in these critical areas.</h5>
<p>
The University approaches its programmes and research emphasizing interdisciplinary collaboration and taking into account, areas such as economics, law and policy, management, science, technology and engineering as well as social and political issues affecting energy and natural resources. The University was established by an Act of Parliament, University of Energy and National Resources Act, 2011 (Act 830), on December 31, 2011. UENR was inaugurated in November 2012. The inauguration ceremony coincided with the matriculation of 154 foundation students and the induction of the Foundation Vice-Chancellor.

</p>
</div>
</div>
<div className='mission_vision'>
<div className='mission'>
<Stack/>
<h3>VISION</h3>
<p>The Sports Directorate has the vision of promoting a healthy lifestyle and wellness through sports.</p>
</div>
<div className='mission'>
<Folder/>
<h3>MISSION</h3>
<p>To enhance the fitness, health, well-being and holistic development of members of the University Community, and to become an instrument for change.</p>
    
</div>
</div>

</div>
    </div>
  )
}

export default About