import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <HeroSection />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
