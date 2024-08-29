import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ImageCard from '../extra/ImageCard';
import bgimag from '../../assets/vyshnavimg.png';
import bgimj from '../../assets/jibinimg.png';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import bgimga from '../../assets/yaduimga.png';

const Aboutus = () => {
  return (
    <>
      <div className="bg-gray-800 text-gray-200 min-h-screen sm:bg-gradient-to-b sm:from-gray-900 sm:to-gray-800">
        <Navbar hideDarkMode customStyle={{ backgroundImage: 'url(path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container mx-auto px-5 md:px-52 py-10">
          {/* About Us content */}
          <div className="mt-24">
            <h1 className="text-3xl font-BebasNeue">About Us</h1>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-BebasNeue">Welcome to WizardHorizon!</h3>
            <p className="text-lg mt-4 font-regular font-Roboto text-white text-justify">
              At WizardHorizon, we are dedicated to transforming the way businesses operate and thrive in the digital age. As a premier business consulting firm, we leverage our expertise to provide innovative solutions that drive growth and efficiency for our clients.
            </p>
          </div>
          {/* Other content sections */}
          <div className="mt-10">
            <h3 className="text-xl font-BebasNeue">Our Story</h3>
            <p className="text-lg mt-4 font-regular font-Roboto text-white text-justify">
              Founded on the principles of innovation, integrity, and impact, WizardHorizon was established to bridge the gap between business strategy and technology. Our founders, seasoned experts in business consulting and IT services, recognized the need for a holistic approach that integrates technology with business strategy to drive meaningful results. From our humble beginnings, we have grown into a dynamic team of professionals who share a common goal: to empower businesses to thrive in the digital era.
            </p>
          </div>
          {/* More content sections */}
          <div className="mt-10">
            <h3 className="text-xl font-BebasNeue">Our Vision</h3>
            <p className="text-lg mt-4 font-regular font-Roboto text-white text-justify">
              We envision a world where businesses are not just adapting to change but driving it. A world where technology and strategic thinking converge to create innovative solutions that enhance customer experiences, streamline operations, and fuel growth. At WizardHorizon, we are committed to making this vision a reality for our clients.
            </p>
          </div>
          {/* Our Approach section */}
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
        {/* Our Team Section */}
        <div>
          <h1 className='text-white bg-clip-text text-center text-3xl font-BebasNeue'> " Our Team " </h1>
          <div className="flex flex-wrap justify-center gap-4 p-4 mt-10">
            <ImageCard imgSrc={bgimj}>
              <h3 className="text-lg md:text-xl font-BebasNeue">Jibin K Job</h3>
              <h2 className="text-sm md:text-lg font-semibold text-gray-200">FOUNDER</h2>
              <p className="text-xs md:text-sm">Bachelor of Science in Electronics, Mathematics, and Computer Science</p>
              <a href="https://www.linkedin.com/in/jibinkjob170600" target="_blank" rel="noopener noreferrer">
                <OpenInNewIcon className='text-white' />  LinkedIn
              </a>
            </ImageCard>

            <ImageCard imgSrc={bgimag}>
              <h3 className="text-lg md:text-xl font-BebasNeue">Vyshnav MV</h3>
              <h2 className="text-sm md:text-lg font-semibold text-gray-200">CEO</h2>
              <p className="text-xs md:text-sm">Masters in Computer Application</p>
              <a href='https://www.linkedin.com/in/vyshnav-mv-b138b4191' target="_blank" rel="noopener noreferrer">
                <OpenInNewIcon className='text-white' /> LinkedIn
              </a>
            </ImageCard>

            <ImageCard imgSrc={bgimga}>
              <h3 className="text-lg md:text-xl font-BebasNeue">Yadu Krishna</h3>
              <h2 className="text-sm md:text-lg font-semibold text-gray-200">CFO</h2>
              <p className="text-xs md:text-sm">Bachelor of Commerce, CA Intermediate Qualified</p>
              <a href="https://www.linkedin.com/in/yadu-krishna-v" target="_blank" rel="noopener noreferrer">
                <OpenInNewIcon className='text-white' />  LinkedIn
              </a>
            </ImageCard>
          </div>
        </div>
        {/* Footer Section */}
        <Footer bgColor='bg-gray-800' textC='white' />
      </div>
    </>
  );
}

export default Aboutus;
