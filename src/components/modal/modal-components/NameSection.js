import React from "react";
import { NameContainer, MovieText, MovieName } from "../modal-styles";

const NameSection = ({ selectedMovie, dateSlice }) => {
  return (
    <NameContainer>
      <MovieText>
        <MovieName>
          {selectedMovie.title || selectedMovie.original_name}
        </MovieName>{" "}
        | {dateSlice(selectedMovie.release_date, selectedMovie.first_air_date)}
      </MovieText>
    </NameContainer>
  );
};

export default NameSection;
