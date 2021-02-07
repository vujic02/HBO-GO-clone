import React, {useState, useEffect} from 'react';
import axios from '../../axios'
import {RowContainer} from './row-styles';
import Carousel from 'react-elastic-carousel';
import RowItem from './RowItem'

const Row = ({fetchUrl, setSelectedMovie, selectedMovie, setShowModal, showModal, movieGenres, setMovieGenres, movieSelected, closeModal, dateSlice}) => {

    const imgBaseUrl = 'https://image.tmdb.org/t/p/original';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results)
           return request;
        }
        fetchData()
    }, [fetchUrl])


    useEffect(() => {
      async function getMovieGenres() {
        const response1 = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`);
        const response2 = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`);
        setMovieGenres([...response1.data.genres, ...response2.data.genres]);
      }
      getMovieGenres()
    }, [])



    const checkGenre = (genreArr) => {
        // Iterating through movie genres to match genres object and transform genre id to genre title(ex. 37 -> western)
            for(let j = 0; j < movieGenres.length; j++)
                if(genreArr[0] === movieGenres[j].id) {
                    return movieGenres[j].name;
                }
        }
    
        const breakPoints = [
            {width: 320, itemsToShow: 0.8, itemsToScroll: 2},
            {width: 380, itemsToShow: movies.length / 14, itemsToScroll: 2},
            {width: 428, itemsToShow: movies.length / 10, itemsToScroll: 2},
            {width: 468, itemsToShow: movies.length / 6, itemsToScroll: 2},
            {width: 768, itemsToShow: movies.length / 4, itemsToScroll: 3},
            {width: 1000, itemsToShow: movies.length / 3, itemsToScroll: 3},
            {width: 1250, itemsToShow: movies.length / 2.4, itemsToScroll: 4},
            {width: 1450, itemsToShow: movies.length / 2.2, itemsToScroll: 4},
            {width: 1650, itemsToShow: movies.length / 2.05, itemsToScroll: 4}
        ]




    return (
        <RowContainer className={showModal ? "filter-effect" : ""}>
        <Carousel itemsToShow={movies.length / 1.95} itemsToScroll={4} breakPoints={breakPoints} focusOnSelect={false} enableMouseSwipe={false} enableSwipe={false} preventDefaultTouchmoveEvent={true} style={{display: 'flex', justifyContent: 'center'}}>
            {
            movies.map(movie => (
              <RowItem movie={movie} selected={movieSelected} dateSlice={dateSlice} imgBaseUrl={imgBaseUrl} checkGenre={checkGenre} selectedMovie={selectedMovie} showModal={showModal} closeModal={closeModal}/>
            ))
            }
        </Carousel>
        </RowContainer>
    )
}

export default Row
