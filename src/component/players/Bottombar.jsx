import React from 'react'
import { BoxArrowRight, Controller, Gear, House, Inbox, Line, PersonDash } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import './sidebar.css'
function Sidebar() {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <div className='sidebar'>
         <div className='sidebar_content'>
         <div className='sidebar_content_top'>
        
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29qipYPGrkvkGYEhgA1NVkcQX4RINKQgCV7LnU_UduQ&s'/>
        </div> 
        <div className='sidebar_content_middle'>
<img src={user?.result.img}/>
        <h4>{user?.result.name}</h4>
        <p>{user?.result.email}</p>

        </div> 
        <div className='sidebar_content_menu'>
        <div className='menu_child'>
          <Link to="/home">
         <House/>
         <p>home</p>  
         </Link> 
        </div>
        <div className='menu_child'>
        <Link to="/players">
         <PersonDash/>
         <p>players</p>  
         </Link> 
        </div>
        <div className='menu_child'>
          <Link to="/stats">
         <Line/>
         <p>stats</p>  
         </Link> 
        </div>
        <div className='menu_child'>
          <Link to="/dashboard">
         <Controller/>
         <p>games</p>
         </Link>   
        </div>
        <div className='menu_child'>
        <Link to="/settings">
         <Gear/>
         <p>settings</p>  
         </Link>   

        </div>
        </div> 
        <div className='sidebar_content_footer'>
        <div className='menu_child'>
        <Link to="/login"> 

         <BoxArrowRight/>
         <p>Logout</p> 
          </Link> 
        </div>

        </div> 
        </div>   

    </div>
  )
}

export default Sidebar