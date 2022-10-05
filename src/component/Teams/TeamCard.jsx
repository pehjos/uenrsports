import React from 'react'
import './teamcard.css'
function TeamCard({name,image,team}) {
return (
<div className='teamCard'>
<h6>{name}</h6>
<img src={image}  />
<p>{team}</p>

</div>
)
}

export default TeamCard