import React, { useEffect} from 'react'
import { Navbar } from '../components/Navbar'
import {Footer} from '../components/Footer'
import { useParams } from 'react-router-dom';
import {AiOutlinePlayCircle, AiFillStar} from 'react-icons/ai'
import { Credits } from '../components/Credits';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../store/feature/DetailsSlice';

export const Details = () => {
    const {id} = useParams();
    const {details} = useSelector((state) => state.details)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(id))
    }, []);
    
    return (
    <div>
        <Navbar />
        
        <div className='w-full h-[750px] text-white'>        
            <div className='w-full h-full'>
            <div className='absolute w-full h-[750px] bg-gradient-to-r from-black '></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} alt={details.title}/>
            </div>
            <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                <h1 className='text-3xl md:text-5xl font-bold'>{details.title}</h1>
                <div className='text-gray-400 text-sm my-2'>
                    {
                        details.genres && details.genres.slice(0, 5).map((genre, i) => (
                        <span key={i}>{genre.name}, </span>
                        ))
                    }
                </div>
                <p className='text-gray-400 text-sm my-4'>Released: {details.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[50%] text-gray-200'>{details.overview}</p>
                <p className='flex mt-3 items-center '><AiFillStar color='yellow' className='mr-2'/>{parseFloat(details.vote_average).toFixed(1)}/10</p>
                <div className='my-4'>
                    <a className=' bg-red-600 rounded-full text-white hover:bg-red-400 hidden md:flex pl-5 py-3 mr-4 w-[170px]' 
                    href={`https://www.youtube.com/results?search_query=${details.original_title || details.original_name}`}>
                    <AiOutlinePlayCircle size={25} className='mr-2' href={`https://www.youtube.com/results?search_query=${details.original_title || details.original_name}`} />Watch Trailer 
                    </a>
                </div>
            </div>         
            <Credits />
            <h1 className='text-black ml-3 p-5 font-bold text-1xl '>Production Company</h1>
            <div>
            {
                 details.production_companies && details.production_companies.slice(0, 4).map((pc, i) => (
                <div key={i} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[100px] inline-block cursor-pointer relative p-3 ml-5'> 
                    <img className='w-full h-50px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${pc?.logo_path}`} alt={pc?.name} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{pc?.name}</p>
                    </div>
                </div>
             ))}
            </div>
            <Footer />
        </div>
        </div>
  )
}
