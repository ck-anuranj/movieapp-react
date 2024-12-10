import React from 'react'
import Logo from "../logo.png"
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='border-black
     flex items-center
     space-x-16
     pl-12 py-8
     bg-gray-400
     '>
        <img src={Logo} alt="logo" className='w-[150px]' />
     <Link to="/" className='font-bold text-stone-600'>Movies</Link>
     <Link to="/fav" className='font-bold text-stone-600'>Favourites</Link>
    </div>
  )
}

export default NavBar
