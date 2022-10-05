import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'
import { useStateValue } from "../../stateprovider";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';


function Signup() {

  const [{basket},dispatch1]=useStateValue();
  const initialState = { img:'',firstName: '', lastName: '', email: '', password: '', confirmPassword: '',isAdmin:basket.isAdmin };
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

  const handleSubmit = (e) => {
    setForm(initialState);
    e.preventDefault();
      dispatch(signup(form, history));
  };
// GOOGLE AUTH PROVIDER
const provider = new GoogleAuthProvider();
const windowSign=()=>{
    signInWithPopup(auth,provider )
    .then((data) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const result =data.user;
    const token =credential.accessToken;
    dispatch({ type: AUTH, data: { result, token } });
    
    history.push('/');
    
    
    // The signed-in user info.

}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    }); 
}

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  return (
    <div className='login'>
        <div className='login_right'>
        <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4a59805a8234ccc3/60df000cee9c2f22052cca6b/16c84589a1ceef313e45c4a39b0f28f2cbeaaf85.jpg"/>
        
        </div>    
        <div className='login_left'>
        
        <div className='login_left_top'>
        
        <img src="https://yellowpagesghana.com//wp-content/uploads/2021/07/UENR.jpg"/>
        </div>
        <div className='login_left_middle'>
        <h3>sign In</h3>
        
        </div>  
        <form className="" onSubmit={handleSubmit}>
        <div className='login_left_bottom'>
        <input name="firstName" label="First Name"  onChange={handleChange} type="text"placeholder='First name'/>
        <input name="lastName" label="Last Name" onChange={handleChange} type="text"placeholder='lastname'/>
        <input  name="email" label="Email Address"  onChange={handleChange} type="email" placeholder='email'/>
        <input  name="password" label="Password"  onChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} placeholder='Password'/>
        <input name="confirmPassword" label="Repeat Password"  onChange={handleChange} type="password"  placeholder='Repeat password'/>
        <button type="submit">SignUp</button>
        <p>have an account?<Link to="/login"> Signin</Link></p>
        </div> 
        </form>
      
        </div>    

    </div>
  )
}

export default Signup