import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useStateValue } from "../../stateprovider";
import DeleteCoach from '../players/Coachdel'
import { useNavigate } from 'react-router'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import './homeroute.css'
import { ArrowBackIos } from '@mui/icons-material';
import { ArrowLeft } from 'react-bootstrap-icons';
function Updateplayer() {

const user = JSON.parse(localStorage.getItem('profile'));
const [{basket},dispatch]=useStateValue();

const navigate = useNavigate();
const {coach,isLoading}=useSelector((state)=>state.coach)
console.log(coach)
if(!coach?.length && !isLoading){
return 'no data'
}
if (!coach) {
//  window.location.reload()
return (
<div  className="loadingPaper">
<CircularProgress size="2em" />
</div>
);
}

return (
<div className='playerhomeupdate'>
    <div className='navback' onClick={() => navigate(-1)}>
    <ArrowLeft className='bar'/>
    <p>Back</p>
    </div>
<div className='playerupdate'>

{ coach.map((post,index)=>( 
<DeleteCoach
key={post._id}
post={post}
_id={post._id}
position={post.role}
gessy={post.gessynumber}
age={post.age}
nationality={post.nationality}
name={post.name}
image={post.image}
/>
)) }

</div>
</div>
)
}

export default Updateplayer