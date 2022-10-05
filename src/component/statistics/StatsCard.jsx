import React from 'react'
import { useStateValue } from "../../stateprovider";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './statistics.css'

function StatsCard({player_id,id,name,year,assist,red,yellow,team,goals,post}) {
    // STATE PROVIDER
    const history=useNavigate()
const [{basket},dispatch]=useStateValue();
const dispatch1 =useDispatch()
const addToBasket=()=>{
dispatch({
type:'ADD_TO_BASKET',
item:{
name:name,
year:year,
goals:goals,
assist:assist,
red:red,
team:team,
yellow:yellow,
id:id
}
})
}

// Open Player
const openPost = (e) => {
  history(`/details/${player_id}`);
};
  return (
    <div>
        <div className='statistics_body_left' onClick={addToBasket}>
<p onDoubleClick={openPost}>{name}</p>
    </div>
    </div>
  )
}

export default StatsCard