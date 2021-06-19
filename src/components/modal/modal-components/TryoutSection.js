import React from "react";
import {
  Tryout,
  TryoutContainer,
  TryoutText,
  TryoutBtn,
  TryoutLogo,
} from "../modal-styles";

import logo from "../images/logo.png";

const TryoutSection = () => {
  return (
    <Tryout>
      <TryoutContainer>
        <TryoutText weight="500" size="1.5rem" resize="1.2rem" resize2="0.9rem">
          Enjoy over
          <br />
          6500 hours of content
        </TryoutText>
        <TryoutText weight="300" size="1rem" resize="0.9rem" resize2="0.6rem">
          300 series, 850 movies,
          <br /> kids shows and documentaries
        </TryoutText>
        <TryoutText weight="300" size="0.8rem" resize="0.8rem" resize2="0.5rem">
          Only 5.99 € after free trial
        </TryoutText>
      </TryoutContainer>
      <TryoutContainer>
        <TryoutLogo src={logo} />
        <TryoutText weight="400" size="1.5rem" resize="1.2rem" resize2="1rem">
          Try 7 days for free
        </TryoutText>
      </TryoutContainer>
      <TryoutContainer>
        <TryoutText weight="400" size="0.8rem" resize="0.6rem" resize2="0.5rem">
          Hit series, local production, hit blockbusters
          <br /> and cartoons.
          <br />
          Everything on your local language. Stream on your favourite screen.
        </TryoutText>
        <TryoutBtn resize="0.8rem" resize2="0.5rem">
          Start Free Trial
        </TryoutBtn>
      </TryoutContainer>
    </Tryout>
  );
};

export default TryoutSection;
