import React, { useEffect} from 'react';
import { Hero } from './Hero';
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { getGenreMovies } from '../store/feature/GenreDetailsSlice';

export const Genre = () => {
  const navigate = useNavigate();
  const {id} = useParams(false)
  const {genreMovies} = useSelector((state) => state.genreMovies)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getGenreMovies(id))
  }, []);

  return (
    <div>
      <Hero />
        {genreMovies && genreMovies.map((item) => (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-0 mt-20 ml-5' onClick={() => navigate(`/details/${item.id}`)}> 
        <img className='w-full h-[350px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}<br />{(item.vote_average).toFixed(1)}/10</p>
            </div>
        </div>
        ))}
      <Footer />
    </div>
  )
}
