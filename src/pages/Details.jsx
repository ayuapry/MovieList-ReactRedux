import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Navbar } from '../components/Navbar'
import { useParams } from 'react-router-dom';
import {AiOutlinePlayCircle, AiFillStar} from 'react-icons/ai'

export const Details = ({item}) => {
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    
    const getData = async () => {
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=244fa9aef597e28aa246abfdef2d39f6`)
            setMovies(res.data);
        }catch (error) {
            console.log(error);
        }
    };
    console.log(movies)

    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        <Navbar />
        <div className='w-full h-[600px] text-white'>        
            <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black '></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} alt={movies.title}/>
            </div>
            <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                <h1 className='text-3xl md:text-5xl font-bold'>{movies.title}</h1>
                <div className='text-gray-400 text-sm my-2'>
                    {
                        movies.genres && movies.genres.slice(0, 5).map((genre, i) => (
                        <span key={i}>{genre.name}, </span>
                        ))
                    }
                </div>
                <p className='text-gray-400 text-sm my-4'>Released: {movies.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[50%] text-gray-200'>{movies.overview}</p>
                <p className='flex mt-3 items-center '><AiFillStar color='yellow' className='mr-2'/>{movies.vote_average}/10</p>
                <div className='my-4'>
                    <button className=' bg-red-600 rounded-full text-white hover:bg-red-400 hidden md:flex pl-5 py-3 mr-4 w-[170px]'>
                    <AiOutlinePlayCircle size={25} className='mr-2' />Watch Trailer 
                    </button>
                </div>
            </div>
        </div>
        </div>
  )
}
