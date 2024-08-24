import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';

const Getform = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    domain: '',
    needs: '',
    description: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get current date and time in the format needed for Google Sheets
    const currentDateTime = new Date().toLocaleString();

    const newRow = {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Domain: formData.domain,
      What_need: formData.needs,
      Description: formData.description,
      Date_Time: currentDateTime,
    };

    const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
    const Form = new FormData();
    for (const key in newRow) {
      Form.append(key, newRow[key]);
    }

    try {
      await fetch(SCRIPT_URL, {
        mode: 'no-cors',
        method: 'POST',
        body: Form,
      });

      setShowSuccessMessage(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        domain: '',
        needs: '',
        description: '',
      });

      // Success popup
      alert('Form submitted successfully! We will catch up with you within 24 hours.');
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
      <Navbar hideDarkMode />
      <div className='relative'>
        <div id='getform' className="h-[900px] sm:h-[800px] overflow-hidden mt-20 sm:mt-5 md:p-16 p-5">
          <form onSubmit={handleSubmit} className="relative z-10 bg-white bg-opacity-75 p-8 rounded-lg">
            <h1 className='sm:text-2xl text-xl font-BebasNeue p-10'>
              Together, We Create the Future You Envision.
            </h1>
            <div className='grid grid-cols-2 gap-3 p-5 pl-10 justify-center items-center'>
              {[
                { label: 'Please enter your Name', name: 'name', type: 'text', placeholder: 'Jibin K Job' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'example@gmail.com' },
                { label: 'Phone', name: 'phone', type: 'number', placeholder: '7305451111' },
                { label: 'Domain', name: 'domain', type: 'text', placeholder: 'www.example.com' },
                { label: 'What You Need', name: 'needs', type: 'text', placeholder: 'logo, website, branding' },
              ].map((input) => (
                <React.Fragment key={input.name}>
                  <h1 className='font-bold'>{input.label}</h1>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                    className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 p-5 bg-gray-200'
                    required={['name', 'email', 'phone', 'needs'].includes(input.name)}
                  />
                </React.Fragment>
              ))}
              <h1 className='font-bold'>Description</h1>
              <textarea
                name='description'
                placeholder='Describe your needs'
                value={formData.description}
                onChange={handleInputChange}
                className='h-10 sm:h-16 w-full sm:w-96 rounded mb-4 p-2 bg-gray-200'
              />
            </div>
            <div className="flex justify-center">
              <Button text="Submit" type="submit" />
            </div>
          </form>

          {showSuccessMessage && (
            <div className="p-4 text-green-800 bg-green-200 rounded-lg">
              Form submitted successfully! We will catch up with you within 24 hours
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Getform;
