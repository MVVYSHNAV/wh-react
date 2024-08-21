import React from 'react'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import Logo from '../../assets/logogb.png'

const Getform = () => {
  return (
    <>
      <Navbar hideDarkMode />
      <div className='relative'>
        <div
          id='getform'
          className="h-[900px] sm:h-[800px] overflow-hidden mt-20 sm:mt-5 md:p-16 p-5 "
        >
          <div className="relative z-10 bg-white bg-opacity-75 p-8 rounded-lg">
            <h1 className='sm:text-2xl text-xl font-BebasNeue p-10'>
              Together, We Create the Future You Envision.
            </h1>
            <div className='grid grid-cols-2 gap-3 p-5 pl-10 justify-center items-center'>
              <h1 className='font-bold'>Please enter your Name</h1>
              <input
                placeholder='Jibin K Job'
                className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 bg-gray-200'
              />
              <h1 className='font-bold'>Company Name</h1>
              <input
                placeholder='WizardHorizon'
                className='h-8 sm:h-10 w-full sm:w-96 rounded  mb-4 bg-gray-200'
              />
              <h1 className='font-bold'>Email</h1>
              <input
                placeholder='example@gmail.com'
                className='h-8 sm:h-10 w-full sm:w-96 rounded  mb-4 bg-gray-200'
              />
              <h1 className='font-bold'>Domain</h1>
              <input
                placeholder='www.example.com'
                className='h-8 sm:h-10 w-full sm:w-96 rounded mb-4 bg-gray-200'
              />
              <h1 className='font-bold'>What You Need</h1>
              <input
                placeholder='logo, website, branding'
                className='h-8 sm:h-10 w-full sm:w-96 rounded p-2 mb-4 bg-gray-200'
              />
              <h1 className='font-bold'>Description</h1>
              <textarea
                className='h-10 sm:h-16 w-full sm:w-96 rounded p-2 mb-4 bg-gray-200'
              />
            </div>
            <div className="flex justify-center">
              <Button text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Getform
