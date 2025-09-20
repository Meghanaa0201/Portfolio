'use client';

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useTheme } from './hooks/useTheme';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  useScrollAnimation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Sidebar currentSection={currentSection} theme={theme} toggleTheme={toggleTheme} />
      
      <main className="ml-[270px] p-8 min-h-screen lg:ml-[270px] md:ml-[90px] max-md:ml-0 max-md:p-4 max-md:pt-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}