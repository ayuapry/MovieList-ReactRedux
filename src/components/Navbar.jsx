import React from 'react'
import { Search } from './Search'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to='/' className='text-red-600 text-4xl font-bold cursor-pointer ml-3'>MovieList</Link>
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
