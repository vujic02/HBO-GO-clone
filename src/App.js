import React, { useState } from "react";
import { requests } from "./components/movies/movies";
import {
  ModalOpen,
  Sidebar,
  Navbar,
  Footer,
  Device,
  Landing,
} from "./components/index";
import { GridSection1, GridSection2, FlexSection } from "./components/home";
import Row from "./components/row/Row";
import TextC from "./components/text/TextC";

function App() {
  const dateSlice = (date1, date2) => {
    if (date1 === undefined && date2 === undefined) {
      return "Premiere";
    } else if (date2 === undefined) {
      return date1.slice(0, 4);
    } else {
      return date2.slice(0, 4);
    }
  };

  const [movieGenres, setMovieGenres] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const movieSelected = (movie) => {
    setShowModal(true);
    setSelectedMovie(movie);
    document.body.style.overflow = "hidden";
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <ModalOpen
        dateSlice={dateSlice}
        showModal={showModal}
        selectedMovie={selectedMovie}
        movieSelected={movieSelected}
        setShowModal={setShowModal}
        setSelectedMovie={setSelectedMovie}
      />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Landing />
      <TextC
        btnPad="8px 80px"
        btnWeight="300"
        btnFont="1.3rem"
        btnType={true}
        fontH="2.6rem"
        fontT="1.6rem"
        text="Try 7 days for free, cancel anytime."
        heading="THE HOME OF SERIES ONLINE"
        btn={true}
        btnText="TRY 7 DAYS FOR FREE"
      />
      <GridSection1 />
      <Row
        dateSlice={dateSlice}
        fetchUrl={requests.fetchTrendingMovies}
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
        movieGenres={movieGenres}
        setMovieGenres={setMovieGenres}
        movieSelected={movieSelected}
      />
      <Row
        dateSlice={dateSlice}
        fetchUrl={requests.fetchActionMovies}
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
        movieGenres={movieGenres}
        setMovieGenres={setMovieGenres}
        movieSelected={movieSelected}
      />
      <Row
        dateSlice={dateSlice}
        fetchUrl={requests.fetchComedyMovies}
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
        movieGenres={movieGenres}
        setMovieGenres={setMovieGenres}
        movieSelected={movieSelected}
      />
      <Row
        dateSlice={dateSlice}
        fetchUrl={requests.fetchRomanceMovies}
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
        movieGenres={movieGenres}
        setMovieGenres={setMovieGenres}
        movieSelected={movieSelected}
      />
      <GridSection2 />
      <Device />
      <Row
        dateSlice={dateSlice}
        fetchUrl={requests.fetchHorrorMovies}
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
        movieGenres={movieGenres}
        setMovieGenres={setMovieGenres}
        movieSelected={movieSelected}
      />
      <FlexSection />
      <Footer />
    </div>
  );
}

export default App;
