
import './details.css'
import React, {useState, useEffect } from 'react';
import {  CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import BottomNav from '../pagination/BottomNav/BottomNav'
import { getPost} from '../../actions/players';


function DetailsPage() {

    const {stats,isLoading}=useSelector((state)=>state.stats)
    const { player, players, isLoading1 } = useSelector((state) => state.players);
    const dispatch = useDispatch();
    const history = useNavigate();
    const { id } = useParams();
    useEffect(() => {
      dispatch(getPost(id));
      }, [id]);
      
  console.log(stats,"hello")

    if (!stats) {
    //  window.location.reload()
    return (
      <div  className="loadingPaper">
      <CircularProgress size="2em" />
      </div>
      );
      }
   // search functionality



  if (!player) return null;

 const openPost = (_id) => history.push(`/posts/${_id}`);
if (!player) {
    // window.location.reload()
return (
<div  className="loadingPaper">
<CircularProgress size="2em" />
</div>

);

}
   const recommendedPosts = players.filter(({ _id }) => _id !== player._id);


  

  return (
    <div className='detailpage'>
          <BottomNav/>
   <img src={player.image}/>
<div className='player_content'>
<div className='details'>
<div className='players_positions_right_bottom'>
<p>Name:{player.name} </p>
<p>AGE:{player.age} years old</p>
<p>Nationality:{player.nationality}</p>
<p>Department:{player.department}</p>
<p>Index Number:{player.indexnumber}</p>
<p>Telephone:{player.telephone}</p>
<p>Team:{player.team}</p>
<p>Role:{player.role}</p>
<p>Position:{player.position}</p>
<p>Jessy Number:{player.gessynumber
}</p>
</div>
</div>
<div className='stats'>
{/* stata */}
</div>


</div>
    </div>
  )
}

export default DetailsPage