import React, { useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineEyeInvisible} from 'react-icons/ai'
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
// import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script';

export const LoginModal = ({open, tutup, token, setToken}) => {
  const handleOnClose = (e) => {
    if(e.target.id === 'container') 
    tutup()
}
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await axios.post("https://notflixtv.herokuapp.com/api/v1/users/login",
          {
            email: email,
            password: password,
          }
        );
        // console.log(res.data.data)
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", JSON.stringify(res.data.data.token));
        const user = JSON.parse(localStorage.getItem('user'))
        if(user.token){
          setToken(true)
        }else{
          setToken(false)
        }
        setPassword("");
        setEmail("");
        tutup();
        setTimeout(function () {
          window.location.reload(1);
        }, 1500);
    }catch (error) {
        console.log(error);
    }
  }
  // const clientId = "924057308178-7uggqc3rcedbs3gt561kbm8v57jm41ch.apps.googleusercontent.com"
  // useEffect(() => {
  //   gapi.load("client:auth2",() => {
  //     gapi.auth2.init({clientId:clientId})
  //   })
  // },[])

  // const responseGoogle = (response) => {
  //   // console.log(response);
  //   localStorage.setItem('token', response.accessToken);
  //   localStorage.setItem('user',  JSON.stringify(response.profileObj));
  //   setTimeout(function () {
  //     window.location.reload(1);
  //   }, 10);
  //   tutup()
  // }

if(!open) return null
  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
    <div className="bg-white p-2 rounded w-[500px]">
        <div className='flex items-center justify-between mb-7 '>
            <p className='font-semibold '>Log In to Your Account</p>
            <button onClick={tutup}><AiOutlineClose /></button>
        </div>
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col">
    
      <div className='flex items-center border border-gray-400 p-2 rounded-full mb-5 justify-between'>
      <input required
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full outline-none p-1"
        placeholder='Email Address'
      />
      <AiOutlineMail size={20} className='mr-2' />
      </div>
      <div className='flex items-center border border-gray-400 p-2 rounded-full mb-5 justify-between'>
      <input
        type="password"
        pattern='[a-zA-Z0-9]+' 
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-full outline-none p-1"
        placeholder='Password'
      />
      <AiOutlineEyeInvisible size={20} className='mr-2' />
      </div>
    </div>
    <div className="flex items-end justify-between text-center">
          <GoogleLogin 
            onSuccess={credentialResponse => {
            localStorage.setItem('token', credentialResponse.credential)
            localStorage.setItem('user', JSON.stringify({first_name: 'google user'}))
            const token = localStorage.getItem('token')
            if(token){
              setToken(true);
            }else{
              setToken(false);
            }
            tutup()
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
      <button onClick={handleSubmit} className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Login</button>
    </div>
  </form>
  </div>
</div>

  )
}
