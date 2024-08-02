import Successimg from '../../assets/successimg.png';

const Prime = () => {
  return (
    <div className="h-[780px] flex items-center justify-center bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="flex items-center justify-start">
          <h1 className="sm:text-3xl text-xl font-regular font-BebasNeue text-black dark:text-white text-center md:text-left">
            Success is not just about what <br/> you accomplish, but about the <br/>impact you make along the  way.<br/> Each 
            challenge you face is an <br/> opportunity to grow and  each <br/>step you take brings you  closer <br/>to your goals. 
            Embrace the journey, <br/>stay focused, and  remember that<br/> every small  effort counts towards <br/> achieving 
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
