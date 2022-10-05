import React,{useState} from 'react'
import Highlights from '../../Match/Highlights'
import Schedules from '../../Match/Schedules'
import Latestnews from '../../Match/Latestnews'
import { motion } from 'framer-motion';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router'
import { Close } from '@mui/icons-material';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import '../homeroute.css'
function Homeroutes() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const {posts,isLoading}=useSelector((state)=>state.posts)
  const [selectedId, setSelectedId] = useState(null)
  console.log(posts)
  if(!posts?.length && !isLoading){
  return 'no data'
  }

  return (
    <div className='dashboardpages'>
   {isLoading?(<div  className="loadingPaper">
    <CircularProgress size="2em" />
    </div>):(
     <div className='contents'>
     
     <div className='upcoming'>
         <h3>LATEST NEWS</h3>
       <div className='schedulecontent'>
       
     {posts.map((post,index)=>(
             post.category=='news'?(
     <Latestnews
     title={post.title}
    image={post.image}
    time={post.time}
     />
     ):""))}  
     </div>

     </div>
     </div>)}  


    </div>
  )
}

export default Homeroutes