

export const requests = {
    fetchTrendingMovies: `/trending/all/day?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genre27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=99`
}