// import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Marquee from './components/Marquee'
import Experience from './components/Experience'
import Eyes from './components/Eyes'
import Projects from './components/Projects'
import Skills from './components/Skills'
import NextEyes from './components/NextEyes'
import Contact from './components/Contact'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen scroll-smooth'>
      <Navbar />
      <section id="home">
        <Home />
      </section>
        <Marquee />

      <section id="experience">
        <Experience />
      </section>
        <Eyes />

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>
        <NextEyes />

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App
