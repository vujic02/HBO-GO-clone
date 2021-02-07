import styled from 'styled-components';

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    border-left: ${({borderL}) => borderL};
    border-right: ${({borderR}) => borderR};
    @media screen and (max-width: 768px) {
        border-left: none;
        border-right: none;
    }
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: ${({pad}) => pad};
`

export const TextH1 = styled.h1`
    font-size: ${({fontH}) => fontH};
    font-weight: 300;
    color: #fff;
    margin: 10px 0;
`

export const TextP = styled.p`
    font-size: ${({fontT}) => fontT};
    font-weight: 300;
    color: #fff;
    margin: 10px 0;
`

export const TextBtn = styled.span`
    display: inline-block;
    background-color: ${({btnType}) => (btnType ? '#e1981a' : 'transparent')};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({fontWeight}) => fontWeight};
    text-shadow: 0px 1px 2px #111;
    border: 1px solid ${({btnType}) => (btnType ? '#e1981a' : '#e1981a')};
    border-radius: 6px;
    padding: ${({btnPad}) => btnPad};
    margin: 10px 0;
    transition: all .2s;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: ${({btnType}) => (btnType ? '#eba52d' : 'transparent')};
    }
    &:active {
        background-color: ${({btnType}) => (btnType ? '#f0ad3c' : '#eba52d')};  
    }
`
