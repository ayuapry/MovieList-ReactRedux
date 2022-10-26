import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Movie } from './Movie'
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { getMovies } from '../store/feature/movieSlice'
import { useDispatch, useSelector } from 'react-redux'


export const Row = ({rowID}) => {
    const {movies} = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const navigate  = useNavigate();
    
    useEffect(() => {
      dispatch(getMovies())
    },[]);
  
    // const [movies, setMovies] = useState([])

    // useEffect (() => {
    //     axios.get(fetchURL).then((response) => {
    //         setMovies(response.data.results);
    //     });
    // },[fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    

  return (
    <div>
        <div className='mr-10 ml-10'>
        <h2 className='text-black font-bold md:text-xl p-4'>{movies.title}</h2>
        <div className="relative flex items-center group ">
            <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40}/>
            <div id={'slider' + rowID } className='w-full h-[400px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' >
                {/* {movies.map((item,index) => (
                    <Movie key={index} item={item} />
                ))} */}
                {movies.map((item) => (
          <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3' onClick={() => navigate(`/details/${item.id}`)}> 
        <img className='w-full h-[350px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.original_title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}<br />{(item?.vote_average).toFixed(1)}/10</p>
            </div>
    </div>
      ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40}/>
        </div>    
        </div>
    </div>
  )

}
