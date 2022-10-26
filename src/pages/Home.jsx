import React, {useEffect} from 'react'
import { Main } from '../components/Main'
import { Row } from '../components/Row'
import { Footer } from '../components/Footer'
import requests from '../Requests'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../store/feature/movieSlice';
import { Movie } from '../components/Movie'

export const Home = () => {
  const {movies, loading} = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  
  useEffect(() => {
    dispatch(getMovies())
  },[]);

  if(loading){
    return <h2>Loading</h2>
  }

  return (
    <div>
        <Main />
        <div className='flex items-center justify-between pt-5'>
          <p className='text-black font-bold md:text-xl p-4 ml-12'>Popular Movie</p>
          <div className='flex'>
            <Link to='/Genres' className='bg-red-500 hover:bg-red-400 rounded-full hidden md:flex pl-5 py-3 mr-5 w-[180px] text-white font-semibold '>Browse By Category</Link>
            <Link to='/movies' className=' bg-red-500 hover:bg-red-400 rounded-full hidden md:flex pl-5 py-3 mr-10 w-[170px] text-white font-semibold'>
              See All Movies <AiOutlineArrowRight size={25} className='mr-2' />
            </Link>
          </div>
        </div>
        {/* <Row rowID='1' title='' fetchURL={movieSlice}  /> */}
        {/* <Row rowID='2' title='Top Rated Movie' fetchURL={requests.requestTopRated} />
        <Row rowID='3' title='Up Coming Movie' fetchURL={requests.requestUpcoming} />
        <Row rowID='4' title='Adventure Movie' fetchURL={requests.requestAdventure} />
        <Row rowID='5' title='Family Movie' fetchURL={requests.requestFamily} />
        <Row rowID='6' title='Horor Movie' fetchURL={requests.requestHoror} /> */}
        <Swiper
        slidesPerView={5}
        className="mySwiper"
        style={{margin: '1rem 3rem 4rem 4rem'}}
        >
        {movies && movies.map(item => (
          <SwiperSlide>
            <Movie
              key={item.id}
              item={item}
              onClick={() => navigate(`/${item.original_title}`)}
            />
          </SwiperSlide>
        ))}
        </Swiper>
        <Footer />
    </div>
  )
}
