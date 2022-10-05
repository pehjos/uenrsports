import React,{useState} from 'react'
import { Search } from 'react-bootstrap-icons'
import './statistics.css'
import { useNavigate } from 'react-router'
import { useStateValue } from "../../stateprovider";
import { useDispatch, useSelector } from 'react-redux';
import StatsCard from './StatsCard'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';


import { Link } from 'react-router-dom';
import {getPostsBySearch} from '../../actions/players'
import {useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}




function Statistics() {
  
    const user = JSON.parse(localStorage.getItem('profile'));
    const [{basket},dispatch]=useStateValue();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useNavigate();
  const dispatch1=useDispatch()



  const { post, players, isLoading1 } = useSelector((state) => state.players);
  const {stats,isLoading}=useSelector((state)=>state.stats)
  console.log(stats)
  if(!stats?.length && !isLoading){
  return 'no data'
  }
  if (!stats) {
  //  window.location.reload()
  return (
    <div  className="loadingPaper">
    <CircularProgress size="2em" />
    </div>
    );
    }
 // search functionality


const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

const searchPost = () => {
if (search.trim() || tags) {
  dispatch1(getPostsBySearch({search}));
//   history(`/search1?searchQuery=${search || 'none'}`);
} else {
  history('/');
 
}
};
   
return (
<div className='statistics'>
<div className='statistics_nav'>
<div className='statistics_nav_header'>
<h3>FOOTBALL PLAYERS</h3>
</div>  
<div className='statistics_nav_search'>
<input placeholder='search for players'value={search} onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress} type="text"/>
<Search onClick={searchPost}/>
</div>   
</div>   
<div className='statistics_body_nav'>
<p>Names</p>
</div> 
<div className='statistics_body'>


<div className='statistics_body_left'>
{ stats.map((post,index)=>( 
<StatsCard
key={post._id}
player={post}
name={post.playername}
player_id={post.player_id}
id={post.player_id}
/>
)) }
</div> 
<div className='statistics_body_right'>
<div className='statistics_body_right_top'>
<img src="https://media.istockphoto.com/vectors/vector-football-field-on-digital-technology-background-vector-id1178554532?k=20&m=1178554532&s=612x612&w=0&h=0GkfsQAkfCRQlgdfwd6u96QYlxxrlUVaaYfOcYph5mE="/>
</div>
<div className='statistics_body_right_footer'>
<div className='events'>
<div className='events_header'>
<p>Year</p>
</div>
<div className='events_child'>

{ stats.map((post,index)=>( 
post.player_id==basket.id?(
    <>
<p>{post.year}</p>

</>):""
))}
</div>
</div>
<div className='events'>
<div className='events_header'>
<p>Apps (Subs)</p>
</div>
<div className='events_child'>
{ stats.map((post,index)=>( 
post.player_id==basket.id?(
    <>
<p>0({post.assist})</p>

</>):""
))}
</div>
</div>
<div className='events'>
<div className='events_header'>
<p>Goals</p>
</div>
<div className='events_child'>
{ stats.map((post,index)=>( 
  post.player_id==basket.id?(
    <>
<p>0 {post.goals}</p>

</>):""
))}
</div>
</div>
<div className='events'>
<div className='events_header'>
<p>Asist</p>
</div>
<div className='events_child'>
{ stats.map((post,index)=>( 
post.player_id==basket.id?(
    <>
<p>0({post.assist})</p>

</>):""
))}
</div>
</div>
<div className='events'>
<div className='events_header'>
<p>Red</p>
</div>
<div className='events_child'>
{ stats.map((post,index)=>( 
post.player_id==basket.id?(
    <>
<p>0({post.red})</p>

</>):""
))}
</div>
</div>
<div className='events'>
<div className='events_header'>
<p>Yellow</p>
</div>
<div className='events_child'>
{ stats.map((post,index)=>( 
    post.player_id==basket.id?(
    <>
<p>({post.yellow})</p>

</>):""
))}
</div>
</div>
</div>
</div>
 
</div>  

</div>
)
}

export default Statistics