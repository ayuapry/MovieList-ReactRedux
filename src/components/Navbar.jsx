import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

export const Navbar = () => {
  const [search, setSearch]= useState('');
  const navigate = useNavigate();

  const submit  = () => {
    navigate(`/Search/${search}`)
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute text-white'>
        <Link to='/' className='text-red-600 text-6xl font-bold cursor-pointer ml-3'>MovieList</Link>
        <form className='text-white bg-transparents border border-red-600 rounded-full flex items-center px-2 w-[200px] sm:w-[200px] lg:w-[300px] ' autoComplete="off">
             <input 
              type="text"
              placeholder="What do you want to watch?"
              className='bg-transparent p-2 w-full focus:outline-none text-white' 
              name="search"
              onChange={(e) => setSearch(e.target.value)}></input>
              <AiOutlineSearch onClick={submit} color='white' size={20} className='cursor-pointer' />
        </form>
        <div>
            <button className='text-white hover:bg-red-400 px-8 py-2 mr-2 bg-transparent rounded-full border-2 border-red-500'>Login</button>
            <button className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Register</button>
        </div>
    </div>
  )
}
