import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Ourmission from './components/Ourmission/Ourmission';
import Prime from './components/Prime/Prime';
import Whoweare from './components/Whoweare/Whoweare';
import Ourworks from './components/Ourworks/Ourworks';
import Meetus from './components/Meetus/Meetus';
import Footer from './components/Footer/Footer';
import Whatwedo from './components/Whatwedo/Whatwedo';
// import Whychooseus from './components/Whychooseus/Whychooseus';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} font-Roboto`}> 
      <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <Hero/>
      <Ourmission/>
      <Whatwedo/>
      <Prime/>
      <Whoweare/>
      <Ourworks/>
      {/* <Whychooseus/> */}
      <Meetus/>
      <Footer/>


    </div>
  );
}

export default App;
