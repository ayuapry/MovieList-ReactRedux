import React, { useEffect } from 'react'
import { Movie } from '../components/Movie';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from '../store/feature/MovieSlice';

export const AllMovies = () => {
  const {allmovies, loading} = useSelector((state) => state.allmovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies())
  },[]);  

  if(loading){
    return <h2>Loading</h2>
  }  
  return (
    <div>
        <Navbar />
        <Hero />
        {allmovies && allmovies.map((item, index) => (
            <div className='w-[200px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-0 mt-20 ml-5'>
            <Movie key={index} item={item} />
          </div>
          ))}
        <Footer />
    </div>
  )
}
