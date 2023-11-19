import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/cocktail logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar px-5 py-3 md:px-20 shadow-lg">
      <div className="nav-center flex items-center place-content-between">
        <Link to='/' className='flex items-center gap-2'>
          <img src={logo} alt="cocktail db logo" className='w-[30px] md:w-[60px] py-2' /> 
          <span className='text-secondary text-xl md:text-4xl font-bold'>FlavorFiesta</span> 
        </Link>
        <ul className="nav-links flex  md:gap-4">
          <li className='hover:bg-secondary hover:shadow-lg hover:text-white p-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:bg-secondary hover:shadow-lg hover:text-white p-2'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
