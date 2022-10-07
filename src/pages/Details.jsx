import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Navbar } from '../components/Navbar'
import {Footer} from '../components/Footer'
import { useParams } from 'react-router-dom';
import {AiOutlinePlayCircle, AiFillStar} from 'react-icons/ai'
import { Credits } from '../components/Credits';

export const Details = () => {
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
    useEffect(() => {
        getData();
    });

  return (
    <div>
        <Navbar />
        <div className='w-full h-[750px] text-white'>        
            <div className='w-full h-full'>
            <div className='absolute w-full h-[750px] bg-gradient-to-r from-black '></div>
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
                <p className='flex mt-3 items-center '><AiFillStar color='yellow' className='mr-2'/>{parseFloat(movies.vote_average).toFixed(1)}/10</p>
                <div className='my-4'>
                    <a className=' bg-red-600 rounded-full text-white hover:bg-red-400 hidden md:flex pl-5 py-3 mr-4 w-[170px]' 
                    href={`https://www.youtube.com/results?search_query=${movies.original_title || movies.original_name}`}>
                    <AiOutlinePlayCircle size={25} className='mr-2' href={`https://www.youtube.com/results?search_query=${movies.original_title || movies.original_name}`} />Watch Trailer 
                    </a>
                </div>
            </div>         
            <Credits />
            <h1 className='text-black ml-3 p-5 font-bold text-1xl '>Production Company</h1>
            <div>
            {
                 movies.production_companies && movies.production_companies.slice(0, 4).map((pc, i) => (
                <div key={i} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[100px] inline-block cursor-pointer relative p-3 ml-5'> 
                    <img className='w-full h-50px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${pc?.logo_path}`} alt={pc?.name} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{pc?.name}</p>
                    </div>
                </div>
             ))}
            </div>
            {/* <div>
                <li className='text-black'>Release Date:{movies.release_date}</li>
                <li className='text-black'>Revenue: {movies.revenue}</li>
                <li className='text-black'>Runtime: {movies.runtime}</li>
                <li className='text-black'>Tagline: {movies.tagline}</li>
                <li className='text-black'>Movie Budget: {movies.budget}</li>
            </div> */}
            <Footer />
        </div>
        </div>
  )
}
