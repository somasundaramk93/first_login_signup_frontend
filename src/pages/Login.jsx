import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/login',{email,password})
    .then((res)=>navigate('/dashboard'))   
    .catch((err)=>console.log(err.message))
    
  }
  
  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="email" placeholder='enter your mail' value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder='enter your password' value={password} onChange={e=>setPassword(e.target.value)}/>
    <button type="submit">Login</button>
    </form>
    </>
  )
}

export default Login