import React from "react";
import { ImgContainer, ModalImg, ModalH3 } from "../modal-styles";

const ImageSection = ({ selectedMovie, imgBaseUrl }) => {
  return (
    <ImgContainer>
      <ModalImg src={imgBaseUrl + selectedMovie.backdrop_path} />
      <ModalH3>{selectedMovie.title || selectedMovie.original_name}</ModalH3>
    </ImgContainer>
  );
};

export default ImageSection;
