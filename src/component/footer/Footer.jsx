import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'
import './footer.css'
function footer() {
  return (
    <div className='footer'>
      <div className='left'  >
      <div className='left_top1'  >
      <img width={40} height={50} src="https://africadmission.com/wp-content/uploads/2021/06/UENR.png"/>
      <h3>UENR|UNIVERSITY OF ENERGY AND NATURAL RESOURSES</h3>
</div>
<div className='left_botoom'  >
<Youtube />
<Twitter/>
<Facebook/>
<Instagram/>
</div>
      </div>
      <div className='right'  >
<div className='right_top'  >
<p>Sponsorship</p>
        
</div>
<div className='right_middle'  >
<div className='dots'>
<div className='field'>
    
    </div> 
    <div className='field'>
    
    </div> 
</div>
<div className='dots'>
<div className='field'>
    
    </div> 
    <div className='field'>
    
    </div> 
</div>   
</div>
<div className='right_botoom'  >
<p>All Right Reserved ©️ 2022 @Pehjos Inc</p>
        
</div>
      </div>

    </div>
  )
}

export default footer