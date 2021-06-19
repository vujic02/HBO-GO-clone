import React from "react";
import TextC from "../text/TextC";

const GridSection2 = () => {
  return (
    <div className="grid2">
      <TextC
        btn={true}
        btnFont="1rem"
        btnWeight="100"
        btnPad="8px 40px"
        btnText="START YOUR FREE TRIAL"
        btnType={true}
        fontH="1.6rem"
        fontT="0.9rem"
        text="Subscribe to HBO GO directly for the best series, the biggest blockbusters and the sweetest kids content."
        heading="Would you like to try HBO GO free for 7 days?"
      />
      <TextC
        btn={true}
        btnFont="1rem"
        btnWeight="100"
        btnPad="8px 20px"
        btnText="Register"
        btnType={false}
        fontH="1.6rem"
        fontT="0.9rem"
        text="Register with your operator to HBO GO and start watching movies and series online on your favorite device."
        heading="Already have HBO in your TV package through an Operator?"
      />
    </div>
  );
};

export default GridSection2;
