import React from 'react'
import { Search } from './Search'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer ml-3'>MovieList</h1>
        <div>
          <Search />
        </div>
        <div>
            <button className='text-white hover:bg-red-400 px-8 py-2 mr-2 bg-transparent rounded-full border-2 border-red-500'>Login</button>
            <button className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Register</button>
        </div>
    </div>
  )
}
