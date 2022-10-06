import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Credits = () => {
    const [credits, setCredits] = useState([]);
    const {id} = useParams();

    const getCredits = async () => {
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US`)
            setCredits(res.data);
        }catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCredits();
    });

  return (
    <div>
        <h1 className='text-black ml-3 p-5 font-bold text-3xl '>Movie Cast and Crew Info</h1>
        <div>
            {credits.cast && credits.cast.slice(0, 5).map((item,index) => (
                <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3 ml-5'> 
                <img className='w-full h-[350px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`} alt={item?.name} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.original_name}<br /> As: {item?.character}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}
