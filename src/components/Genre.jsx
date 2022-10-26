import React, {useState, useEffect} from 'react';
import { GenrePages } from '../pages/GenrePages';
import { Filter } from './Filter';
import axios from 'axios';

export const Genre = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);
  const [genre, setGenre] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US')
  //   const movies = await data.json();
  //   setPopular(movies.results);
  //   setFiltered(movies.results);
  // }
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
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} active={active} setActive={setActive} />
      <div className="popularmovies">
        {filtered.map((movie) =>{
          return <GenrePages key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  )
}
