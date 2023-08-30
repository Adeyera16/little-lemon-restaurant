import React from 'react';
import testimonialsData from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className='bg-[#495E57] p-[3rem]'>
      <h1 className='text-center font-bold text-3xl text-[#f4ce14]'>Testimonials</h1>
      <div className='flex  p-[3rem]'>
        {testimonialsData.map((items) => (
          <div key={items.id} className='bg-[#fbdabb] w-[15rem] ml-5 p-4 text-center'>
            <img src={items.image} alt={items.name} className='w-[5rem] '/>
            <p>star</p>
            <p>{items.text}</p>
            <h2>{items.name}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials