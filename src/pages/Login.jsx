import React from 'react'

function Login() {
  return (
    <>
    <div className='form'>
      <h1>Welcome Again</h1>

      <form action="">

        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Email'/>
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password' />
        </div>

        <div className='form_btn_submit'>
          <input type="submit" value={"Login"} />
        </div>

      </form>
    </div>
    </>
  )
}

export default Login