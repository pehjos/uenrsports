import React from 'react'
import { Link } from 'react-bootstrap-icons'

function SearchCard({title,description}) {
  return (
    <div className='searchcard'>
     <div className='search_content' >
      <h4>{title}</h4>   
        <p>{description}</p>
        <Link/>
         </div> 
    </div>
  )
}

export default SearchCard