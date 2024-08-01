import Ourimg from '../../assets/ourmission.png'
import Button from '../Button/Button'

const Ourmission = () => {
  return (
    <div className="relative h-[780px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
        <div className='flex'>  
        <h1 className=" text-xl ml-5 md:text-xl md:top-48 font-bold font-BebasNeue text-black  dark:text-gray-400 text-center whitespace-nowrap  ">OUR MISSION</h1>
        </div>
        <div className="flex  h-full">
        <img
            src={Ourimg}
            alt=""
            className="p-5 w-[668px] h-[45vh] md:h-[90vh] mt-5"
            />
            </div>
        <div>
        <div className='absolute flex flex-col sm:top-[35%] top-[55%] left-[5%] sm:left-[50%] p-10 md:transform md:-translate-x-1/5 z-20'>
          <p className="text-sm md:text-5xl font-regular font-BebasNeue text-black dark:text-white text-center md:text-left whitespace-normal">
          our mission is to simplify your business processes and amplify your brand. We provide <span className='text-gray-500'> Comprehensive solutions, 
          including document management, web design, graphic design, and digital marketing.</span> Our goal is to deliver high-quality, 
          tailored services that drive growth and success for your business.
          </p>
        </div>
        
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:top-[92%] sm:left-[85%] z-20">
          <Button text='Learn More'/>
        </div>
     </div>
  )
}

export default Ourmission;