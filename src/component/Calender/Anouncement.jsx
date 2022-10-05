import React from 'react'
import { Bell } from 'react-bootstrap-icons'
import './anouncement.css'
import { useNavigate } from 'react-router'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
function Anouncement() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const {posts,isLoading}=useSelector((state)=>state.posts)
  
  console.log(posts)
  if(!posts?.length && !isLoading){
  return 'no data'
  }
  if (!posts) {
  //  window.location.reload()
  return (
    <div  className="loadingPaper">
    <CircularProgress size="2em" />
    </div>
    );
    }
  return (
    <div className='anouncement'>
     <div className='anouncementtop' >
         <p>Calender</p>
         <Bell color="tomato"/>
         </div> 
         {posts.map((post,index)=>( 
           post.category=='schedule'?(
  
<div className='anouncement_card'>
<p>{post.date}</p>
<div className='content_anounce'>
<div className='time_anounce'>
<p>{post.time}</p>
</div>
<div className='text_anounce'>
<h6>meeting</h6>
<p>General sports</p>
</div>
</div>
</div>
 ):""))} 

    </div>
  )
}

export default Anouncement