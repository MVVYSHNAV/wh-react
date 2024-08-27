import Ourimg from '../../assets/ourmission.png';
import { motion } from 'framer-motion';


const OurMission = () => {
  return (
    <div className="relative h-[790px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <h1 className="text-xl sm:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5">
        OUR MISSION
      </h1>
      
      <div className="flex flex-col sm:flex-row items-center justify-center h-full">
        <img
          src={Ourimg}
          alt="Our Mission Graphic"
          className="p-5 w-full sm:w-2/5 h-auto mt-5 md:mt-0"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="flex flex-col items-center md:items-start justify-center p-5 sm:p-10">
            <p className="sm:text-3xl text-lg font-regular font-BebasNeue text-black dark:text-white text-justify md:text-left whitespace-normal">
              Our mission is to simplify your business processes and amplify your brand. We provide 
              <span className='text-gray-500'> comprehensive solutions, including document management, web design, graphic design, and digital marketing.</span> 
              Our goal is to deliver high-quality, tailored services that drive growth and success for your business.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OurMission;
