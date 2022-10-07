import React, {useEffect} from 'react'
import { Hero } from './Hero';

export const Filter = ({setActive, active, setFiltered, popular}) => {
    useEffect(() => {
        if(active === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(active));
        setFiltered(filtered);
    })

    return (
    <div>
      <Hero />
        <div className='pt-10'>
          <button onClick={() => setActive(10751)} className='text-red-500 hover:bg-red-400 px-8 py-2 ml-7 mr-0 bg-transparent rounded-full border-2 border-red-500'>Family</button>
          <button onClick={() => setActive(35)} className='text-red-500 hover:bg-red-400 px-8 py-2 ml-7 mr-0 bg-transparent rounded-full border-2 border-red-500'>Comedy</button>
          <button onClick={() => setActive(28)} className='text-red-500 hover:bg-red-400 px-8 py-2 ml-7 mr-0 bg-transparent rounded-full border-2 border-red-500'>Action</button>
          <button onClick={() => setActive(80)} className='text-red-500 hover:bg-red-400 px-8 py-2 ml-7 mr-0 bg-transparent rounded-full border-2 border-red-500'>Crime</button>
          <button onClick={() => setActive(14)} className='text-red-500 hover:bg-red-400 px-8 py-2 ml-7 mr-0 bg-transparent rounded-full border-2 border-red-500'>Fantasy</button>
          <button onClick={() => setActive(53)} className='text-red-500 hover:bg-red-400 px-8 py-2 ml-7 mr-0 bg-transparent rounded-full border-2 border-red-500'>Thriller</button>
        </div>
    </div>
  )
}
