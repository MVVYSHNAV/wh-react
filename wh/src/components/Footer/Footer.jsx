import Logob from '../../assets/logogb.png';

const Footer = () => {
  return (
    <div className="relative h-[310px] sm:h-[440px] overflow-hidden bg-gray-100 dark:bg-gray-950 text-white md:p-16 p-9">
      <div className="flex items-center sm:space-x-10">
        <img src={Logob} alt="WizardHorizon Logo" className="md:h-40 lg:h-60 h-20" />
        <h1 className="text-5xl md:text-[96px] xl:text-[200px] font-BebasNeue text-black dark:text-white">WIZARDHORIZON</h1>
      </div>
      <div className="mt-6 text-right">
        <p className="sm:max-w-4xl sm:mx-auto font-Roboto sm:mr-28 sm:text-lg text-black text-justify dark:text-white">
          We uphold the highest standards of honesty and transparency in all our interactions. We empower businesses to
          achieve their full potential through strategic insights and actionable solutions.
        </p>
      </div>
      <div className="absolute bottom-2 left-0 right-0 text-center px-4">
        <p className="float-left text-black dark:text-white">© 2024 wizardhorizon</p>
        <p className="float-right text-black dark:text-white">help@wizardhorizon.com</p>
      </div>
    </div>
  );
};

export default Footer;
