import React,{useState} from 'react'
import { useStateValue } from "../../stateprovider";
import {deletePlayer} from '../../actions/players'
import useToggle from "../../useToggle";
import { Close, EditRoadOutlined, EmailOutlined, ExitToApp, ExitToAppTwoTone, ExpandMore, Help, HelpOutline, ReadMore, RoomOutlined, Settings, Update } from '@mui/icons-material';
import { transition } from "../../transition";

import { Badge, IconButton, Dialog, Avatar, AvatarGroup, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import UpdateCoach from '../Coach/UpdateCoach'
function PlayercardLeft({name,position,age,nationality,gessy,image ,post}) {
 // STATE PROVIDER
 const { value, toggleValue } = useToggle(false);
 const [currentId, setCurrentId] = useState(0);
const [{basket},dispatch]=useStateValue();
const dispatch1 =useDispatch()
const addToBasket=()=>{
dispatch({
type:'ADD_TO_BASKET',
item:{
 
name:name,
position:position,
age:age,
nationality:nationality,
gessy:gessy,
image:image,
}
})
}


 
    return (
    <div>
        
        <div className='players_positions_left' >
    <div className='players_positions_content' onClick={addToBasket}>
    <div className='players_positions_img'>
<img src={image}/>
    </div>
    <div className='players_positions_text'>
    <div className='players_positions_text_top'>
<p>{name}</p>
<h2> {gessy}</h2>
</div>
<div className='players_positions_text_bottom'>
<div className='players_positions_text_child'>
<p>AGE</p>
<p>{age}</p>
</div>
<div className='players_positions_text_child'>
<p>NATIONALITY</p>
<p>{nationality}</p>
</div>
<div className='players_positions_text_child'>
<p>POSITION</p>
<p>{position}</p>
</div>
<button onClick={toggleValue} >select</button>
</div>
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
  edge="end"
  color="inherit"
  aria-label="close"
  style={{ marginRight: "5px" }}
  onClick={toggleValue}
>
  <Close className="closename" />
</IconButton>
<div className='sendmessage'>
  <div className='message'>
<UpdateCoach currentId={currentId} setCurrentId={setCurrentId}/>
</div>
</div>
</Dialog>   
   
    </div>
  )
}

export default PlayercardLeft