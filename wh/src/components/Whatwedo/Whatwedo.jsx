import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Gst from '../../assets/gst.png'; 
import TaxP from '../../assets/taxplan.png'
import InternalAudit from '../../assets/internaladuit.png'
import Bookkeeping from '../../assets/bookkeeping.png'
import FinancialM from '../../assets/financialm.png'
import ResearchR from '../../assets/researchreport.png'
import Logod from '../../assets/logodesign.png'
import Webd from '../../assets/webdesign.png'
import DigiM from '../../assets/digitalmark.png'

const services = [
  {
    img: Gst,
    title: 'GST Consulting',
    description:
      'Assist businesses in understanding and complying with Goods and Services Tax (GST) regulations, including registration, filing returns, and optimizing GST input credits.',
  },
  {
    img: TaxP,
    title: 'Tax Planning',
    description:
      'Provide strategic tax planning services to minimize tax liabilities and ensure compliance with tax laws, leveraging deductions, credits, and exemptions.',
  },
  {
    img: InternalAudit,
    title: 'Internal Audit',
    description:
      'Conduct comprehensive internal audits to evaluate the effectiveness of internal controls, risk management, and governance processes, ensuring financial integrity and regulatory compliance',
  },
  {
    img: Bookkeeping,
    title: 'Bookkeeping Services',
    description:
      'Offer a range of bookkeeping services, including managing accounts payable and receivable, reconciling bank statements, and maintaining accurate financial records.',
  },
  {
    img: FinancialM,
    title: 'Financial Management',
    description:
      'Provide expert advice on financial planning, budgeting, forecasting, and cash flow management to help businesses achieve financial stability and growth.',
  },
  {
    img: ResearchR,
    title: 'Research Report',
    description:
      ' Prepare detailed research reports on market trends, financial performance, and industry analysis to support informed decision-making.',
  },
  {
    img: Logod,
    title: 'Logo Designing',
    description:
      'Create unique and memorable logos that capture the essence of your brand and make a lasting impression on your target audience.',
  },
  {
    img: Webd,
    title: 'Website Designing',
    description:
      'Design and develop user-friendly, visually appealing, and responsive websites that enhance your online presence and engage visitors.',
  },
  {
    img: DigiM,
    title: 'Digital Marketing',
    description:
      'Develop and implement comprehensive digital marketing strategies, including SEO, social media marketing, email campaigns, and PPC advertising, to increase brand awareness and drive traffic.',
  },

];

const Whatwedo = () => {
  const scrollRef = useRef(null);

  return (
    <div id='Whatwedo' className="relative overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
      <div>
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue mt-10 text-black dark:text-gray-400 ml-5">
          WHAT WE DO
        </h1>
      </div>
      <div className="items-center text-center sm:text-2xl font-BebasNeue mt-10">
        <h1 className='text-black dark:text-gray-400'>Services</h1>
        <p>
          We provide a comprehensive range of services designed to support your
          financial and branding needs
        </p>
      </div>

      <div className="flex gap-12 overflow-x-auto py-10" ref={scrollRef} style={{ overflow: "scroll" }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex-none p-2 bg-gradient-to-b from-pink-300 to-black h-[320px] w-72 rounded-3xl drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ root: scrollRef, once: true }}
          >
            <img
              src={service.img}
              alt={`${service.title} image`}
              className="h-28 w-full object-cover rounded-t-3xl"
            />
            <div className="text-white p-2 mt-2">
              <h1 className="font-BebasNeue text-2xl">{service.title}</h1>
              <p className="font-Roboto font-bold text-xs">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Whatwedo;