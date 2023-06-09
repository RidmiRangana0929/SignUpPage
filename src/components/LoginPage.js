import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React from 'react'

const LoginPage = () => {

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
            <input className='input' type='text'/>
          </div>

          <div className='email'>
            <label className='lable'>Email</label>
            <input className='input' type='email'/>
          </div>

          <div className='password'>
            <label className='lable'>Password</label>
            <input className='input' type='password'/>
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