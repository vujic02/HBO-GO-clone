import React from "react";
import {
  TextWrapper,
  TextContainer,
  TextH1,
  TextP,
  TextBtn,
} from "./text-styles";

const TextL = ({
  heading,
  text1,
  text2,
  text3,
  btn,
  btnText,
  pad,
  borderL,
  borderR,
  fontT,
  fontH,
  btnType,
  btnFont,
  btnWeight,
  btnPad,
}) => {
  return (
    <TextWrapper borderL={borderL} borderR={borderR}>
      <TextContainer pad={pad}>
        <TextH1 fontH={fontH}>{heading}</TextH1>
        <TextP fontT={fontT}>
          {text1}
          <br />
          {text2}
          <br />
          {text3}
        </TextP>
        {btn ? (
          <TextBtn
            btnType={btnType}
            btnFont={btnFont}
            btnWeight={btnWeight}
            btnPad={btnPad}
          >
            {btnText}
          </TextBtn>
        ) : null}
      </TextContainer>
    </TextWrapper>
  );
};

export default TextL;
