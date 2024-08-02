import Ourimg from '../../assets/ourmission.png';
import Button from '../Button/Button';

const Ourmission = () => {
  return (
    <div className="relative h-[780px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div className="flex  mb-5">
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 text-center">
          OUR MISSION
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-full">
        <img
          src={Ourimg}
          alt="Our Mission"
          className="p-5 w-full md:w-1/2 h-auto mt-5 md:mt-0"
        />
        <div className="flex flex-col items-center md:items-start justify-center p-5 md:p-10">
          <p className="sm:text-3xl text-lg font-regular font-BebasNeue text-black dark:text-white text-center md:text-left whitespace-normal">
            Our mission is to simplify your business processes and amplify your brand. We provide <span className='text-gray-500'> comprehensive solutions, including document management, web design, graphic design, and digital marketing.</span> Our goal is to deliver high-quality, tailored services that drive growth and success for your business.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:top-[92%] sm:left-[85%] z-20">
        <Button text="Learn More" />
      </div>
    </div>
  );
}

export default Ourmission;
