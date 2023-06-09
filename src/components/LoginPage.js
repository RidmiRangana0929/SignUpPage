import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'

const LoginPage = () => {

  const [values,setValues] = useState({
    fullname : "",
    email : "",
    password : ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='container'>

      <div className='app-wrapper'>
        <div>
          <h2 className='title'>Student Login</h2>
        </div>

        <form className='form-wrapper'>

          <div className='name'>
            <label className='lable'>Full Name</label>
            <input className='input' type='text' name='fullname'/>
          </div>

          <div className='email'>
            <label className='lable'>Email</label>
            <input className='input' type='email' name='email'/>
          </div>

          <div className='password'>
            <label className='lable'>Password</label>
            <input className='input' type='password' name='password'/>
          </div>

          <div>
            <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default LoginPage