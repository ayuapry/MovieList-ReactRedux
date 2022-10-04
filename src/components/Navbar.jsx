import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer ml-3'>MovieList</h1>
        <div>
            <button className='text-white px-8 py-2 mr-2 bg-transparent rounded-full border-2 border-red-500'>Login</button>
            <button className='bg-red-600 px-8 py-2 rounded-full text-white'>Register</button>
        </div>
    </div>
  )
}
