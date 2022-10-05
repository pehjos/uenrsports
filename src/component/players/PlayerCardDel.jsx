import React from 'react'
import { useStateValue } from "../../stateprovider";
import {deletePlayer} from '../../actions/players'
import { useDispatch, useSelector } from 'react-redux';
function PlayercardLeft({name,position,age,nationality,gessy,image ,post}) {
 // STATE PROVIDER
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
<button onClick={() => dispatch1(deletePlayer(post._id))} >Delete</button>
</div>
</div>
</div>
    </div>

    </div>
  )
}

export default PlayercardLeft