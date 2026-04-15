import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="background-grid"></div>
      
      {/* Decorative Orbs - blue/indigo/cyan palette with pulse glow */}
      <div className="fixed rounded-full blur-[100px] opacity-30 -z-10 animate-pulse-glow -top-[10%] left-[10%] w-[40vw] h-[40vw] bg-accent-1"></div>
      <div className="fixed rounded-full blur-[100px] opacity-20 -z-10 animate-pulse-glow -bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-accent-2" style={{ animationDelay: '-1.5s' }}></div>
      <div className="fixed rounded-full blur-[120px] opacity-15 -z-10 animate-pulse-glow top-[40%] left-[60%] w-[30vw] h-[30vw] bg-accent-3" style={{ animationDelay: '-3s' }}></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
