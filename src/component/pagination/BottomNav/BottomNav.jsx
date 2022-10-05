import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import Paginate from '../Pagination1';
import Paginate1 from '../Pagination2';
import Paginate3 from '../Pagination3';
import Paginate4 from '../Pagination4';
import Paginate5 from '../Pagination5';
import Paginate6 from '../Pagination6';
import {useSelector} from 'react-redux'
import {  useLocation } from 'react-router-dom';
import '../BottomNav/bottomnav.css'
function useQuery1() {
    return new URLSearchParams(useLocation().search);
  }

    
    
    
 
export default function SimpleBottomNavigation() {
 // FETCH POST
 const query = useQuery1();
 const page = query.get('page') || 1;
 const page1 = query.get('page') || 1;
 const page2 = query.get('page') || 1;
 const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)

return (
<div className="bottom__nav">
  <div className="page">
<Paginate page={page}/> 
<Paginate6 page={page}/>
<Paginate1 page={page}/>
<Paginate3 page={page}/>
<Paginate4 page={page}/>
<Paginate5 page={page}/>

</div>
</div>
);
}
