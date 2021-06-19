import React from "react";
import {
  RateContainer,
  RateWrapper,
  IconContainer,
  StarIcon,
  RateText,
  TextContainer,
} from "../modal-styles";

const RateSection = ({ selectedMovie }) => {
  return (
    <RateWrapper>
      <RateContainer>
        <IconContainer>
          <StarIcon />
        </IconContainer>
        <TextContainer>
          <RateText style={{ marginLeft: 15 }}>
            <span>Rating: </span> {selectedMovie.vote_average} <span>/ 10</span>
          </RateText>
        </TextContainer>
      </RateContainer>
    </RateWrapper>
  );
};

export default RateSection;
