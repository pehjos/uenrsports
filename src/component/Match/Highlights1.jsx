import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {createPost} from '../../actions/posts'
import {updatePost} from '../../actions/posts'
import "../../../node_modules/video-react/dist/video-react.css"; 
import { Player,BigPlayButton } from 'video-react';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { ArrowBarRight, ArrowRight, Dot } from 'react-bootstrap-icons'
import './schedule.css'
function Highlights1({image,title,post,description,video,name}) {
   
   const dispatch=useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'));
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.4], [0.1, 1.6]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost({ 
     landlord:post.name,
   image:post.image,
   title:post.title,
   video:post.video,
   category:post.category,
    name:post.name,
    description:post.description
    }, ));
    }
  return (
    // <div className="wrapper">
    //   <motion.div
    //     className="container"
    //     style={{
    //       scale
    //     }}
    //   >
    <div className='schedules'>
     <div className='schedule__content' >
<div className='schedule_card'>
{!post.image==""?(<img src={image}/>):(<Player preload="auto" fluid={false}  
playsInline={true}
height={200}
width={300}
>
<source   src={video} />
<BigPlayButton  position="center" />
</Player> )}
<div className="info_content">
<h3>{title}</h3>
<button onClick={handleSubmit}>accept</button>
</div>
</div>



  </div>
    </div>
    // </motion.div>
    // </div>
  )
}

export default Highlights1