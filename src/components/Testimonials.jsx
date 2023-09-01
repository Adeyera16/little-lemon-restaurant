import React from 'react';
import testimonialsData from '../data/testimonials';
import Rating from "@mui/material/Rating";

const Testimonials = () => {
  return (
    <section className='bg-[#495E57] p-[3rem] mt-[5rem]'>
      <h1 className='text-center font-bold text-3xl text-[#f4ce14]'>Testimonials</h1>
      <div className='flex flex-col items-center md:flex-row p-[3rem]'>
        {testimonialsData.map((items) => (
          <div key={items.id} className='bg-[#fbdabb] w-[15rem] ml-5 p-4 text-center flex flex-col items-center rounded-md shadow-md shadow-[#ee9972] mb-5'>
            <img src={items.image} alt={items.name} className='w-[6rem] h-[6rem] rounded-full object-cover '/>
            <Rating name="read-only" value="5" readOnly size='small' className='py-2' />
            <p className='py-2'>{items.text}</p>
            <h2 className='font-bold py-2'>{items.name}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials