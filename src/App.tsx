import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Mission } from './components/sections/Mission';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="selection:bg-primary/30 selection:text-primary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Mission />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
