import React from 'react';
import Choose from '../../assets/choose.png';
import ToolTip from '../extra/extra';

const Whychooseus = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div>
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5">
          <ToolTip tooltip="we care about you">WHY CHOOSE US</ToolTip>
        </h1>
      </div>
      <div className="relative">
        {/* Image */}
        <div className="w-full flex items-center justify-center">
          <img src={Choose} alt="choose" className="z-0 h-[580px] rounded-lg" />
        </div>
        {/* Content */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-wrap justify-between p-8 z-10">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 p-4 bg-white bg-opacity-90 rounded-lg shadow-md">
            <h2 className="text-purple-500 font-bold mb-2">EXPERTISE AND EXPERIENCE</h2>
            <p className="text-black dark:text-gray-400">Our team comprises seasoned professionals with years of experience across various industries. We bring a wealth of knowledge and proven strategies to help your business thrive.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 p-4 bg-white bg-opacity-90 rounded-lg shadow-md">
            <h2 className="text-purple-500 font-bold mb-2">INNOVATIVE STRATEGIES</h2>
            <p className="text-black dark:text-gray-400">At Wizardhorizon, we pride ourselves on staying ahead of the curve. We leverage the latest tools and trends to provide cutting-edge strategies that drive real results.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 p-4 bg-white bg-opacity-90 rounded-lg shadow-md">
            <h2 className="text-purple-500 font-bold mb-2">TAILORED SOLUTIONS</h2>
            <p className="text-black dark:text-gray-400">We understand that every business is unique. Our approach is customized to meet your specific needs and goals, ensuring that you receive the most effective solutions.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 p-4 bg-white bg-opacity-90 rounded-lg shadow-md">
            <h2 className="text-purple-500 font-bold mb-2">CLIENT-CENTRIC APPROACH</h2>
            <p className="text-black dark:text-gray-400">Your success is our priority. We work closely with you to understand your vision and challenges, fostering a collaborative relationship built on trust and transparency.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 p-4 bg-white bg-opacity-90 rounded-lg shadow-md">
            <h2 className="text-purple-500 font-bold mb-2">COMPREHENSIVE SUPPORT</h2>
            <p className="text-black dark:text-gray-400">From planning to implementation, we offer comprehensive support every step of the way. Our team is dedicated to ensuring a seamless and successful consulting experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
