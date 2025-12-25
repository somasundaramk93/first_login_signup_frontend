import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
function Nav() {
  return (
    <>
    <nav>
        <h1>viki_cutx</h1>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
        </div>
    </nav>
    </>
  )
}

export default Nav