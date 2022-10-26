import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Movie } from './Movie';
import { Hero } from './Hero';
import { searchMovie } from '../store/feature/SearchSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Search = () => {
  const {name} = useParams();
  const {search} = useSelector((state) => state.search)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(searchMovie(name));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero title={name} />
      <div>
       {search.map((item,index) => (
        <div className='w-[200px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-0 mt-20 ml-5'>
          <Movie key={index} item={item} />
        </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
