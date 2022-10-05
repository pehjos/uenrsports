import React,{useState} from 'react'
import Highlights from '../Match/Highlights'
import Schedules from '../Match/Schedules'
import Latestnews from '../Match/Latestnews'
import { motion } from 'framer-motion';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router'
import { Close } from '@mui/icons-material';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './homeroute.css'
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
         <h3>UPCOMING EVENTS</h3>
       <div className='schedulecontent'>
       <AnimatePresence >
  {selectedId && (
    <motion.div layoutId={selectedId} className="amimation">
 <motion.button className='btn0' onClick={() => setSelectedId(null)} ><Close/></motion.button>
      <motion.h2>There will be match on monday</motion.h2>
      <motion.h5>Framer Motion offers more advanced listeners and also extends the basic set of React event listeners.
      <p>Time:10:30</p>
       <p>Date:23/23/1</p>
   
</motion.h5>
   
     
    </motion.div>
 
  )}
</AnimatePresence> 
     {posts.map((post,index)=>( 
     post.category=='schedule'?(
    <motion.div layoutId={post._id} onClick={() => setSelectedId(post._id)}>
     <Schedules
     title={post.title}
     date={post.date}
    time={post.time}
 
     />
     
       </motion.div> 
     ):""))}
          
     </div>
     </div>
     <div className='upcoming'>
         <h3>HIGHLIGHTS</h3>
       <div className='schedulecontent'>
       
     {posts.map((post,index)=>( 
   post.category=='highlights'?(
     <Highlights
     title={post.title}
   image={post.image}
    time={post.time}
    post={post}
    video={post.video}
     />
    ):"" ))}  
     </div>
     </div>
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