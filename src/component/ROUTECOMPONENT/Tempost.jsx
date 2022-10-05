import React,{useState} from 'react'
import Highlights from '../Match/Highlights1'
import Bottomnav from '../pagination/BottomNav/BottomNav'
import Latestnews from '../Match/Latestnews1'
import { motion } from 'framer-motion';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router'
import { Close } from '@mui/icons-material';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './homeroute.css'

import { ArrowLeft } from 'react-bootstrap-icons';
function Homeroutes() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const {temp,isLoading}=useSelector((state)=>state.temp)
  console.log(temp)
  if(!temp?.length && !isLoading){
  return 'no data'
  }

  return (
    <div className='dashboardpages'>
        <Bottomnav/>
          <div className='navback' onClick={() => navigate(-1)}>
    <ArrowLeft className='bar'/>
    <p>Back</p>
    </div>
   {isLoading?(<div  className="loadingPaper">
    <CircularProgress size="2em" />
    </div>):(
     <div className='contents'>
       <div className='upcoming'>
       <div className='schedulecontent'>
     </div>
     </div>
     <div className='upcoming'>
         <h3>Guest Posts</h3>
       <div className='schedulecontent'>
       
     {temp.map((post,index)=>( 
          
     <Highlights
     post={post}
     title={post.title}
     video={post.video}
   image={post.image}
    time={post.time}
    name={post.name}
    description={post.description}
     />
    ))}  
     </div>
     </div>
     </div>)}  


    </div>
  )
}

export default Homeroutes