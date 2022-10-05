import { Button ,Input,styled, IconButton} from '@mui/material';
import React, { useState, useEffect,useRef } from 'react';
import './post.css'
import swal from 'sweetalert2'
import {PhotoCamera} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { ArrowBackIos,AddPhotoAlternate, Check } from '@mui/icons-material'
import {createTemp} from '../../actions/temp'
import {updatePost} from '../../actions/posts'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
function Form({setCurrentId,currentId}) {
const [useradmin, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const {posts,isLoading}=useSelector((state)=>state.posts)

// CLOUDINARY UPLOAD
const [image1, setImage1 ] = useState("");
const [ url1, setUrl1 ] = useState("");



const uploadImage = () => {
let timerInterval
swal.fire({
title: 'Wait while we confirm image',
html: 'Loading... <b></b> milliseconds.',
timer: 10000,
timerProgressBar: true,
didOpen: () => {
swal.showLoading()
const b = swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
  b.textContent = swal.getTimerLeft()
}, 100)
},
willClose: () => {
clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})
const data = new FormData()
data.append("file", image1)

data.append("upload_preset", "obs8xuzh")
data.append("cloud_name","thefinder")
fetch(" https://api.cloudinary.com/v1_1/thefinder/image/upload",{
method:"post",
body: data, 
mode:'cors'
})
.then(resp => resp.json())
.then(data => {
setUrl1(data.secure_url)

console.log(data.secure_url)
document.getElementById('acceptImg1').style.opacity="0"
document.getElementById('prev').style.opacity="1"
swal.fire( 'Confirmed')
})
.catch((err) =>{ 

swal.fire({ icon: 'error', 
title: 'Oops...', text: 'Something went wrong!',
})
//  closeItems()
}
)

}

// CLOUDINARY

const [vid, setVid ] = useState("");
const [ urlVid, setUrlVid ] = useState("");
const uploadVid = () => {
let timerInterval
swal.fire({
title: 'Please Wait !',
html: 'Loading... <b></b> milliseconds.',
timer: 10000,
timerProgressBar: true,
didOpen: () => {
swal.showLoading()
const b = swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
  b.textContent = swal.getTimerLeft()
}, 100)
},
willClose: () => {
clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})
const data = new FormData()
data.append("file", vid)
data.append("upload_preset", "obs8xuzh")
data.append("cloud_name","thefinder")
fetch(" https://api.cloudinary.com/v1_1/thefinder/video/upload",{
method:"post",
body: data,
mode:'cors'
})
.then(resp => resp.json())
.then(data => {
// document.getElementById('confirm').style.opacity="0"
// document.getElementById('prevvideo').style.opacity="1"
setUrlVid(data.secure_url)
console.log(data.secure_url)
swal.fire( 'Good job!', 'Video uploaded successfully', 'success' )

}).catch((err) =>{ 
console.log(err)
swal.fire({ icon: 'error', 
title: 'Oops...', text: 'Something went wrong!',
})
closeItems()
}

)
}

const [currentRoom4, setCurrentRoom4] = useState(1)

const changeRoom4 = (newRoom4) => {
setCurrentRoom4(newRoom4)
}
const Input = styled('input')({
display: 'none',
});
const [tags ,setTags]=useState(false)
const [videoImg ,setVideoImg]=useState(true)
const [isVideoplaying, setisVideoplaying]=useState(false)
const [state ,setState]=useState(true)
const Videoref=useRef(null)
const Playvideo=()=>{
if(isVideoplaying){
//stop
Videoref.current.pause()
setisVideoplaying(false)

}else{
//play
Videoref.current.play()
setisVideoplaying(true)

}

}


const choseImg=()=>{
document.getElementById('btnImg').click()
setVideoImg(true)
setState(false)


}


const chosevideo=()=>{
document.getElementById('btnvideo').click()
setVideoImg(false)
setState(false)

}




const closeItems=()=>{
setState(true)
// document.getElementById('video').style.pointerEvents="initial"
// document.getElementById('photo').style.pointerEvents="initial"
// setBaseImage("")


}
const handleEmtyInput=({target})=>{

const files=target.files
target.value=''
}

const Tagss=()=>{
if (tags){
setTags(false)


}
else{
setTags(true)
}
}
// submit




const [postData, setPostData] = useState({   
title:"",
name:"" ,
description:"",
image:"",
video:"",});
const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : currentId));
const dispatch = useDispatch();

