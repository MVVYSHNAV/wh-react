import Contactus from '../../assets/contactus.png'
const Meetus = () => {
  return (
    <div className="relative h-[800px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9" >
         <div>
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5 mt-10">
        MEET US 
        </h1>
      </div>
    <div className="grid grid-cols-2 mt-10" >
        <div className='ml-5 '>
            
            <div className='font-BebasNeue sm:text-3xl'>EMAIL</div>
            <div className='h-6 sm:h-12 w-32 sm:w-96 bg-gray-200 rounded-full'></div>
            
            <div className='font-BebasNeue sm:text-3xl'>PUT MESSAGE</div>
            <div className=' h-6 sm:h-12 w-32 sm:w-96 bg-gray-200 rounded-full'></div>
        </div>
        <div>
            <img src={Contactus} alt="contact"/>
        </div>
    </div>
    </div>
  )
}

export default Meetus