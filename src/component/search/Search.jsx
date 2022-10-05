import React,{useState} from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {getPostsBySearch1} from '../../actions/posts'
import {useLocation } from 'react-router-dom';
import SearchCard from './SearchCard';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function Search() {
    const navigate=useNavigate()
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
  
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const history = useNavigate();
 
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
      };
  
  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch1({ search}));
    //   history(`/search1?searchQuery=${search || 'none'}`);
    } else {
      history('/');
     
    }
  };
  const {posts,isLoading}=useSelector((state)=>state.posts)
  if(!posts.length && !isLoading){
      return 'no data'
    }
    // if (isLoading) {
    //    return (
    //      <div  className="loadingPaper">
    //        <CircularProgress size="2em" />
    //      </div>
    //    );
    //  } 
 
 
  

  return (
    <div className='search'>
      <div className='search_top_main'  >
      <div className='navback' onClick={() => navigate(-1)}>
    <ArrowLeft className='bar'/>
    <p>Back</p>
   

    </div> 
    <input value={search} onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress}  type="text" placeholder='Search'/>
    <button onClick={searchPost}>SEARCH</button>
      </div>
      {posts.map((post,index)=>(
            index<3&&( 
     <SearchCard
     title={post.title}
description={post.description}
     />
     )))} 

    </div>
  )
}

export default Search