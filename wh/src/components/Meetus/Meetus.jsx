import React, { useState } from 'react';
import Contactus from '../../assets/contactus.png';
import Button from '../Button/Button';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Meetus = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        setEmail('');
        setMessage('');
      } else {
        setSuccessMessage('Failed to submit message.');
      }
    } catch (error) {
      setSuccessMessage('Failed to submit message.');
    }
  };

  return (
    <div
      id="Meetus"
      className="relative h-auto overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9"
    >
      <div>
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5 mt-10">
          MEET US
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:gap-0 gap-10">
        <div className="ml-5">
          <div className="font-BebasNeue sm:text-3xl mb-2">EMAIL</div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="h-10 sm:h-12 w-full sm:w-96 bg-gray-200 rounded p-2 mb-4"
          />

          <div className="font-BebasNeue sm:text-3xl mb-2">PUT MESSAGE</div>
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            className="h-20 sm:h-28 w-full sm:w-96 bg-gray-200 rounded p-2 mb-4"
          ></textarea>

          <div className="mt-5 flex justify-center sm:justify-start">
            <Button text="Submit" onClick={handleSubmit} />
          </div>
          {successMessage && (
            <div className="mt-4 text-green-600 font-BebasNeue">
              {successMessage}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <img src={Contactus} alt="contact" className="w-full h-auto" />
          <div className="mt-5 text-center sm:text-left">
            <h1 className='sm:text-2xl font-BebasNeue flex items-center sm:justify-start justify-center'>
              <LocationOnIcon className="text-red-500 w-8 h-8" />
              IndraNagar | Bangalore, India
            </h1>
            <h1 className='sm:text-2xl font-BebasNeue mt-5'>Stay Connected with WizardHorizon</h1>
            <div className='flex justify-center sm:justify-start mt-2'>
              <FacebookSharpIcon className='m-2 w-8 h-8' />
              <LinkedInIcon className='m-2 w-8 h-8' />
              <XIcon className='m-2 w-8 h-8' />
              <InstagramIcon className='m-2 w-8 h-8' />
              <WhatsAppIcon className='m-2 w-8 h-8' />
            </div>
            <p className='font-Roboto font-bold mt-3'>Follow us today and be a part of the WizardHorizon journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetus;
