import { useState } from 'react'
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About  from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavigationBar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />

    </>
  )
}

export default App
