import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCredits } from '../store/feature/CreditsSlice';

export const Credits = () => {
    const {id} = useParams();
    const {credits} = useSelector((state) => state.credits)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCredits(id));
    }, []);

  return (
    <div>
        <h1 className='text-black ml-3 p-5 font-bold text-3xl'>Movie Cast and Crew Info</h1>
        <div>
            {credits.cast && credits.cast.slice(0, 5).map((credits,index) => (
                <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3 ml-5'> 
                <img className='w-full h-[350px] object-cover block rounded-md' src={`https://image.tmdb.org/t/p/original/${credits?.profile_path}`} alt={credits?.name} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-white/50 opacity-0 hover:opacity-100 text-black '>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{credits?.original_name}<br /> As: {credits?.character}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}
