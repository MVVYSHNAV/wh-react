import Workweb from '../../assets/workweb.png';
import Workdoc from '../../assets/workdoc.png';

const Ourworks = () => {
  return (
    <div id="Ourworks" className="relative h-[850px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5">
          OUR WORKS
        </h1>
      </div>
      <div className="grid sm:grid-cols-12 gap-4 mt-8 w-full h-[601px] p-5">
        <div className="bg-violet-600 sm:col-span-7 h-100 hover:bg-violet-300 flex flex-col items-start justify-center">
          <div className="z-20 p-5">
            <img src={Workdoc} alt="Documents" className="shadow-2xl w-full" />
          </div>
          <div className="p-5">
            <h1 className="text-3xl text-black dark:text-white font-BebasNeue tracking-widest whitespace-normal drop-shadow-xl">
              Documents
            </h1>
          </div>
        </div>
        <div className="bg-violet-600 sm:col-span-5 shadow-2xl hover:bg-violet-300 flex flex-col items-start justify-start">
          <div className="z-20 p-5">
            <img
              src={Workweb}
              alt="Web Design"
              className="shadow-2xl w-full h-[200px] sm:h-[505px] object-cover"
            />
          </div>
          <div className="p-5">
            <h1 className="text-3xl text-black dark:text-white font-BebasNeue tracking-widest whitespace-normal drop-shadow-xl">
              Web Design
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourworks;
