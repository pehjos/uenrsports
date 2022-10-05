import React from 'react'
import Sidebar from '../players/Sidebar'
import '../players/homeplayers.css'
import Anouncement from '../Calender/Anouncement'
import UnitCard from './UnitCard'
import { useNavigate } from 'react-router'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
function DashboardHome() {
    const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const {players,isLoading}=useSelector((state)=>state.players)
  const {coach,Loading}=useSelector((state)=>state.coach)
  console.log(players)
  if(!players?.length && !isLoading){
  return 'no data'
  }
  if (!players) {
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
    <UnitCard/>

      </div>
      <Anouncement/>

    </div>
  )
}

export default DashboardHome
