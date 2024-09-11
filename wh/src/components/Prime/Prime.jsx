import React from 'react';
import { motion, useDragControls } from 'framer-motion';
import Successimg from '../../assets/successimg.png';

const Prime = () => {
  const controls = useDragControls();

  return (
    <div className="h-[780px] flex items-center justify-center bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Text Section */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="m-4 text-justify sm:text-4xl/tight text-xl/snug p-2 sm:w-4/5 font-regular font-BebasNeue text-black dark:text-white md:text-left whitespace-normal">
              Success is not just about what you accomplish, but about the impact you make along the way.
              <span className='dark:text-fuchsia-300  text-fuchsia-600'> Each challenge you face is an opportunity to grow and each step you take brings you closer to your goals. </span>
              Embrace the journey, stay focused, and remember that every small effort counts towards achieving something great.
            </h1>
          </motion.div>
        </div>
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <motion.div 
            drag="x" 
            dragControls={controls}
            className="cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              rotate: [0, 10, -10, 10, -10, 0],
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={Successimg} 
              alt="Illustration of Success" 
              className="bottom-0"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Prime;
