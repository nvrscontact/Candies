import React from 'react'

function Register() {
  return (
        <div className='form'>
      <h1>Welcome</h1>

      <form action="">

        <div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder='Username' />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Email'/>
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password' />
          <span>+12 characters and special signs</span>
        </div>

        <div className='form_btn_submit'>
          <input type="submit" value={"Register"} />
        </div>

      </form>
    </div>
  )
}

export default Register