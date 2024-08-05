import Logob from '../../assets/logogb.png';

const Footer = () => {
  return (
    <div className="relative h-[450px] overflow-hidden bg-gray-100 dark:bg-black text-white md:p-16 p-9">
      <div className="flex  sm:space-x-10">
        <img src={Logob} alt="WizardHorizon Logo" className="sm:h-64 h-24" />
        <h1 className="sm:text-[210px] text-5xl p-6 font-BebasNeue text-center justify-center text-black dark:text-white">WIZARDHORIZON</h1>
      </div>
      <div className="text-center">
        <p className="max-w-5xl mx-auto mr-5 sm:text-lg text-black dark:text-white">
          We uphold the highest standards of honesty and transparency in all our interactions. We empower businesses to 
          achieve their full potential through strategic insights and actionable solutions.
        </p>
      </div>
      <div className="absolute bottom-2 left-0 right-0 text-center px-4">
        <p className="float-left  text-black dark:text-white">© 2024 wizardhorizon</p>
        <p className="float-right  text-black dark:text-white">help@wizardhorizon.com</p>
      </div>
    </div>
  );
};

export default Footer;
