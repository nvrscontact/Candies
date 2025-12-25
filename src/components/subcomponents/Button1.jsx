import React from 'react'
import { Link } from 'react-router-dom'

function Button1({url,msg}) {
  return (
    <>
    <button className='button1'>
        <span>
          <Link to={url}>{msg} <img src="/img/arrowLink.svg" alt="" /></Link>
        </span>
    </button>
    </>
  )
}

export default Button1