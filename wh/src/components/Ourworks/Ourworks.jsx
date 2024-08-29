import Workweb from '../../assets/workweb.png';
import Workdoc from '../../assets/workdoc.png';
import { motion } from "framer-motion";

const Ourworks = () => {
  return (
    <div id="Ourworks" className="relative h-auto min-h-[850px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5">
          OUR WORKS
        </h1>
      </div>
     
      <div className="grid sm:grid-cols-12 gap-4 mt-8 w-full h-auto p-5">
        <motion.div 
          whileTap={{ scale: 0.95 }} // More subtle scaling
          whileHover={{ scale: 1.05 }} // Add a slight hover effect
          className="bg-violet-600 sm:col-span-7 h-full hover:bg-violet-300 flex flex-col items-start justify-center transition-all duration-300"
        >
          <div className="z-20 p-5">
            <img src={Workdoc} alt="Documents" className="shadow-2xl w-full object-cover rounded-lg" />
          </div>
          <div className="p-5">
            <h1 className="text-3xl text-black dark:text-white font-BebasNeue tracking-widest whitespace-normal drop-shadow-xl">
            Fin-Optima
            </h1>
          </div>
        </motion.div>
        <motion.div 
          whileTap={{ scale: 0.95 }} // More subtle scaling
          whileHover={{ scale: 1.05 }} // Add a slight hover effect
          className="bg-violet-600 sm:col-span-5 shadow-2xl hover:bg-violet-300 flex flex-col items-start justify-start transition-all duration-300"
        >
          <div className="z-20 p-5">
            <img
              src={Workweb}
              alt="Web Design"
              className="shadow-2xl w-full h-[200px] sm:h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-5">
            <h1 className="text-3xl text-black dark:text-white font-BebasNeue tracking-widest whitespace-normal drop-shadow-xl">
              Design-Deck
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ourworks;
