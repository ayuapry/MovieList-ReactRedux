import React, {useState, useEffect} from 'react';
import { GenrePages } from '../pages/GenrePages';
import { Filter } from './Filter';

export const Genre = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US&page=1')
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  }
  return (
    <div>
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} active={active} setActive={setActive} />
      <div className="popularmovies">
        {filtered.map((movie) =>{
          return <GenrePages key={movie.id} movie={movie} />
        })}
      </div>
    </div>
    </div>
  )
}
