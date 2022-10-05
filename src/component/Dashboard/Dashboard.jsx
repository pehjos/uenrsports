import React from 'react'
import './dashboard.css'
import { Check, Check2Circle, Search } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('profile'));
          // GETTING THE DAY
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(date);
var dayName = days[d.getDay()];
return (
<div className='dashboard'>
<div className='dashboard_top'>
<div className='dashboard_top_left'>
<h3>Hello, {user?.result.name} </h3>
<p> Today is {dayName} ,{date}</p>
</div>  
<div className='dashboard_top_right'>
    <Link to='/search'>
<Search/>
</Link>
<Link to="/addplayer">
<p>add player</p>
</Link>
</div>  
</div>  
<div className='dashboard_middle'>
<div className='teams'>
    <Link to="/football">
<p style={{backgroundColor:"#2196f3"}}>Soccer Team</p>
</Link>
<Link to="/volleyball">
<p style={{backgroundColor:"yellow"}}>Volleyball Team</p>
</Link>
<Link to="/basketball">
<p style={{backgroundColor:"green"}}>Basketball Team</p>
</Link>
</div> 
<div className='teams'>
<Link to="/atlete">
<p style={{backgroundColor:"#2196f3"}}>Atheletics Team</p>
</Link>
<Link to="/decipline">
<p style={{backgroundColor:"crimson"}}>Sports dicipline</p>
</Link>
<Link to="/unit">
<p style={{backgroundColor:"brown"}}>Units</p>
</Link>
</div>   
</div>
{/* <div className='dashboard_footer'>
<div className='dashboard_footer_left'>
<h3>Archieve</h3>
<div className='archieve_child'>
<h3>Hall Of Fame</h3>
<Check2Circle/>
</div>
<div className='archieve_child'>
<h3>Records</h3>
<Check2Circle/>
</div>
</div>
<div className='dashboard_footer_right'>
<h3>Statistics</h3>
<img src="https://previews.123rf.com/images/frender/frender1811/frender181100066/114556746-business-finance-graph-chart-3d-illustration-isolated.jpg"/>
<h4>Finance</h4>
</div>
</div> */}
</div>
)
}

export default Dashboard