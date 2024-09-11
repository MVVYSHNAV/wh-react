import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

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

      alert('Form submitted successfully! We will catch up with you within 24 hours.');
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
      <Navbar hideDarkMode customStyle={{ backgroundImage: 'url(path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="bg-gray-800 min-h-screen flex flex-col items-center pt-20">
        <div className="w-full max-w-4xl text-white bg-gray-700 bg-opacity-95 rounded-lg p-8 md:p-20 m-5">
          <form onSubmit={handleSubmit} className="space-y-8">
            <h1 className="text-xl sm:text-2xl font-BebasNeue text-center mb-5">
              Together, We Create the Future You Envision.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Please enter your Name', name: 'name', type: 'text', placeholder: 'Jibin K Job' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'example@gmail.com' },
                { label: 'Phone', name: 'phone', type: 'number', placeholder: '7305451111' },
                { label: 'Domain', name: 'domain', type: 'text', placeholder: 'finance,IT,Graphic' },
                { label: 'What You Need', name: 'needs', type: 'text', placeholder: 'logo, website, branding' },
              ].map((input) => (
                <React.Fragment key={input.name}>
                  <label className="font-bold">{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded p-2 bg-gray-200 text-black"
                    required={['name', 'email', 'phone', 'needs'].includes(input.name)}
                  />
                </React.Fragment>
              ))}
              <label className="font-bold">Description</label>
              <textarea
                name="description"
                placeholder="Describe your needs"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full h-20 md:h-24 rounded p-2 text-black bg-gray-200"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button text="Submit" type="submit" />
            </div>
          </form>

          {showSuccessMessage && (
            <div className="mt-6 p-4 text-green-800 bg-green-200 rounded-lg text-center">
              Form submitted successfully! We will catch up with you within 24 hours.
            </div>
          )}
        </div>
      </div>
      <Footer bgColor="bg-gray-800" textC="text-white" />
    </>
  );
};

export default Getform;
