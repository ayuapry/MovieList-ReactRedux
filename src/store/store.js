import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./feature/PopularMovieSlice"
import details from "./feature/DetailsSlice"
import credits from "./feature/CreditsSlice";

export default configureStore({
  reducer: {
    movies: MoviesReducer,
    details: details,
    credits: credits,
  },
})
