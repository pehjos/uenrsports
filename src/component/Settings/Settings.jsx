import React,{useState} from 'react'
import { PencilSquare, Search } from 'react-bootstrap-icons'
import './settings.css'
import { useDispatch, useSelector } from 'react-redux';
import BottomNav from '../pagination/BottomNav/BottomNav'
import { useStateValue } from "../../stateprovider";
import PlayercardLeft from '../players/PlayercardLeft'
import PlayerCarddel from '../players/PlayerCardDel'
import useToggle from "../../useToggle";
import { Close,  } from '@mui/icons-material';
import { transition } from "../../transition";
import { Badge, IconButton, Dialog, Avatar, AvatarGroup, Button } from "@mui/material";
import PlayerCardUpdate from '../players/PlayerCardUpdate'
import { useNavigate } from 'react-router'
import UpdateUser from './UpdateUser'
import {updatePlayer} from '../../actions/players'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import AddPlayer from './Addplayer'
import { Link } from 'react-router-dom';
function Settings() {
  const { value, toggleValue } = useToggle(false);
  const [currentId, setCurrentId] = useState(0);
  const user = JSON.parse(localStorage.getItem('profile'));
  const [{basket},dispatch]=useStateValue();
const navigate = useNavigate();
const {players,isLoading}=useSelector((state)=>state.players)
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
  

        
       
          // GETTING THE DAY
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(date);
var dayName = days[d.getDay()];
  return (
    <div className='settings'>
          <div className='settings_header'>
          <div className='settings_header_left'>
        
<h3>Hello, {user?.result.name}</h3>
 <p>Today is {dayName}, {date}</p>       
        </div>  
        <div className='settings_header_mid'>
      <Link to='/addplayer'> <h6 >Add new Player</h6></Link> 
      <Link to='/playerupdate'>  <h6 >Update Player</h6></Link> 
      <Link to='/playerdelete'>  <h6 >Delete Existing Player</h6></Link> 
        </div>  
        <div className='settings_header_right' onClick={toggleValue}>
        <h6>Update Admin</h6>
<PencilSquare/>
        
        </div>    
        </div>  
        <div className='settings_content'>
        <div className='settings_left'>
       <img src="https://media.istockphoto.com/photos/view-of-soccer-ball-on-athletic-field-in-stadium-arena-picture-id637298374?b=1&k=20&m=637298374&s=170667a&w=0&h=PPZ7aFbZcs560wcjHB0bV8L18csKOE-dKOxGiKbPVPk="/>
        </div>
        <div className='settings_right'>  
        <div className='settings_header_mid'>
      <Link to='/coach'> <h6 >Add new coach</h6></Link> 
      <Link to='/coachupdate'>  <h6 >Update coach</h6></Link> 
      <Link to='/coachdelete'>  <h6 >Delete Existing coach</h6></Link> 
        </div>      
        </div>
        
        </div>
        <Dialog  
halfScreen
open={value}
onClose={toggleValue}
TransitionComponent={transition}
>

<IconButton
  edge="center"
  color="inherit"
  aria-label="close"
  style={{ marginRight: "5px" }}
  onClick={toggleValue}
>
  <Close className="closename" />
</IconButton>
<div className='sendmessage'>
  <div className='message'>
<UpdateUser/>
</div>
</div>
</Dialog> 
    </div>
  )
}

export default Settings