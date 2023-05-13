import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="w-4/5 mx-auto h-[100px] flex items-center">
      <div className='group overflow-hidden h-6 space-y-2 cursor-pointer'>
        <img src={logo} alt="" className='group-hover:-translate-y-8 transition-all duration-300 ease-in-out delay-100' />
        <img src={logo} alt="" className='group-hover:-translate-y-7 transition-all duration-300 ease-in-out delay-100' />
      </div>
    </nav>
  )
}

export default Navbar