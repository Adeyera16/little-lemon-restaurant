import React from 'react';
import logo from '../assets/Logo.svg'

const NavigationBar = () => {
  return (
    <nav className='flex justify-center mt-[2rem]'>
        <img src={logo} alt="Little Lemon Restaurant Logo" className='mr-[4rem]'/>
        <ul className='flex mt-[0.5rem]'>
            <li className='px-5'> <a href="#home">Home</a></li>
            <li className='px-5'> <a href="#about">About</a></li>
            <li className='px-5'> <a href="#menu">Menu</a></li>
            <li className='px-5'> <a href="#reservations">Reservations</a></li>
            <li className='px-5'> <a href="#orderOnline">Order Online</a></li>
            <li className='px-5'> <a href="#login">Login</a></li>
        </ul>
    </nav>
  )
}

export default NavigationBar