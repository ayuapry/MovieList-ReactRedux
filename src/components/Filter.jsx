import React, {useState, useEffect} from 'react';
import { Hero } from './Hero';
import axios from 'axios';

export const Filter = ({setActive, active, setFiltered, popular}) => {
  const [genre, setGenre] = useState([]);
  const getData = async () => {
    try{
        const item = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US")
        console.log(item.data.genres);
        setGenre(item.data.genres);
    }catch (error) {
        console.log(error);
    }
};
useEffect(() => {
    getData();
}, []);
    // useEffect(() => {
    //     if(active === 0){
    //         setFiltered(popular);
    //         return;
    //     }
    //     const filtered = popular.filter((movie) => movie.genre_ids.includes(active));
    //     setFiltered(filtered);
    // })

    return (
    <div>
      <Hero />
        {genre.map((item) => (
        <div className='relative float-left mt-5'>
          <button className='text-red-500 hover:bg-red-400 px-8 py-2 ml-7 mr-0 bg-transparent rounded-full border-2 border-red-500'>{item.name}</button>
        </div>
        ))}
    </div>
  )
}
