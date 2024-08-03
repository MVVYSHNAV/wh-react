import Choose from '../../assets/choose.png'

const Whychooseus = () => {
  return (
    <div className="relative h-[800px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
        <div>
        <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5 ">
          WHY CHOOSE US
        </h1>
      </div>
      {/*   */}
      <div className='w-full  flex items-center justify-center  ' >
        <img src={Choose} alt="choose" className='z-0 '/>
      </div>
    </div>
  )
}

export default Whychooseus