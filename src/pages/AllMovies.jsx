import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Movie } from '../components/Movie';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';

export const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const getData = async () => {
        try{
            const item = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US&page=1")
            setMovies(item.data.results);
        }catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        <Navbar />
        <Hero />
        {movies && movies.map((item, index) => (
            <div className='w-[200px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-0 mt-20 ml-5'>
            <Movie key={index} item={item} />
          </div>
          ))}
        <Footer />
    </div>
  )
}
