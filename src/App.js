import React, {useState} from 'react';
import Row from './components/row/Row';
import {requests} from './components/movies/movies';
import ModalOpen from './components/modal/ModalOpen';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import TextC from './components/text/TextC';
import TextL from './components/text/TextL';
import Device from './components/deviceSection/Device';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';


function App() {

      const dateSlice = (date1, date2) => {
      if(date1 === undefined && date2 === undefined) {
        return "Premiere";
      }
      else if(date2 === undefined) {
        return date1.slice(0,4);
      }
      else {
        return date2.slice(0,4)
      }
    }

    const [movieGenres, setMovieGenres] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const movieSelected = movie => {
      setShowModal(true);
      setSelectedMovie(movie);
      console.log(movie, ' is selected!');
      document.body.style.overflow = "hidden";
    }

    
    const toggle = () => {
      setIsOpen(!isOpen)
    }


  return (
    <div className="App">
      {/* -= Made by: https://github.com/vujic02 =-*/}
      <ModalOpen dateSlice={dateSlice} showModal={showModal} selectedMovie={selectedMovie } movieSelected={movieSelected} setShowModal={setShowModal} setSelectedMovie={setSelectedMovie}></ModalOpen>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Landing />
      <TextC btnPad="8px 80px" btnWeight="300" btnFont="1.3rem" btnType={true} fontH="2.6rem" fontT="1.6rem" text="Try 7 days for free, cancel anytime."  heading="THE HOME OF SERIES ONLINE" btn={true} btnText="TRY 7 DAYS FOR FREE" />
      <div className="grid3">
          <TextC pad="20px"  text="HBO GO offers all seasons from the very best series selection. You can enjoy more than 6000 series episodes together with selected movies, on all your screens."  heading="All seasons. All episodes." btn={false} btnText="" />
          <TextC pad="20px" borderL="1px solid grey" borderR="1px solid grey" text="All new customers can now try our service 7 days for free. Just 5.99 EUR per month after the trial period. Cancel at anytime."  heading="Try 7 days for free. No binding period." btn={false} btnText="" />
          <TextC pad="20px" text="You can subscribe to HBO GO via Operators. If you have HBO GO subscription register now and enjoy our contents."  heading="HBO GO is also available via affiliate partners." btn={false} />
      </div>
      <Row dateSlice={dateSlice} fetchUrl={requests.fetchTrendingMovies} showModal={showModal} setShowModal={setShowModal} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} movieGenres={movieGenres} setMovieGenres={setMovieGenres} movieSelected={movieSelected} />
      <Row dateSlice={dateSlice} fetchUrl={requests.fetchActionMovies} showModal={showModal} setShowModal={setShowModal} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} movieGenres={movieGenres} setMovieGenres={setMovieGenres} movieSelected={movieSelected}/>
      <Row dateSlice={dateSlice} fetchUrl={requests.fetchComedyMovies} showModal={showModal} setShowModal={setShowModal} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} movieGenres={movieGenres} setMovieGenres={setMovieGenres} movieSelected={movieSelected}/>
      <Row dateSlice={dateSlice} fetchUrl={requests.fetchRomanceMovies} showModal={showModal} setShowModal={setShowModal} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} movieGenres={movieGenres} setMovieGenres={setMovieGenres} movieSelected={movieSelected}/>
      <div className="grid2">
          <TextC btn={true} btnFont="1rem" btnWeight="100" btnPad="8px 40px" btnText="START YOUR FREE TRIAL" btnType={true} fontH="1.6rem" fontT="0.9rem" text="Subscribe to HBO GO directly for the best series, the biggest blockbusters and the sweetest kids content." heading="Would you like to try HBO GO free for 7 days?" />
          <TextC btn={true} btnFont="1rem" btnWeight="100" btnPad="8px 20px"  btnText="Register" btnType={false} fontH="1.6rem" fontT="0.9rem" text="Register with your operator to HBO GO and start watching movies and series online on your favorite device." heading="Already have HBO in your TV package through an Operator?" />
      </div>
      <Device />
      <Row dateSlice={dateSlice} fetchUrl={requests.fetchHorrorMovies} showModal={showModal} setShowModal={setShowModal} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} movieGenres={movieGenres} setMovieGenres={setMovieGenres} movieSelected={movieSelected}/>
      <div className="flex1">
          <TextL text1="- More than 6000 hours of series and movies in your language." text2="- Hit series, the biggest blockbusters and the sweetest kids content." text3="- All episodes of HBO OP series available anytime." btnPad="8px 80px" btnWeight="300" btnFont="1.3rem" btnType={true} fontH="2.5rem" fontT="1.3rem"  heading="Why people love HBO GO" btn={true} btnText="START YOUR FREE TRIAL" />
      </div>
      <Footer />
      {/* -= Made by: https://github.com/vujic02 =-*/}
    </div>
  );
}

export default App;
