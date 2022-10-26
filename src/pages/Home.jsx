import React, {useEffect} from 'react'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../store/feature/PopularMovieSlice';
import { Movie } from '../components/Movie'
import { Autoplay, Pagination, Navigation } from "swiper";
import { getGenre } from '../store/feature/GenreSlice'

export const Home = () => {
  const {movies, loading} = useSelector((state) => state.movies);
  const {genre} = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  useEffect(() => {
    dispatch(getGenre())
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
            <Link to='/movies' className=' bg-red-500 hover:bg-red-400 rounded-full hidden md:flex pl-5 py-3 mr-10 w-[170px] text-white font-semibold'>
              See All Movies <AiOutlineArrowRight size={25} className='mr-2' />
            </Link>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={5}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination, Navigation]}
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
        </div>
        <div className='mb-20'>

        <p className='text-black font-bold md:text-xl ml-16'>Browse By Category</p>
        <Swiper
         slidesPerView={6}
         className="mySwiper"
         style={{margin: '4rem 0rem 0rem 4rem'}}
         >
        <div className='flex'>
        {genre.map((item) => (
          <SwiperSlide>
            
            <Link to={`/Genres/${item.name}`} className='relative'>
              <button className='text-red-500 hover:bg-red-400 px-12 py-2 bg-transparent rounded-full border-2 border-red-500'>{item.name}</button>
            </Link>
          </SwiperSlide>
        ))}
        </div>
        </Swiper>
        </div>
        <Footer />
    </div>
  )
}