import React from 'react';
import restaurantFood from '../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <main id="main" className='bg-[#495E57] mt-[3rem] py-[2rem] relative'>
        <div className='relative inline-block w-[15rem] ml-[15rem]'>
            <h1 className='font-bold text-3xl text-[#f4ce14]'>Little Lemon</h1>
            <h3 className='text-[#edefee] font-semibold text-2xl py-2'>Chicago</h3>
            <p className='text-[#edefee] text-xl py-4'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
            <button className='bg-[#f4ce14] px-4 text-black p-2 rounded-md'>
                Reserve a Table
            </button>
        </div>
        <div>
            <img src={restaurantFood} alt="Restaurant Food" className='w-[20rem] h-[25rem] object-cover rounded-md absolute right-60 top-10'/>
        </div>
    </main>
  )
}

export default Hero