import { MoreHorizOutlined } from '@mui/icons-material';
import React from 'react'
import { useStateValue } from "../../stateprovider";
function PlayercardLeft({id,name,position,age,nationality,gessy,image ,index,telephone,department}) {
 // STATE PROVIDER
const [{basket},dispatch]=useStateValue();

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
id:id,
department:department,
index:index,
telephone:telephone
}
})
}
 
 
    return (
    <div>
        
        <div className='players_positions_left' onClick={addToBasket}>
    <div className='players_positions_content'>
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
</div>
</div>
</div>
    </div>

    </div>
  )
}

export default PlayercardLeft