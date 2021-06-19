import React from "react";
import {
  DeviceContainer,
  DeviceItem,
  H2,
  DeviceImg,
  DeviceP,
} from "./device-styles";

import {
  SmartTv,
  Console,
  Tablet,
  Mobile,
  AppleTv,
  ChromeCast,
  Computer,
} from "./index";

const Device = () => {
  return (
    <>
      <H2>
        <span className="h2-span">WATCH ON YOUR FAVORITE DEVICE</span>
      </H2>
      <DeviceContainer>
        <DeviceItem>
          <DeviceImg src={SmartTv} alt="image" />
          <DeviceP>SMART TV</DeviceP>
        </DeviceItem>
        <DeviceItem>
          <DeviceImg src={Tablet} alt="image" />
          <DeviceP>TABLET</DeviceP>
        </DeviceItem>
        <DeviceItem>
          <DeviceImg src={Mobile} alt="image" />
          <DeviceP>MOBILE</DeviceP>
        </DeviceItem>
        <DeviceItem>
          <DeviceImg src={AppleTv} alt="image" />
          <DeviceP>APPLE TV</DeviceP>
        </DeviceItem>
        <DeviceItem>
          <DeviceImg src={ChromeCast} alt="image" />
          <DeviceP>CHROME CAST</DeviceP>
        </DeviceItem>
        <DeviceItem>
          <DeviceImg src={Console} alt="image" />
          <DeviceP>CONSOLE</DeviceP>
        </DeviceItem>
        <DeviceItem>
          <DeviceImg src={Computer} alt="image" />
          <DeviceP>COMPUTER</DeviceP>
        </DeviceItem>
      </DeviceContainer>
    </>
  );
};

export default Device;
