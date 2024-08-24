import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import { Description } from '@mui/icons-material';

const Getform = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone:'',
    email: '',
    domain: '',
    needs: '',
    description: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    const newRow={
      Name:formData.name,
      Email:formData.email,
      Phone:formData.phone,
      Company_Name:formData.companyName,
      Domain:formData.domain,
      What_need:formData.needs,
      Description:formData.description
    }
    
    const SCRIPT_URL=import.meta.env.VITE_SCRIPT_URL;
    const Form=new FormData();
    Form.append("Name",newRow.Name);
    Form.append("Email",newRow.Email);
    Form.append("Phone",newRow.Phone);
    Form.append("Company_Name",newRow.Company_Name);
    Form.append("Domain",newRow.Domain);
    Form.append("What_need",newRow.What_need);
    Form.append("Description",newRow.Description);
    const res=await fetch(SCRIPT_URL,{
      mode:"no-cors",
      method:"POST",
      body: Form
    })
    setShowSuccessMessage(true);


    setFormData({
      name: '',
      companyName: '',
      email: '',
      phone: '',
      domain: '',
      needs: '',
      description: ''
    });

    
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
              <h1 className='font-bold'>Please enter your Name</h1>
              <input
                type='text'
                name='name'
                placeholder='Jibin K Job'
                value={formData.name}
                onChange={handleInputChange}
                className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 p-5 bg-gray-200'
                required
              />
              <h1 className='font-bold'>Company Name</h1>
              <input
                type='text'
                name='companyName'
                placeholder='WizardHorizon'
                value={formData.companyName}
                onChange={handleInputChange}
                className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 p-5 bg-gray-200'
                required
              />
              <h1 className='font-bold'>Email</h1>
              <input
                type='email'
                name='email'
                placeholder='example@gmail.com'
                value={formData.email}
                onChange={handleInputChange}
                className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 p-5 bg-gray-200'
                required
              />
              <h1 className='font-bold'>Phone</h1>
              <input
                type='number'
                name='phone'
                placeholder='7305451111'
                value={formData.phone}
                onChange={handleInputChange}
                className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 p-5 bg-gray-200'
                required
              />
              <h1 className='font-bold'>Domain</h1>
              <input
                type='text'
                name='domain'
                placeholder='www.example.com'
                value={formData.domain}
                onChange={handleInputChange}
                className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 p-5 bg-gray-200'
              />
              <h1 className='font-bold'>What You Need</h1>
              <input
                type='text'
                name='needs'
                placeholder='logo, website, branding'
                value={formData.needs}
                onChange={handleInputChange}
                className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 p-5 bg-gray-200'
                required
              />
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
              <Button text="Submit" />
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
