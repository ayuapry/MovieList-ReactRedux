const key = '244fa9aef597e28aa246abfdef2d39f6'


const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestAdventure: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=Adventure&page=1`,
    requestAnimation: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=Horor&page=1`,
    requestFamily: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=Family&page=1`

}

export default requests;