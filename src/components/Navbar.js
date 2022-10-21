import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to='/' className='navbarLogo'>
          POSTS
        </Link>
      </div>

      <div className='navbarItems'>
        <Link className='items' to='/'>
          <i class='fa-solid fa-newspaper'></i> Posts
        </Link>
        <Link className='items' to='/register'>
          <i class='fa-solid fa-user'></i> Register
        </Link>
        <Link className='items' to='/login'>
          <i class='fa-solid fa-right-from-bracket'></i> Sign In
        </Link>
      </div>
    </div>
  )
}

export default Navbar
