import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { LoginModal } from '../pages/LoginModal'
import { RegisterModal } from '../pages/RegisterModal'
import { useEffect } from 'react'

export const Navbar = () => {
  const [logOpenModal, setLogOpenModal] = useState(false)
  const [regOpenModal, setRegOpenModal] = useState(false)
  const handleOnClose = () => setRegOpenModal(false)
  const [token, setToken] = useState(false)
  const [tokens, setTokens] = useState(false)
  const user = localStorage.getItem('user');
  const users = localStorage.getItem('users');
  const userData = JSON.parse(user);
  const getdata = JSON.parse(users);

  useEffect(() =>{
    if(userData){
      setToken(true)
    }
  },[token])

  useEffect(() =>{
    if(getdata){
      setTokens(true)
    }
  },[tokens])

  const [search, setSearch]= useState('');
  const navigate = useNavigate();

  const submit  = () => {
    navigate(`/Search/${search}`)
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute text-white'>
        <Link to='/' className='text-red-600 text-5xl font-bold cursor-pointer ml-3'>MovieList</Link>
        <form onSubmit={submit} className='text-white bg-transparents border border-red-600 rounded-full flex items-center px-2 w-[200px] sm:w-[200px] lg:w-[300px] ' autoComplete="off">
             <input 
              type="text"
              placeholder="What do you want to watch?"
              className='bg-transparent p-2 w-full focus:outline-none text-white' 
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              
              ></input>
              <AiOutlineSearch color='white' size={20} className='cursor-pointer' />
        </form>
        {
          (token) ? 
          <div className='flex item-center mr-[10px]'>
            <p className='text-white font-semibold text-3xl px-3 mr-6 py-2'>Welcome, {userData.first_name}</p>
            <img className='rounded-full w-[50px] h-[50px]' src={userData.image} alt='noprofile'/>
          </div>
          :
          <div>
            <div>
                <button onClick={() => setLogOpenModal(true)} className='text-white hover:bg-red-400 px-8 py-2 mr-2 bg-transparent rounded-full border-2 border-red-500'>Login</button>
                <button onClick={() => setRegOpenModal(true)} className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Register</button>
            </div>
            <LoginModal open={logOpenModal} onClose={() => setLogOpenModal(false)} setToken={setToken} />
            <RegisterModal visible={regOpenModal} tutup={handleOnClose} setTokens={setTokens} />
          </div>
        }
    </div>
  )
}
