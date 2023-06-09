
import React, { useState } from 'react'

const SignUpPage = () => {

  const [fullName,setFullName] = useState("");
  const [grade,setGrade] = useState("");
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleFormSubmit = (e) => {
    console.log("Full name : "+fullName+" , "+"Grade : "+grade+" , "+"Email : "+email+" , "+"Username : "+username+" , "+"Password : "+password);
    e.preventDefault();
  }

  return (
    <div className='container'>
      <div className='app-wrapper1'>
      <div className='app-wrapper2'>

        <div>
          <h2 className='title'>Student Login</h2>
        </div>

        <form className='form-wrapper'>

          <div className='fullName'>
            <label className='lable'>Full Name</label>
            <input className='input'
            id='s_fullName' 
            type='text' 
            name='fullname' 
            onChange={ (e) => {setFullName(e.target.value)}}/>
          </div>

          <div className='grade'>
            <label className='lable'>Grade</label>
            <input className='input' 
            id='s_grade'
            type='grade' 
            name='grade' 
            onChange={ (e) => {setGrade(e.target.value)}}/>
          </div>

          <div className='email'>
            <label className='lable'>Email</label>
            <input className='input'
            id='s_email' 
            type='email' name='email' 
            onChange={ (e) => {setEmail(e.target.value)}}/>
          </div>

          <div className='username'>
            <label className='lable'>Username</label>
            <input className='input' 
            id='s_username'
            type='username' 
            name='username' 
            onChange={ (e) => {setUsername(e.target.value)}}/>
          </div>

          <div className='password'>
            <label className='lable'>Password</label>
            <input className='input' 
            id='s_password'
            type='password' 
            name='password' 
            onChange={ (e) => {setPassword(e.target.value)}}/>
          </div>

          <div>
            <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
          </div>

        </form>
      </div>
      <div className='app-wrapper3'></div>
      <div className='app-wrapper4'></div>
      </div>
    </div>
  );
}

export default SignUpPage