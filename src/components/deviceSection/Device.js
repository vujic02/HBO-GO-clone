import React from 'react';
import {
    DeviceContainer,
    DeviceItem,
    H2,
    DeviceImg,
    DeviceP
}   from './device-styles';

import AppleTv from './appletv.png'
import ChromeCast from './chromecast.png'
import Computer from './computer.png'
import Console from './console.png'
import Mobile from './mobile.png'
import SmartTv from './smarttv.png'
import Tablet from './tablet.png'

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
    )
}

export default Device
