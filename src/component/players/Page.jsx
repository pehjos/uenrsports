import React, { useState } from 'react'
import { ArrowBarLeft, ArrowLeft, Search } from 'react-bootstrap-icons'
import './page.css'
import { useNavigate } from 'react-router'
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BottomNav from '../pagination/BottomNav/BottomNav'
import { useStateValue } from "../../stateprovider";
import PlayercardLeft from './PlayercardLeft'
import { Link } from 'react-router-dom';
import {getPostsBySearch} from '../../actions/players'
import {useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}




function Page() {
  const [state,setState]=useState("attacker"||"striker"||"goalkepper"||"midfilder")
const user = JSON.parse(localStorage.getItem('profile'));
const [{basket},dispatch]=useStateValue();
const userId = user?.result.googleId || user?.result?._id;
const navigate = useNavigate();
const query = useQuery();
const page = query.get('page') || 1;
const searchQuery = query.get('searchQuery');


const [search, setSearch] = useState('');
const [tags, setTags] = useState([]);
const history = useNavigate();
const dispatch1=useDispatch()
const {players,isLoading}=useSelector((state)=>state.players)
const {coach,Loading}=useSelector((state)=>state.coach)
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
// 


// GETTING THE DAY
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(date);
var dayName = days[d.getDay()];

// get data onclick
const Atackers=()=>{
setState("attacker")
}

// get data onclick
const Midfilders=()=>{
  setState("midfilder")

  }
  // get data onclick
const Striker=()=>{
  setState("striker")

  }
  const Goal=()=>{
    setState("goalkepper")
  
    }
 const All=() =>{
setState("attacker"||"striker"||"goalkepper"||"midfilder")

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
<div className='page_main'>

<div className='page_main_nav'>
<ArrowLeft/>  
<p>Soccer Team</p>
</div> 
<div className='page_main_header'>
<div className='page_main_player'>
<p>Hello {user?.result.name}</p>
<p>Today is {dayName}, {date}</p>
</div>  
<div className='page_main_search'>
<input value={search} onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress} type="text" placeholder='search player ...'/>
<Search onClick={searchPost}/>
</div> 
<div className='page_main_coach'>
{coach.map((post,index)=>( 
post.category=="head"?(
<>
<img src={post.image}/>
<p>Head Coach</p>
<p>{post.name}</p>
</>
):"" ))}
</div> 
</div>    
<div className='page_main_menus'>
<p onClick={All}>All</p>
<p onClick={Atackers}>Atackers</p>
<p onClick={ Midfilders}>Midfilders</p>
<p onClick={Striker}>Strikers</p>
<p onChangeCapture={Goal}>Goalkeppers</p>

</div> 
<div className='players_positions'>
<div className='left'>
<BottomNav/>
{players.map((post,index)=>( 
  post.role==state?(
<PlayercardLeft
position={post.position}
gessy={post.gessynumber}
age={post.age}
nationality={post.nationality}
name={post.name}
image={post.image}
id={post._id}
department={post.department}
index={post.indexnumber}
telephone={post.telephone}
/>
):""))} 
</div>
{basket!==""?(<div className='players_positions_right'>
<div className='players_positions_right_top'>
<div className='players_positions_right_top_img'>
<img src={basket.image}/>
</div>
<div className='players_positions_right_top_text'>
<p>{basket.role}</p>
<h5>{basket.name}</h5>
<h3>{basket.team}</h3>
</div>
</div>
<div className='players_positions_right_bottom'>
<p>Name:{basket.name} </p>
<p>AGE:{basket.age} years old</p>
<p>Nationality:{basket.nationality}</p>
<p>Department:{basket.department}</p>
<p>Index Number:{basket.index}</p>
<p>Telephone:{basket.telephone}</p>
</div>
<Link to="/addstats">
<button>add statistics</button>
</Link>
</div>
):""}
</div>
</div>
)
}

export default Page