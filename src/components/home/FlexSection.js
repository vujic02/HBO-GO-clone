import React from "react";
import TextL from "../text/TextL";

const FlexSection = () => {
  return (
    <div className="flex1">
      <TextL
        text1="- More than 6000 hours of series and movies in your language."
        text2="- Hit series, the biggest blockbusters and the sweetest kids content."
        text3="- All episodes of HBO OP series available anytime."
        btnPad="8px 80px"
        btnWeight="300"
        btnFont="1.3rem"
        btnType={true}
        fontH="2.5rem"
        fontT="1.3rem"
        heading="Why people love HBO GO"
        btn={true}
        btnText="START YOUR FREE TRIAL"
      />
    </div>
  );
};

export default FlexSection;
