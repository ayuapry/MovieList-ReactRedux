import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Movie } from './Movie';
import { Hero } from './Hero';

export const Search = () => {
  const {name} = useParams();
  const [movies, setMovies] = useState([]);
  const [search]= useState('');

  const searchMovie = async (e) =>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=244fa9aef597e28aa246abfdef2d39f6&query=${name}`);
      // console.log(res.data.results);
      setMovies(res.data.results);
      } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovie();
  });
  console.log(search)

  return (
    <div>
      <Navbar />
      <Hero title={name} />
      <div>
       {movies.map((item,index) => (
        <div className='w-[200px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-0 mt-20 ml-5'>
          <Movie key={index} item={item} />
        </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
