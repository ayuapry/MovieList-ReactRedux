import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./feature/PopularMovieSlice"
import allmovies from './feature/MovieSlice'
import details from "./feature/DetailsSlice"
import credits from "./feature/CreditsSlice";
import search from './feature/SearchSlice'
import genre from './feature/GenreSlice'
import genreMovies from './feature/GenreDetailsSlice'
import main from './feature/MainSlice'
import login from './feature/LoginSlice'
import loginauth from './feature/AuthSlice'

export default configureStore({
  reducer: {
    movies: MoviesReducer,
    allmovies: allmovies,
    details: details,
    credits: credits,
    search: search,
    genre: genre,
    genreMovies: genreMovies,
    main: main,
    login: login,
    loginauth: loginauth,
  },
})
