import React from 'react'
import {RowItemContainer, RowItemImg, RowItemText, RowItemHeader} from './row-styles';

const RowItem = ({movie, selected, checkGenre, imgBaseUrl, selectedMovie, dateSlice}) => {

  const editMovie = () => {
    selected(movie)
  }

    return (
        <>
        <RowItemContainer key={Math.random() * 10000} onClick={editMovie}>
            <div className="img-overlay"><RowItemImg className="row-item-img row-item-img-overlay" src={imgBaseUrl + movie.poster_path} /></div>
            <RowItemHeader className="row-item-header">{movie.title || movie.original_name}</RowItemHeader>
            <div className="row-itemText"><RowItemText className="row-item-text">{dateSlice(movie.release_date, movie.first_air_date)} | {checkGenre(movie.genre_ids)}</RowItemText></div>
      </RowItemContainer>
      </>
    )
}

export default RowItem
