import React from 'react'

export const Hero = ({title}) => {
  return (
    <div className='max-w-[1640px] mx-auto relative '>
        <div className='max-h-[500px] relative '>
        {/* overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center' >
            {/* <h3 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-red-300'>Search</span>Results</h3> */}
        </div>
        <img className='w-full max-h-[350px] object-cover' src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='absolute w-full top-[20%] p-4 md:p-8 '>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-40'>Results for "{title }"</h1>
        </div>
        </div>
    </div>
  )
}
