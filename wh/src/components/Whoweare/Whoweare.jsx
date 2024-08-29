import React from 'react';
import WWAimg from '../../assets/wwaimg.png';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Ourmission = () => {
  return (
    <div id="Whoweare" className="relative h-[800px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div>
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5">
          WHO WE ARE
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center h-full">
        <img
          src={WWAimg}
          alt="Illustration representing who we are"
          className="p-5 w-full sm:w-2/5 h-auto md:mt-0"
        />
        <div className="flex flex-col items-center md:items-start justify-center p-5 sm:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <p className="sm:text-3xl text-lg font-regular font-BebasNeue text-black dark:text-white text-justify md:text-left whitespace-normal">
              We are a full-service agency dedicated to enhancing your business’s presence and efficiency. We specialize in <span className='dark:text-fuchsia-300  text-fuchsia-600'>document management, web design, graphic design, and digital marketing.</span> Our team of experts combines creativity with strategy to deliver customized solutions that help you stand out and succeed in a competitive market.
            </p>
          </motion.div>
          <div className="absolute bottom-4 left-1/2 mt-10 transform -translate-x-1/2 sm:top-[75%] sm:left-[85%] z-20">
            <NavLink to='/aboutus' className="relative z-20 mx-auto flex justify-center">
              <Button text="Know More" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourmission;
