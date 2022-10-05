import { Button ,Input,styled, IconButton} from '@mui/material';
import React, { useState, useEffect,useRef } from 'react';
import '../Post/post.css'
import swal from 'sweetalert2'
import './contact.css'
import {useNavigate} from 'react-router-dom'
import { ArrowBackIos,AddPhotoAlternate, Check, EmailOutlined } from '@mui/icons-material'
import {createRent} from '../../actions/rent'
import {updatePost} from '../../actions/posts'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { ArrowLeft, GeoAlt, Send } from 'react-bootstrap-icons';
function Form({setCurrentId,currentId}) {
const [useradmin, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const {posts,isLoading}=useSelector((state)=>state.posts)
const navigate=useNavigate()
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
name:"",
email:"",
phone:"",
message:"",
});
const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : currentId));
const dispatch = useDispatch();

const user = JSON.parse(localStorage.getItem('profile'));

useEffect(() => {
if (post) setPostData(post);
}, [post]);

const clear = () => {
setCurrentId(0);
setPostData({   
    name:"",
email:"",
phone:"",
message:"",
});
};

useEffect(() => {
if (!post?.title) clear();
if (post) setPostData(post);
}, [post]);
const handleSubmit = async (e) => {
e.preventDefault();
 if (currentId === 0) {
dispatch(createRent({
     ...postData,category:currentRoom4


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


}
}



return (
    <div className='contact'>
        <div className='navback' onClick={() => navigate(-1)}>
    <ArrowLeft className='bar'/>
    <p>Back</p>
    </div>
    <div className='contactform'>
<div className="form">

<form  onSubmit={handleSubmit}>
<h4>Request a Rent</h4>  
<div className="form_main"  >  
<div className="form_1">
<select required  onChange={(event) => changeRoom4(event.target.value)}
value={currentRoom4}>
<option value={""}>request type</option>
<option value="rent">rent</option>
<option value="enguiry">enquiry</option>
</select>
<input required type="text" placeholder="name" value={postData.name}
onChange={(e)=>setPostData({...postData,     name:e.target.value})}/>
<input required type="text" placeholder="email"value={postData.email}
onChange={(e)=>setPostData({...postData, email:e.target.value})}/>
<input required type="text" placeholder="phone" value={postData.phone}
onChange={(e)=>setPostData({...postData,    phone:e.target.value})}/>
</div>

<div className="form_1">

<textarea value={postData.message} required
onChange={(e)=>setPostData({...postData,    message:e.target.value})} type="text" placeholder="add description to your post (eg.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. )"/>
</div>

</div>
<button  type="submit" id="btnsub">
SEND <Send/>
</button>

</form>
</div>
<div className='emails'>
<h1>Get in Touch</h1>
<p>We are closer to you than you know. Reach out to us if you have any challenges.</p>
<div className='location_child'>
<GeoAlt/>
<p>
Sports and Recreation Directorate

University of Energy and Natural Resource

P.O. Box 214

Sunyani, Bono, Ghana


</p>
</div>
<div className='location_child'>
<EmailOutlined/>
<p>
Mail Us :
sportsdirectorate@uenr.edu.gh
</p>
</div>
</div>
</div>
</div>
)
}

export default Form
