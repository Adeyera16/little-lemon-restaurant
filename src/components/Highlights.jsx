import React from 'react';
import data from '../data/data.js';
// import basket from '../assets/Recent.svg';

const Highlights = () => {
  return (
    <section className='mt-[8rem] flex flex-col justify-center items-center w-full'>
      <div className='flex justify-center space-x-20 md:space-x-96 w-full'>
        <h1 className='text-2xl md:text-3xl font-bold'>This Week Specials!</h1>
        <button className='bg-[#f4ce14] text-black p-2 px-3 rounded-md'>
          online menu
        </button>
      </div>
      <div className='grid gap-x-2 grid-cols-1 md:grid-cols-3 mt-[5rem] w-[80%] justify-center'>
        {data.map((item) => (
          <div key={item.id} className='w-[18rem] ml-[2rem] bg-[#edefee] mb-5 '>
            <img src={item.image} alt={item.name} className='h-[15rem] object-cover rounded-t-lg' />
            <p className='font-bold p-5'>{item.name} <span className='text-[#ee9972] ml-20'>{item.price}</span></p>
            <p className='px-5'>{item.text}</p>
            <div className='px-5 py-3'>
              <button className='font-bold'>Order a delivery</button>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Highlights