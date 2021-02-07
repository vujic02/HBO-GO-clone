import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';
import BgModal from './bg-modal.jpg';

export const ModalH3 = styled.h3`
    color: #fff;
    position: absolute;
    font-size: 3rem;
    top: 460px;
    left: 10px;
    font-weight: 300;
    z-index: 150;
    font-family: 'Raleway', sans-serif;
    @media screen and (max-width: 520px) {
        top: auto;
        bottom: -50px;
        left: 30px;
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(65, 65, 65, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`

export const ModalItem = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 110;
    margin-top: 20px;
    @media screen and (max-width: 1400px) {
        margin-left: 15%;
        margin-right: 15%;
    }
    @media screen and (max-width: 768px) {
        margin: 0;
    }
`

export const ModalWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const ModalContainer = styled.div`
    background-color: rgb(1, 1, 1);
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`

export const ModalImg = styled.img`
    width: 100%;
    height: 560px;
    object-fit: cover;
    @media screen and (max-width: 520px) {
        height: 250px;
    }
`

export const ImgContainer = styled.div`
    position: relative;
    &::before{
        display: block;
        content: "";
        position: absolute;
        z-index: 10;
        bottom: 0;
        right: 0;
        left: 0;
        height: 100px;
        background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
        background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    }

    &:after {
        display: block;
        content: "";
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        left: 0;
        height: 100px;
        background: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        background: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
        background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
    }
`

export const NameContainer = styled.div`
    position: relative;
    @media screen and (max-width: 520px) {
        margin-left: 15px;
    }
`

export const MovieText = styled.p`
    font-size: 1rem;
    color: #fff;
`

export const MovieName = styled.span`
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
`

export const RateWrapper = styled.div`
    position: relative;
    height: 64px;
    @media screen and (max-width: 520px) {
        margin-left: 15px;
    }
`

export const RateContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    color: #fff;
    width: 160px;
    height: 42px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        transition: all .3s;
        background-color: #0091ea;
    }
`
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const RateText = styled.p`
    color: #fff;
    margin: 0;
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    border: 4px solid #0091ea;
    border-radius: 80%;
    height: 28px;
    width: 28px;
    line-height: 2px;
    transition: all ease-in-out 0.5s;
    &:hover {
        transition: all ease-in-out 0.5s;
        background-color: #0091ea;
    }
`

export const StarIcon = styled(AiFillStar)`
    color: #fff;
    font-size: 1.8rem;
`


export const TryoutSection = styled.div`
    width: 100%;
    height: 220px;
    background-image: url(${BgModal});
    background-size: 100% auto;
    display: flex;
    justify-content: center;
`

export const TryoutContainer = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const TryoutText = styled.p`
    color: #fff;
    font-size: ${({size}) => size};
    font-weight: ${({weight}) => weight};
    margin: 10px 0;
    @media screen and (max-width: 700px) {
        font-size: ${({resize}) => resize};
    }
    @media screen and (max-width: 520px) {
        font-size: ${({resize2}) => resize2}
    }
`


export const TryoutLogo = styled.img`
    width: 220px;
    height: 70px;
    @media screen and (max-width: 700px) {
        width: 180px;
        height: 50px;
    }
    @media screen and (max-width: 520px) {
        width: 140px;
        height: 40px;
    }

    @media screen and (max-width: 500px) {
        width: 100px;
        height: 30px;
    }
`

export const TryoutBtn = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 38px;
    outline: none;
    font-weight: 600;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 4px;
    background: #059;
    transition: all 0.2s;
    cursor: pointer;
    padding: 0 20px;
    &:hover {
        transition: all 0.2s;
        background:  #0091ea;
    }
    @media screen and (max-width: 700px) {
        font-size: ${({resize}) => resize};
    }

    @media screen and (max-width: 520px) {
        font-size: ${({resize2}) => resize2};
        padding: 0 15px;
    }
`

export const ModalContent = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
`

