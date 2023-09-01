import React from 'react';
import AndrainandMarioA from '../assets/MarioandAdrianA.jpg';
import AndrainandMarioB from '../assets/MarioandAdrianB.jpg';

const About = () => {
  return (
    <section className='flex flex-col items-center md:flex-row p-[3rem]'>
      <aside className='md:w-[40rem] px-5'>
        <h1 className='font-bold text-3xl text-[#f4ce14]'>Little Lemon</h1>
        <h3 className='font-bold text-xl my-3'>Chicago</h3>
        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
      </aside>
      <aside>
        <img src={AndrainandMarioA} alt="Andrain and Mario Image" className='w-[30rem] relative' />
        <div>
          <img src={AndrainandMarioB} alt="Andrain and Mario Image" className='w-[20rem] absolute '/>
        </div>
      </aside>
    </section>
  )
}

export default About
