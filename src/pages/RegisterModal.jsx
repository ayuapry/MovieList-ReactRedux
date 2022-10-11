import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

export const RegisterModal = ({visible, onClose}) => {
    const handleOnClose = (e) => {
        if(e.target.id === 'container') 
        onClose()
    }
    if(!visible) return null
  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
        {/* <div className="bg-white p-2 rounded text-black">modal
        <button onClick={onClose}>X</button>
        </div> */}
        <div className="bg-white p-2 rounded w-[500px]">
            <div className='flex items-center justify-between mb-7 '>
                <p className='font-semibold '>Create Account</p>
                <button onClick={onClose}><AiOutlineClose /></button>
            </div>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-400 p-2 rounded-full mb-5"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-gray-400 p-2 rounded-full mb-5"
            placeholder='Last Name'
          />
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
          <input
            type="password"
            className="border border-gray-400 p-2 rounded-full mb-5"
            placeholder='Password Confirmation'
          />
        </div>
        <div className="flex items-end justify-end text-center">
          {/* <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button> */}
          <button className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Register Now</button>
        </div>
      </div>
    </div>
  )
}
