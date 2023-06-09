
import React, { useState } from 'react'

const SignUpPage = () => {

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleFormSubmit = (e) => {
    console.log("Full name : "+fullName," , "+"Email : "+email," , "+"Password : "+password);
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
            type='text' 
            name='fullname' 
            onChange={ (e) => {setFullName(e.target.value)}}/>
          </div>

          <div className='email'>
            <label className='lable'>Email</label>
            <input className='input' 
            type='email' name='email' 
            onChange={ (e) => {setEmail(e.target.value)}}/>
          </div>

          <div className='password'>
            <label className='lable'>Password</label>
            <input className='input' 
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