import React, { useState } from 'react';
import Contactus from '../../assets/contactus.png';
import Button from '../Button/Button';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';


const Meetus = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    // Clear previous messages
    setSuccessMessage('');
    setErrorMessage('');
  
    // Validate input fields
    if (!email.trim() || !message.trim()) {
      setErrorMessage('Please fill in both the email and message fields.');
      return;
    }
  
    console.log('pointing to data');
    
    // Get current date and time in the format needed for Google Sheets
    const currentDateTime = new Date().toLocaleString();
  
    const newRow = {
      Email: email,
      Message: message,
      Date_Time: currentDateTime,
    };
  
    const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL; // Ensure this is set in your environment variables
    const Form = new FormData();
    Form.append('Email', newRow.Email);
    Form.append('Description', newRow.Message);
    Form.append('Date_Time', newRow.Date_Time);
  
    try {
      await fetch(SCRIPT_URL, {
        mode: 'no-cors',
        method: 'POST',
        body: Form,
      });
  
      setSuccessMessage('Form submitted successfully! We will catch up with you within 24 hours.');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error during form submission:', error);
      setErrorMessage('Failed to submit message.');
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
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 sm:gap-0 gap-10 ">
        <div className="ml-5 dark:hover:text-white  hover:text-gray-500">
          <div className="font-BebasNeue sm:text-3xl mb-2">EMAIL</div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="h-10 sm:h-12 w-full sm:w-96 bg-gray-200 rounded p-2 mb-4"
            required
          />

          <div className="font-BebasNeue sm:text-3xl mb-2">PUT MESSAGE</div>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            className="h-20 sm:h-28 w-full sm:w-96 text-black bg-gray-200 rounded p-2 mb-4"
            required
          ></textarea>

          {errorMessage && (
            <div className="text-red-600 font-BebasNeue mb-4">
              {errorMessage}
            </div>
          )}

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
          <img src={Contactus} alt="contact image" className="w-full h-auto" />
          <div className="mt-5 text-center sm:text-left">
            <h1 className='sm:text-2xl font-BebasNeue flex items-center sm:justify-start justify-center  dark:hover:text-white  hover:text-gray-500'>
              <LocationOnIcon className="text-red-500 w-8 h-8" />
              IndraNagar | Bangalore, India
            </h1>
            <h1 className='sm:text-2xl font-BebasNeue flex items-center sm:justify-start justify-center  dark:hover:text-white  hover:text-gray-500' > <CallIcon className='w-8 h-8' /> 62386 63883</h1>
            <h1 className='sm:text-2xl font-BebasNeue mt-1  dark:hover:text-white  hover:text-gray-500'>Stay Connected with WizardHorizon</h1>
            <div className='flex justify-center sm:justify-start mt-2  '>
            <a href='https://www.linkedin.com/in/wizard-horizon-19a698325'>  <LinkedInIcon className='m-2 w-8 h-8  dark:hover:text-white  hover:text-gray-500' /> </a> 
             <a href='https://www.facebook.com/profile.php?id=61564983183570'>  <FacebookSharpIcon className='m-2 w-8 h-8 dark:hover:text-white  hover:text-gray-500' /> </a>
             <a href='https://x.com/WizardHorizon'>  <XIcon className='m-2 w-8 h-8  dark:hover:text-white  hover:text-gray-500' /> </a> 
             <a href='https://www.instagram.com/wizardhorizon/'>  <InstagramIcon className='m-2 w-8 h-8  dark:hover:text-white  hover:text-gray-500' /> </a>
            </div>
            <p className='font-Roboto font-bold mt-3  dark:hover:text-white  hover:text-gray-500'>Follow us today and be a part of the WizardHorizon journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetus;
