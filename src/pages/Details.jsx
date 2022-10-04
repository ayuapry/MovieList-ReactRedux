import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Navbar } from '../components/Navbar'
// import requests from '../Requests';
import { useParams } from 'react-router-dom';

export const Details = ({item}) => {
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
    console.log(movies)

    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        <Navbar />
        <div>
        <h1 className='text-white'>bambang</h1>
        
            <div >
                <img src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} alt={movies.title}/>
                <li className='text-white'>{movies.original_language}</li>
            </div>
        
        </div>
        
    </div>
  )
}
