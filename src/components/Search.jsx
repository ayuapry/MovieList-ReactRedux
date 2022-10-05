import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const Search = () => {
  const {name} = useParams();
  const [search, setSearch]= useState('');

  const searchMovie = async (e) =>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=244fa9aef597e28aa246abfdef2d39f6&query=${name}`);
      // console.log(res.data.results);
      setSearch(res.data.results);
      } catch (error) {
      console.log(error);
    }
  };

 
 useEffect(() => {
  searchMovie();
}, []);
console.log(search)

  return (
    <div>
      <h1 className='text-white'>search</h1>
    </div>
  )
}
