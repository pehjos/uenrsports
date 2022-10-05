import React from 'react'
import Sidebar from '../players/Sidebar'
import '../players/homeplayers.css'
import Anouncement from '../Calender/Anouncement'
import Deciplinecard from './Deciplinecard'
import { useNavigate } from 'react-router'
import Message from '../messages/Message'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
function DashboardHome() {
    const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const {rent,isLoading}=useSelector((state)=>state.rent)
  console.log(rent)
  if(!rent?.length && !isLoading){
  return 'no data'
  }
  if (!rent) {
  //  window.location.reload()
  return (
    <div  className="loadingPaper">
    <CircularProgress size="2em" />
    </div>
    );
    }
  return (

  <div className='homeplayer'>
      <div className='sidebarhome'>
      <Sidebar />
      </div>
      <div className='pagehome'>
      {rent.map((post,index)=>(
      
<Message
type={post.category}
description={post.message}
name={post.name}
email={post.email}
phone={post.phone}
/>

            ))}
      </div>
      <Anouncement/>

    </div>
  )
}

export default DashboardHome
