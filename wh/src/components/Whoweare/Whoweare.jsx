import WWAimg from '../../assets/wwaimg.png';
import Button from '../Button/Button';

const Ourmission = () => {
  return (
    <div className="relative h-[780px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div className="flex  mb-5">
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 text-center">
          WHO WE ARE
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center h-full">
        <img
          src={WWAimg}
          alt="Our Mission"
          className="p-5 w-full sm:w-2/5 h-auto md:mt-0"
        />
        <div className="flex flex-col items-center md:items-start justify-center p-5 sm:p-10">
          <p className="sm:text-3xl text-lg font-regular font-BebasNeue text-black dark:text-white  text-justify md:text-left whitespace-normal">
          we are a full-service agency dedicated to enhancing your business’s presence and efficiency. We specialize in <span className='text-gray-500'>document management, web design, 
          graphic design, and digital marketing.</span> Our team of experts combines creativity with strategy to deliver customized solutions that help you stand
          out and succeed in a competitive market. 
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:top-[75%] sm:left-[85%] z-20">
        <Button text="See More" />
      </div>
    </div>
  );
}

export default Ourmission;
