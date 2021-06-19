import React from "react";
import TextC from "../text/TextC";

const GridSection1 = () => {
  return (
    <div className="grid3">
      <TextC
        pad="20px"
        text="HBO GO offers all seasons from the very best series selection. You can enjoy more than 6000 series episodes together with selected movies, on all your screens."
        heading="All seasons. All episodes."
        btn={false}
        btnText=""
      />
      <TextC
        pad="20px"
        borderL="1px solid grey"
        borderR="1px solid grey"
        text="All new customers can now try our service 7 days for free. Just 5.99 EUR per month after the trial period. Cancel at anytime."
        heading="Try 7 days for free. No binding period."
        btn={false}
        btnText=""
      />
      <TextC
        pad="20px"
        text="You can subscribe to HBO GO via Operators. If you have HBO GO subscription register now and enjoy our contents."
        heading="HBO GO is also available via affiliate partners."
        btn={false}
      />
    </div>
  );
};

export default GridSection1;
