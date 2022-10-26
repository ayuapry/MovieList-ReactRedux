import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./feature/PopularMovieSlice"
import allmovies from './feature/MovieSlice'
import details from "./feature/DetailsSlice"
import credits from "./feature/CreditsSlice";
import search from './feature/SearchSlice'
import genre from './feature/GenreSlice'
import genreMovies from './feature/GenreDetailsSlice'

export default configureStore({
  reducer: {
    movies: MoviesReducer,
    allmovies: allmovies,
    details: details,
    credits: credits,
    search: search,
    genre: genre,
    genreMovies: genreMovies,
  },
})
