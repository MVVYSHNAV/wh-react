import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Ourmission from './components/Ourmission/Ourmission';
import Prime from './components/Prime/Prime';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} font-Roboto`}> {/* Corrected template literal syntax */}
      <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <Hero/>
      <Ourmission/>
      <Prime/>

    </div>
  );
}

export default App;
