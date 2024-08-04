import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Ourmission from './components/Ourmission/Ourmission';
import Prime from './components/Prime/Prime';
import Whoweare from './components/Whoweare/Whoweare';
import Ourworks from './components/Ourworks/Ourworks';
import Meetus from './components/Meetus/Meetus';
// import Whychooseus from './components/Whychooseus/Whychooseus';

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
      <Whoweare/>
      <Ourworks/>
      {/* <Whychooseus/> */}
      <Meetus/>

    </div>
  );
}

export default App;
