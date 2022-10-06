import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const Main = () => {
const [movies, setMovies] = useState([]);
const movie  = movies[Math.floor(Math.random() * movies.length)]
const movie1 = movies[Math.floor(Math.random() * movies.length)]
const movie2 = movies[Math.floor(Math.random() * movies.length)]

useEffect (() => {
    axios.get(requests.requestUpcoming).then((response) => {
        setMovies(response.data.results)
    })
}, [])
 
const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[750px] text-white '>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black '></div>
            <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper w-full h-[750px]">
                <SwiperSlide>
                  <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                  <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <p className='text-white text-sm my-4'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white font-semibold'> {truncateString(movie?.overview,200)}</p>
                    <div className='my-4'>
                      <a className=' bg-red-600 rounded-full text-white hover:bg-red-400 hidden md:flex pl-5 py-3 mr-4 w-[170px]' 
                      href={`https://www.youtube.com/results?search_query=${movies.original_title}`}>
                      <AiOutlinePlayCircle size={25} className='mr-2' href={`https://www.youtube.com/results?search_query=${movies.original_title}`} />Watch Trailer 
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${movie1?.backdrop_path}`} alt={movie1?.title} />
                  <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie1?.title}</h1>
                    <p className='text-white text-sm my-4'>Released: {movie1?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white font-semibold'> {truncateString(movie1?.overview,200)}</p>
                    <div className='my-4'>
                      <a className=' bg-red-600 rounded-full text-white hover:bg-red-400 hidden md:flex pl-5 py-3 mr-4 w-[170px]' 
                      href={`https://www.youtube.com/results?search_query=${movies.original_title}`}>
                      <AiOutlinePlayCircle size={25} className='mr-2' href={`https://www.youtube.com/results?search_query=${movies.original_title}`} />Watch Trailer 
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${movie2?.backdrop_path}`} alt={movie2?.title} />
                  <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie2?.title}</h1>
                    <p className='text-white  text-sm my-4'>Released: {movie2?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white font-semibold'> {truncateString(movie2?.overview,200)}</p>
                    <div className='my-4'>
                      <a className=' bg-red-600 rounded-full text-white hover:bg-red-400 hidden md:flex pl-5 py-3 mr-4 w-[170px]' 
                      href={`https://www.youtube.com/results?search_query=${movies.original_title}`}>
                      <AiOutlinePlayCircle size={25} className='mr-2' href={`https://www.youtube.com/results?search_query=${movies.original_title}`} />Watch Trailer 
                      </a>
                    </div>
                  </div>
                </SwiperSlide>  
            </Swiper>
        </div>
    </div>
  )
}
