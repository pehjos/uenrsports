import { Button ,Input,styled, IconButton, Avatar} from '@mui/material';
import React, { useState, useEffect,useRef } from 'react';
import '../Post/post.css'
import swal from 'sweetalert2'
import {PhotoCamera} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { useStateValue } from "../../stateprovider";
import {withRouter} from 'react-router-dom'
import { ArrowBackIos,AddPhotoAlternate, Check } from '@mui/icons-material'
import {createPlayer} from '../../actions/players'
import {updatePlayer} from '../../actions/players'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
function Form({setCurrentId,currentId}) {
const [useradmin, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const {posts,isLoading}=useSelector((state)=>state.posts)
const [{basket},dispatch1]=useStateValue();
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
age:"",
description:"",
title:"",
nationality:"",
image:"",
video:"",
position:"",
gessynumber:"",
role:"",
department:"",
indexnumber:"",
telephone:"",
team:"",
year:"",
active:"",

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
name:"",
age:"",
description:"",
title:"",
nationality:"",
image:"",
video:"",
position:"",
gessynumber:"",
role:"",
department:"",
indexnumber:"",
telephone:"",
team:"",
year:"",
active:"",

image:"",
video:"",

});
};

useEffect(() => {
if (!post?.title) clear();
if (post) setPostData(post);
}, [post]);
const handleSubmit = async (e) => {
e.preventDefault();
if (currentId === 0) {
dispatch(createPlayer({ ...postData, 
category:currentRoom4,
image:url1,

}, ));
// clear();
} else {
dispatch(updatePlayer(currentId, { ...postData, name: user?.result?.name }));
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

    //submit DATA TO BACKEND

    const handleSubmit1 = async (e) => {
        e.preventDefault();
dispatch(updatePlayer(basket._id,{ ...postData }));

}
console.log(basket._id)
return (
<div className="form">
<div className="categoryPage__top">
<Avatar src={basket.image}/>
</div>
<form  onSubmit={handleSubmit1}>
<div className="form_main"  >  
<div className="form_1">

<select required  onChange={(event) => changeRoom4(event.target.value)}
value={currentRoom4}>
<option value={""}>Team</option>
<option value="Volley ball team">current</option>
<option value="Basket ball team">formal</option>
<option value="football ball team">formal</option>
<option value="Atletics  team">formal</option>
</select>
<input required type="text" placeholder="title" value={postData.title}
onChange={(e)=>setPostData({...postData,     title:e.target.value})}/>
<input required type="number" placeholder="age"value={postData.age}
onChange={(e)=>setPostData({...postData, age:e.target.value})}/>
<input required type="text" placeholder="name" value={postData.name}
onChange={(e)=>setPostData({...postData,    name:e.target.value})}/>
<input required type="text" placeholder="nationality"value={postData.nationality}
onChange={(e)=>setPostData({...postData, nationality:e.target.value})}/>
<input required type="text" placeholder="position played"value={postData.position}
onChange={(e)=>setPostData({...postData, position:e.target.value})}/>
<input required type="number" placeholder="gessy number"value={postData.gessynumber}
onChange={(e)=>setPostData({...postData, gessynumber:e.target.value})}/>
<input required type="telephone" placeholder="telephone"value={postData.telephone}
onChange={(e)=>setPostData({...postData, telephone:e.target.value})}/>
<input required type="text" placeholder="nationality"value={postData.nationality}
onChange={(e)=>setPostData({...postData, nationality:e.target.value})}/>
<input required type="text" placeholder="role played"value={postData.role}
onChange={(e)=>setPostData({...postData, role:e.target.value})}/>
<input required type="text" placeholder="department"value={postData.department}
onChange={(e)=>setPostData({...postData, department:e.target.value})}/>
<input required type="text" placeholder="index number"value={postData.indexnumber}
onChange={(e)=>setPostData({...postData, indexnumber:e.target.value})}/>
<p>choose image</p>
{videoImg?(<div className="prevImg">
<div className="prevImg">
<img accept="image/*" id="prev"/>

{image1?(<p id="acceptImg1" onClick={uploadImage}>Confirm <Check/></p>):""}
</div>
</div>):(
<video  onClick={Playvideo} ref={Videoref}  id="prevvideo" accept="video/*"/> )}

<label htmlFor="icon-button-file">
<div className="input">
<input accept="image/*"  type="file" id="btnImg"  
onClick={handleEmtyInput}
onChange={ uploadPrev}/>
</div>
<div>
<IconButton color="primary" aria-label="upload picture" component="span">
<div className="addPhoto">
<AddPhotoAlternate label="Add Photo"id="photo"  onClick={choseImg}/>
<p>Add Photo1</p>
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
SAVE
</button>

</form>

</div>
)
}

export default Form
