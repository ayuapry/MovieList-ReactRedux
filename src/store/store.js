import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./feature/movieSlice"

export default configureStore({
  reducer: {
    movies: MoviesReducer,
  },
})

// import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// // import { TMDB_BASE_URL, API_KEY } from "../utils/constanst";

// const initialState = {
//     movies: [],
//     genresLoaded: false,
//     genres: [],
// };

// export const getGenres = createAsyncThunk("homepage/genres", async() => {
//     const {
//         data: {genres},
//     } = await axios.get (`https://api.themoviedb.org/3/genre/movie/list?api_key=244fa9aef597e28aa246abfdef2d39f6`
//     );
//     console.log(genres)
//     return genres;
// });

// // export const getapapun = createAsyncThunk("homepage/getapapun", async () => {
// //     try{
// //         const res = await axios.get(
// //             "https://notflixtv.herokuapp.com/api/v1/movies"
// //         );
// //         console.log(res)
// //         // return res;
// //     }catch (error){
// //         console.log(error)
// //     }
// // })

// const createArrayFromRawData = (array, moviesArray, genres) => {
//     array.forEach((movie) => {
//       const movieGenres = [];
//       movie.genre_ids.forEach((genre) => {
//         const name = genres.find(({ id }) => id === genre);
//         if (name) movieGenres.push(name.name);
//       });
//       if (movie.backdrop_path)
//         moviesArray.push({
//           id: movie.id,
//           name: movie?.original_name ? movie.original_name : movie.original_title,
//           image: movie.backdrop_path,
//           genres: movieGenres.slice(0, 3),
//         });
//     });
//   };
  

// const getRawData = async (api, genres, paging = false) => {
//     const moviesArray = [];
//     for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
//       const {
//         data: { results },
//       } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
//       createArrayFromRawData(results, moviesArray, genres);
//     }
//     return moviesArray;
//   };

// export const fetchMovies = createAsyncThunk("homepage/trending", async ({type},thunkApi) =>{
//     const {
//         homepage: {genres},
//     } = thunkApi.getState();
//     return getRawData(`https://api.themoviedb.org/3/trending/all/week?api_key=244fa9aef597e28aa246abfdef2d39f6`,
//     genres,
//     true
//     );
//     // console.log(data)
// })

// const HomePageSclice = createSlice({
//     name: "HomePage",
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(getGenres.fulfilled, (state,action) => {
//             state.genres = action.payload;
//             state.genresLoaded = true;
//         })
//         builder.addCase(fetchMovies.fulfilled, (state,action) => {
//             state.movies = action.payload;
//         })
//     },
// });

// export const store = configureStore({
//     reducer: {
//         homepage: HomePageSclice.reducer,
//     },
// })