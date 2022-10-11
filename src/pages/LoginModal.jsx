import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

export const LoginModal = ({open, onClose}) => {
  const handleClose = (e) => {
    if(e.target.id === 'container') 
    onClose()
}
if(!open) return null
  return (
    <div id='container' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
    <div className="bg-white p-2 rounded w-[500px]">
        <div className='flex items-center justify-between mb-7 '>
            <p className='font-semibold '>Log In to Your Account</p>
            <button onClick={onClose}><AiOutlineClose /></button>
        </div>

    <div className="flex flex-col">
      <input
        type="email"
        className="border border-gray-400 p-2 rounded-full mb-5"
        placeholder='Email Address'
      />
      <input
        type="password"
        className="border border-gray-400 p-2 rounded-full mb-5"
        placeholder='Password'
      />
    </div>
    <div className="flex items-end justify-end text-center">
      <button className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Login</button>
    </div>
  </div>
</div>
  )
}
