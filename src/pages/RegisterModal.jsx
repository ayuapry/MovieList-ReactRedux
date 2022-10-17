import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import axios from 'axios';

export const RegisterModal = ({visible, tutup, tokens, setToken}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [passwordconf, setPasswordconf] = useState('');


    const handleOnClose = (e) => {
        if(e.target.id === 'container') 
        tutup()
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
          const res = await axios.post("https://notflixtv.herokuapp.com/api/v1/users",          
            {
              first_name: firstName,
              last_name: lastName,
              email: email,
              password: password,
              password_confirmation: passwordconf,
            }
          );
          // console.log(res.data.data)
          localStorage.setItem("user", JSON.stringify(res.data.data));
          
          const user = JSON.parse(localStorage.getItem('user'))
          if(user.token){
            setToken(true)
          }else{
            setToken(false)
          }
          setFirstName("");
          setLastName("");
          setPassword("");
          setEmail("");
          setPasswordconf("");
          tutup()

          setTimeout(function () {
            window.location.reload(1);
          }, 1500);
      }catch (error) {
          console.log(error);
      }
    }
  
    if(!visible) return null
  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
        <div className="bg-white p-2 rounded w-[500px]">
            <div className='flex items-center justify-between mb-7 '>
                <p className='font-semibold '>Create Account</p>
                <button onClick={tutup}><AiOutlineClose /></button>
            </div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            type="text"
            name='first_name'
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-400 p-2 rounded-full mb-5"
            placeholder="First Name"
          />
          <input
            type="text"
            name='last_name'
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-400 p-2 rounded-full mb-5"
            placeholder='Last Name'
          />
          <input
            type="email"
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 rounded-full mb-5"
            placeholder='Email Address'
          />
          <input
            type="password"
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 p-2 rounded-full mb-5"
            placeholder='Password'
          />
          <input
            type="password"
            name='password_confirmation'
            onChange={(e) => setPasswordconf(e.target.value)}
            className="border border-gray-400 p-2 rounded-full mb-5"
            placeholder='Password Confirmation'
          />
        </div>
        <div className="flex items-end justify-end text-center">
          <button button onClick={handleSubmit}  className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Register Now</button>
        </div>
        </form>
      </div>
    </div>
  )
}
