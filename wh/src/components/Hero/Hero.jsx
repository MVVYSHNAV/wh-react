import bgimg from '../../assets/bgblur1.png';
import bgshade from "../../assets/bgblur1shade.png";
import Smile from "../../assets/smilemen.png";
import paper1 from "../../assets/paper1.png";
import paper2 from "../../assets/paper2.png";
import blackcover from "../../assets/blackcoverup.png";
import build from "../../assets/buildingwarm.png";
import Button from "../Button/Button";


const Hero = () => {
  return (
    <div className="relative h-[800px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-5">
      <div className='absolute inset-0'>
        <img
          src={bgimg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <img
          src={bgshade}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />
      </div>
        <div className='absolute inset-0'>
        <div className='flex  h-full'>
        <img
          src={paper1}
          alt="Smiling Man"
          className="absolute max-w-sm top-[50%] left-[60%] w-[30%] h-auto object-cover z-5"
        />
        </div>
        <div className='flex  h-full'>
        <img
          src={paper2}
          alt="Smiling Man"
          className="absolute max-w-sm top-[50%] left-[10%] w-[30%] h-auto object-cover z-5"
        />
        </div>
        <div className='hidden md:block absolute top-[45%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-2xl'>
        <h1 className=" text-5xl md:text-8xl lg:text-[200px] font-bold font-BebasNeue text-white text-center whitespace-nowrap drop-shadow-2xl">YOUR COMPANY</h1>
        </div>
        <div className='flex items-center justify-center h-full'>
        <img
          src={Smile}
          alt="Smiling Man"
          className="absolute bottom-0 max-w-xl md:max-w-2xl h-auto z-10"
        />
        </div>
        <div className='flex h-full'>
        <img
          src={blackcover}
          alt="Smiling Man"
          className="absolute bottom-0 w-full z-10"
        />
        </div>
        <div className='flex items-end justify-end '>
        <img
          src={build}
          alt="Smiling Man"
          className="absolute top-60 w-52  right-[10%]  hidden md:block z-10"
        />
        </div>
        <div className='absolute top-[70%] left-[40%] drop-shadow-2xl transform -translate-x-1/2 -translate-y-1/2 z-10  md:hidden'>
        <h1 className=" text-5xl md:text-8xl lg:text-[200px] font-bold font-BebasNeue text-white text-center whitespace-nowrap drop-shadow-2xl ">YOUR COMPANY</h1>
        </div>
        <div className='absolute top-[75%] left-[50%] drop-shadow-2xl transform -translate-x-1/2 -translate-y-1/2 z-10 '>
        <h1 className=" text-5xl md:text-8xl lg:text-[200px] font-bold font-BebasNeue text-white text-center whitespace-nowrap drop-shadow-2xl">OUR RESPONSIBILITY</h1>
        </div>
        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 sm:top-[92%] sm:left-auto sm:right-40 z-20">
          <Button />
        </div>



        <div className='absolute top-[92%] left-[5%] md:left-[10%] md:transform md:-translate-x-1/5 z-20'>
          <p className="text-m font-regular font-BebasNeue text-white text-center md:text-left whitespace-normal">
            We help businesses grow. Our experienced consultants understand <br/>
            today’s market and provide solutions that fit your specific needs.
          </p>
        </div>
        
        </div>
       
      
    </div>
  );
};

export default Hero;
