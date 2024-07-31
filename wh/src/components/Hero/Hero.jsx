import bgimg from '../../assets/bgblur1.png';
import bgshade from "../../assets/bgblur1shade.png";
import Smile from "../../assets/smilemen.png";
import Intro from "./intro";

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
        <img
          src={Smile}
          alt="Smiling Man"
          className="absolute bottom-0 right-0 w-[30%] h-auto object-cover z-10"
        />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white text-6xl font-bold mb-4">Your Company</h1>
        <h2 className="text-white text-4xl font-bold mb-8">Our Responsibility</h2>
        <p className="text-white text-lg mb-8 max-w-md">
          We help businesses grow. Our experienced consultants understand today's market and provide solutions that fit your specific needs.
        </p>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
          Get a Seat
        </button>
      </div>
      <Intro />
    </div>
  );
};

export default Hero;