const user = JSON.parse(localStorage.getItem('profile'));

useEffect(() => {
if (post) setPostData(post);
}, [post]);

const clear = () => {
setCurrentId(0);
setPostData({ 
name:""  ,
    title:"",
    description:"",
    image:"",
    video:"",});
};

useEffect(() => {
if (!post?.title) clear();
if (post) setPostData(post);
}, [post]);
const handleSubmit = async (e) => {
e.preventDefault();
 if (currentId === 0) {
dispatch(createTemp({ ...postData, 
category:currentRoom4,
image:url1,
video: urlVid,
}, ));
// clear();
} else {
dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
clear();

};
}
if (!user) {
return (
<div>
<p>
Please Sign In to create your own memories and like other's memories.
</p>
</div>
);
}




const uploadPrev=()=>{

const oFreader=new  FileReader()
oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
oFreader.onload=function(oFREvent){
document.getElementById("prev").src=oFREvent.target.result;
console.log(oFREvent.target.result)
//  document.getElementById('photo').style.pointerEvents="none"
//  document.getElementById('photo').style.opacity="0.9"
setPostData({...postData, image:oFREvent.target.result})
setImage1(oFREvent.target.result)
}
}

const uploadprevvideo=()=>{
const ofFreader=new  FileReader()
ofFreader.readAsDataURL(document.getElementById('btnvideo').files[0]);
ofFreader.onload=function(ofFREvent){
document.getElementById("prevvideo").src=ofFREvent.target.result;
console.log(ofFREvent.target.result)
//  document.getElementById('video').style.pointerEvents="none"
//  document.getElementById('video').style.opacity="0.9"
console.log(ofFREvent.target.result,"video")
setPostData({...postData, video:ofFREvent.target.result})
setVid(ofFREvent.target.result)

}
}



return (
<div className="form">
<div className="categoryPage__top">
    <Link to="/">
        <ArrowBackIos className="categoryPage__topBackIcon" />
      </Link>
    </div>
<form  onSubmit={handleSubmit}>
<h4>CREATE POST</h4>  
<div className="form_main"  >  


<div className="form_1">
  
<select required  onChange={(event) => changeRoom4(event.target.value)}
value={currentRoom4}>
<option value={""}>news category</option>
<option value="foolball">foolball</option>
<option value="basketball">basketball</option>
<option value="volleyball">volleyball</option>
<option value="highlights">highlights</option>
</select>
<input required type="text" placeholder="title" value={postData.title}
onChange={(e)=>setPostData({...postData,     title:e.target.value})}/>
<input required type="text" placeholder="publisher name"value={postData.name}
onChange={(e)=>setPostData({...postData,name:e.target.value})}/>


<p>choose image</p>
{videoImg?(<div className="prevImg">
<div className="prevImg">
<img accept="image/*" id="prev"/>

{image1?(<p id="acceptImg1" onClick={uploadImage}>Confirm <Check/></p>):""}
</div>
</div>):(
<video  onClick={Playvideo} ref={Videoref}  id="prevvideo" accept="video/*"/> )}
{vid?(<p id="acceptImg1" onClick={uploadVid}>Confirm <Check/></p>):""}
<label htmlFor="icon-button-file">
<div className="input">
<input accept="image/*"  type="file" id="btnImg"  
onClick={handleEmtyInput}
onChange={ uploadPrev}/>
<input accept="video/*"  type="file" id="btnvideo"  
onClick={handleEmtyInput}
onChange={ uploadprevvideo}/>
</div>
<div className=' vid_img'>
<IconButton color="primary" aria-label="upload picture" component="span">
<div className="addPhoto">
<AddPhotoAlternate label="Add Photo"id="photo"  onClick={choseImg}/>
<p>Add Photo</p>
</div>
</IconButton>


<IconButton color="primary" aria-label="upload picture" component="span">
<div className="addPhoto">
<AddPhotoAlternate label="Add video"id="video"  onClick={chosevideo}/>
<p>Add Video</p>
</div>
</IconButton>
</div>

</label>

</div>

<div className="form_1">

<textarea value={postData.description} required
onChange={(e)=>setPostData({...postData,    description:e.target.value})} type="text" placeholder="add description to your post (eg.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. )"/>
</div>

</div>
<button  type="submit" id="btnsub">
POST
</button>

</form>

</div>
)
}

export default Form
