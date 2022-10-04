import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>MovieList</h1>
        <div>
            <button className='text-white px-6 py-4 bg-transparent rounded-full border-2 border-red-600'>Login</button>
            <button className='bg-red-600 px-6 py-4 rounded-full text-white'>Register</button>
        </div>
    </div>
  )
}
