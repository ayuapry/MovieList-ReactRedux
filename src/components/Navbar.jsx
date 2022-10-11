import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { LoginModal } from '../pages/LoginModal'
import { RegisterModal } from '../pages/RegisterModal'

export const Navbar = () => {
  const [logOpenModal, setLogOpenModal] = useState(false)
  const [regOpenModal, setRegOpenModal] = useState(false)
  const handleOnClose = () => setRegOpenModal(false)
  const handleClose = () => setLogOpenModal(false)

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
        <div>
            <button onClick={() => setLogOpenModal(true)} className='text-white hover:bg-red-400 px-8 py-2 mr-2 bg-transparent rounded-full border-2 border-red-500'>Login</button>
            <button onClick={() => setRegOpenModal(true)} className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Register</button>
        </div>
        <LoginModal open={logOpenModal} onClose={handleClose} />
        <RegisterModal visible={regOpenModal} onClose={handleOnClose} />
    </div>
  )
}
