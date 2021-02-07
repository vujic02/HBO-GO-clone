import styled from 'styled-components';


export const DeviceContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 80px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const DeviceItem = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px 60px;
    @media screen and (max-width: 1800px) {
        padding: 5px 40px;
    }
    @media screen and (max-width: 1600px) {
        padding: 5px 30px;
    }
    @media screen and (max-width: 1400px) {
        padding: 5px 20px;
    }
    @media screen and (max-width: 1200px) {
        padding: 5px 15px;
    }
    @media screen and (max-width: 1100px) {
        padding: 5px 10px;
    }
`

export const H2 = styled.h2`
    display: block;
    position: relative;
    text-align: center;
    margin: 0 40px 10px 40px;
    font-size: 22px;
    font-weight: 800;
    &:before {
        display: block;
        position: absolute;
        content: "";
        background-color: rgba(255, 255, 255, 0.15);
        top: 50%;
        margin-top: -1px;
        left: 0px;
        right: 0px;
        height: 2px;
        z-index: -1;
    }
    .h2-span {
        background-color: #000000;
        padding: 0 20px;
        text-transform: uppercase;
        color: #fff;
    }
`

export const DeviceImg = styled.img`
    width: auto;
`

export const DeviceP = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
`