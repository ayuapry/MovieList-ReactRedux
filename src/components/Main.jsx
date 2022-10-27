import React, { useEffect } from 'react'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from 'react-redux';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getMoviesMain } from '../store/feature/MainSlice';

export const Main = () => {
const {main} = useSelector((state) => state.main)
const dispatch = useDispatch();

const movie  = main[Math.floor(Math.random() * main.length)]
const movie1 = main[Math.floor(Math.random() * main.length)]
const movie2 = main[Math.floor(Math.random() * main.length)]

useEffect(() => {
    dispatch(getMoviesMain())
}, [dispatch]);
 
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
            <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper w-full h-[750px]">
                <SwiperSlide>
                  <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                  <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <p className='text-white text-sm my-4'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white font-semibold'> {truncateString(movie?.overview,200)}</p>
                    <div className='my-4'>
                      <a className=' bg-red-600 rounded-full text-white hover:bg-red-400 hidden md:flex pl-5 py-3 mr-4 w-[170px]' 
                      href={`https://www.youtube.com/results?search_query=${movie?.original_title}`}>
                      <AiOutlinePlayCircle size={25} className='mr-2' href={`https://www.youtube.com/results?search_query=${movie?.original_title}`} />Watch Trailer 
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
                      href={`https://www.youtube.com/results?search_query=${movie1?.original_title}`}>
                      <AiOutlinePlayCircle size={25} className='mr-2' href={`https://www.youtube.com/results?search_query=${movie1?.original_title}`} />Watch Trailer 
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
                      href={`https://www.youtube.com/results?search_query=${movie2?.original_title}`}>
                      <AiOutlinePlayCircle size={25} className='mr-2' href={`https://www.youtube.com/results?search_query=${movie2?.original_title}`} />Watch Trailer 
                      </a>
                    </div>
                  </div>
                </SwiperSlide>  
            </Swiper>
        </div>
    </div>
  )
}
