import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin,userUpdate } from '../../actions/auth';
const initialState = { firstName: '',img:'' ,lastName: '', email: '', password: '', confirmPassword: '' };

function Signup() {
    const user = JSON.parse(localStorage.getItem('profile'));
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
console.log(initialState)
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
const [postData, setPostData] = useState({
firstName: '',
img:'' ,
lastName: '',
email: '',
password: '',
confirmPassword: '' 
});
const uploadPrev=()=>{
    
  const oFreader=new  FileReader()
 oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
 oFreader.onload=function(oFREvent){
 document.getElementById("prev").src=oFREvent.target.result;
 console.log(oFREvent.target.result)
setPostData({...postData, img:oFREvent.target.result})

 }
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userUpdate(user?.result._id,{...postData }));
  };

  

  
  return (
    <div className='login'>   
        <div className='login_left'>
        
        <div className='login_left_top'>
        
        <img src="https://yellowpagesghana.com//wp-content/uploads/2021/07/UENR.jpg"/>
        </div>
        <div className='login_left_middle'>
        <h3>Change Account Info</h3>
        
        </div> 
        <img accept="image/*" id="prev" src={user?.result.img}/> 
        <form className="" onSubmit={handleSubmit}>
        <div className='login_left_bottom'>
        <input name="firstName" label="First Name" value={postData.firstName}
onChange={(e)=>setPostData({...postData,    firstName:e.target.value})}type="text"placeholder='First name'/>
        <input name="lastName" label="Last Name" value={postData.lastName}
onChange={(e)=>setPostData({...postData,   lastName:e.target.value})} type="text"placeholder='lastname'/>
        <input  name="email" label="Email Address"   value={postData.email}
onChange={(e)=>setPostData({...postData,   email:e.target.value})} type="email" placeholder='email'/>
        <input  name="password" label="Password" value={postData.password}
onChange={(e)=>setPostData({...postData,    password:e.target.value})}placeholder='Password'/>
        <input name="confirmPassword" label="Repeat Password"  value={postData.confirmPassword}
onChange={(e)=>setPostData({...postData,    confirmPassword:e.target.value})} type="password"  placeholder='Repeat password'/>
        <input  accept="image/*" type="file" id="btnImg" 
onChange={ uploadPrev} placeholder='Add profile'/>
        <button type="submit">Update User</button>
        <p>have an account?<Link to="/login"> Signin</Link></p>
        </div> 
        </form>
        </div>    

    </div>
  )
}

export default Signup