import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import axios from 'axios';

export const LoginModal = ({open, onClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = (e) => {
    if(e.target.id === 'container') 
    onClose()
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await axios.post("https://notflixtv.herokuapp.com/api/v1/users/login",
          {
            email: email,
            password: password,
          }
        );
        console.log(res.data.data)
        localStorage.setItem("user", JSON.stringify(res.data.data.token));
        setPassword("");
        setEmail("");
    }catch (error) {
        console.log(error);
    }
  }

if(!open) return null
  return (
    <div id='container' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
    <div className="bg-white p-2 rounded w-[500px]">
        <div className='flex items-center justify-between mb-7 '>
            <p className='font-semibold '>Log In to Your Account</p>
            <button onClick={onClose}><AiOutlineClose /></button>
        </div>
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col">
      <input required
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-400 p-2 rounded-full mb-5"
        placeholder='Email Address'
      />
      <input
        type="password"
        pattern='[a-zA-Z0-9]+' 
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-400 p-2 rounded-full mb-5"
        placeholder='Password'
      />
    </div>
    <div className="flex items-end justify-end text-center">
      <button onClick={handleSubmit} className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Login</button>
    </div>
    </form>
  </div>
</div>
  )
}
