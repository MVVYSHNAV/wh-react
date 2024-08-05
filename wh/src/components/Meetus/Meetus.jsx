import Contactus from '../../assets/contactus.png'
import Button from '../Button/Button';
const Meetus = () => {
  return (
    <div className="relative h-[600px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9" >
         <div>
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5 mt-10">
        MEET US 
        </h1>
      </div>
    <div className="grid grid-cols-2 mt-10" >
        <div className='ml-5 '>
            
            <div className='font-BebasNeue sm:text-3xl'>EMAIL</div>
            <div className='h-6 sm:h-12 w-32 sm:w-96 bg-gray-200 rounded'></div>
            
            <div className='font-BebasNeue sm:text-3xl sm:mt-8 mt-6'>PUT MESSAGE</div>
            <div className=' h-16 sm:h-28 w-32 sm:w-96 bg-gray-200 rounded'></div>
            <div className=" float-right transform -translate-x-1/2 z-20">
        <Button text="Submit"/>
      </div>
        </div>
        
        <div>
            <img src={Contactus} alt="contact"/>
            <div className='mt-5'>
            <h1> Bangalore</h1>
            <h1>Stay Connected with WizardHorizon </h1>
            <div> 

            </div>
            <p>Follow us today and be a part of the WizardHorizon journey </p>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Meetus