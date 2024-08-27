import React from 'react';
import Navbar from '../Navbar/Navbar';

const Aboutus = () => {
  return (
    <>
      <div className="bg-gray-800 text-gray-200 min-h-screen">
        <Navbar hideDarkMode />
        <div className="container mx-auto px-5 md:px-16 py-10">
          <div className="mt-12">
            <h1 className="text-3xl font-BebasNeue">About Us</h1>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-BebasNeue">Welcome to WizardHorizon!</h3>
            <p className="text-lg mt-4 font-regular font-Roboto text-white text-justify">
              At WizardHorizon, we are dedicated to transforming the way businesses operate and thrive in the digital age. As a premier business consulting firm, we leverage our expertise to provide innovative solutions that drive growth and efficiency for our clients.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-BebasNeue">Our Story</h3>
            <p className="text-lg mt-4 font-regular font-Roboto text-white text-justify">
              Founded on the principles of innovation, integrity, and impact, WizardHorizon was established to bridge the gap between business strategy and technology. Our founders, seasoned experts in business consulting and IT services, recognized the need for a holistic approach that integrates technology with business strategy to drive meaningful results. From our humble beginnings, we have grown into a dynamic team of professionals who share a common goal: to empower businesses to thrive in the digital era.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-BebasNeue">Our Vision</h3>
            <p className="text-lg mt-4 font-regular font-Roboto text-white text-justify">
              We envision a world where businesses are not just adapting to change but driving it. A world where technology and strategic thinking converge to create innovative solutions that enhance customer experiences, streamline operations, and fuel growth. At WizardHorizon, we are committed to making this vision a reality for our clients.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-BebasNeue">Our Approach</h3>
            <p className="text-lg mt-4 font-regular font-Roboto text-white text-justify">
              At WizardHorizon, we believe that success is a journey, not a destination. Our approach is centered around collaboration, innovation, and continuous improvement. We take the time to understand your business, your challenges, and your goals. This allows us to develop solutions that are not only effective but also sustainable.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Client-Centric Focus: Your success is our success. We are committed to building long-term relationships with our clients based on trust, transparency, and mutual respect.</li>
              <li>Agile Methodology: In a fast-paced world, agility is key. We use agile methodologies to deliver solutions quickly and efficiently, allowing us to adapt to changing needs and priorities.</li>
              <li>Data-Driven Decisions: We leverage data and analytics to inform our strategies, ensuring that our decisions are based on insights and evidence, not assumptions.</li>
            </ul>
          </div>
        </div>
            <div>
                  
            </div>
      </div>
    </>
  );
}

export default Aboutus;
