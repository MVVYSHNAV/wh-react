import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
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
import Getform from './components/Hero/Getform';
import Aboutus from './components/Whoweare/Aboutus';


const Main =() => {
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


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/form" element={<Getform/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
    </Routes>
  )
}

export default App;
