import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../../../node_modules/video-react/dist/video-react.css"; 
import { Player,BigPlayButton } from 'video-react';
import { ArrowBarRight, ArrowRight, Dot } from 'react-bootstrap-icons'
import './schedule.css'
function Highlights({image,title,post,video}) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.4], [0.1, 1.6]);

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
</div>
</div>



  </div>
    </div>
    // </motion.div>
    // </div>
  )
}

export default Highlights