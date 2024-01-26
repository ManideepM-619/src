import React, { useState } from 'react'
import axios from 'axios';
import {useForm} from 'react-hook-form'
import { compareSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  let navigate=useNavigate()
  let { register, handleSubmit } = useForm();
  let [error,setError]=useState("")
  async function onUserLogin(userCredObj) {
    let res = await axios.get(
      `http://localhost:4000/users?username=${userCredObj.username}`
    );
    let usersList = res.data;
 
    if (usersList.length === 0) {
      setError("Invalid Username");
    } else {
      let result = compareSync(userCredObj.password, usersList[0].password);
      if (result === false) {
        setError("Invalid Password");
      } else {
        navigate('/')
      }
    }
  }
  return (
<div className='log'>
  <div>      
    <div className='bgs'>
          <div className='login-container'>
      <h1 className="display-3 text-center text">User Login</h1>
 
      {error.length!==0&&<p className="fs-2 text-center text-danger">{error}</p>}
      <form className='forms'
       
        onSubmit={handleSubmit(onUserLogin)}>
        <div>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            className="form-control mb-4"
          />
        </div>
 
        {/* password */}
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="form-control mb-4"
          />
        </div>
 
        <button className="btn">Login</button>
        <p>
         New to Snitch? 
        <Link to="/signup" className="">Signup</Link>
         </p>
      </form>
    </div>
    </div>
  </div>
</div>
  )
}
 
export default Login