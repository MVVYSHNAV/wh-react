import React from 'react'

const Whatwedo = () => {
  return (
    <div className="relative h-[800px] overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-gray-400 md:p-16 p-9">
    <div>
      <h1 className="text-xl md:text-2xl font-bold font-BebasNeue text-black dark:text-gray-400 ml-5 ">
        WHAT WE DO
      </h1>
    </div>
    <div className="flex mt-10 space-x-4">
        <div className="flex-1 h-96 w-96 bg-gradient-to-b from-pink-500 to-purple-600"></div>
        <div className="flex-1 h-64 bg-gradient-to-b from-purple-600 to-pink-500"></div>
        <div className="flex-1 h-64 bg-gradient-to-b from-purple-600 to-pink-500"></div>
        <div className="flex-1 h-64 bg-gradient-to-b from-purple-600 to-pink-500"></div>
        <div className="flex-1 h-64 bg-gradient-to-b from-purple-600 to-pink-500"></div>
      </div>
    </div>
  )
}

export default Whatwedo