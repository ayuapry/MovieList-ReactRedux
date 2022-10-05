import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';



export const Search = () => {
  const {name} = useParams();
  const [movies, setMovies] = useState([]);
  const [search, setSearch]= useState('');
  const navigate = useNavigate();

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
}, []);
console.log(search)

  return (
    <div>
      <Navbar />
      <div>
      {movies && movies.map((item, index) => (
        <div key={index} className='w-[200px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3 mt-20 ml-5'  onClick={() => navigate(`/details/${item.id}`)}> 
          <img className='w-full h-[350px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt={item?.title} />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white '>
                  <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        </div>
      </div>
       ))}
      </div>
      <Footer />
    </div>
  )
}
