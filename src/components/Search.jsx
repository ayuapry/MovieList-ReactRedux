import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

export const Search = () => {
  return (
    <div>
        <div className='bg-transparents border border-red-600 rounded-full flex items-center px-2 w-[200px] sm:w-[200px] lg:w-[300px]'>
        <input className='bg-transparent p-2 w-full focus:outline-none text-white' type="text"  placeholder='What do you want to watch?' />
        <AiOutlineSearch  color='white' size={20} />
      </div>
    </div>
  )
}
