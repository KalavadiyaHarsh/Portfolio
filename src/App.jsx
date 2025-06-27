import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import NextEyes from './components/NextEyes'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import FlipCard from './components/Featured'

// function App() {


//   const locomotiveScroll = new LocomotiveScroll();


//   return (
//     <div className='w-full h-screen'>
//       <Navbar />
//       <LandingPage />
//       <Marquee />
//       <About />  
//       <Eyes />
//       <Featured />  
//       <Cards />   
//       <NextEyes />
//       <Footer />  
//     </div>
//   )
// }


// export default App


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen scroll-smooth'>
      <Navbar />
      <section id="home">
        <LandingPage />
      </section>
        <Marquee />

      <section id="experience">
        <About />
      </section>
        <Eyes />

      <section id="projects">
        <Featured />
      </section>

      <section id="skills">
        <Cards />
      </section>
        <NextEyes />

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App
