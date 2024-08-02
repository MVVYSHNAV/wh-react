import Successimg from '../../assets/successimg.png';

const Prime = () => {
  return (
    <div className="h-[780px] flex items-center justify-center bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-center justify-center">
          <h1 className="sm:text-4xl text-xl sm:w-4/5 font-regular font-BebasNeue text-black dark:text-white text-center md:text-left whitespace-normal">
            Success is not just about what you accomplish, but about the impact you make along the  way.<span className='text-gray-400'> Each 
            challenge you face is an  opportunity to grow and  each step you take brings you  closer to your goals.  </span> 
            Embrace the journey, stay focused, and  remember that every small  effort counts towards  achieving 
            something great.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <img src={Successimg} className="bottom-0 " />
        </div>
      </div>
    </div>
  );
}

export default Prime;
