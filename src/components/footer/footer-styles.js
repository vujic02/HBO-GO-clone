import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    padding-top: 80px;
`

export const FooterItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    @media screen and (max-width: 1600px) {
        width: 40%;
    }

    @media screen and (max-width: 1200px) {
        width: 40%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const FooterIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
` 

export const FooterIcon = styled.div`
    color: #fff;
    width: 24px;
    height: 24px;
    svg {
        width: 18px;
        height: 18px;
        fill: #9b9b9b;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 5px;
    width: 100%;
`

export const LinksList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    margin: 0;
    list-style: none;
    width: 100%;
    border-top: 1px solid rgba(100, 100, 100, 0.4);
    border-bottom: 1px solid rgba(100, 100, 100, 0.4);
`

export const LinkItem = styled.li`
    font-size: 1rem;
    font-weight: 300;
    color: #fff;
    @media screen and (max-width: 520px) {
        font-size: 0.8rem;
    }
`

export const FooterText = styled.small`
    font-size: 0.7rem;
    font-weight: 200;
    color: rgba(105, 105, 105, 0.7);
    text-align: center;
    padding-bottom: 15px;
    a {
        color: rgba(105, 105, 105, 0.9);
        font-weight: 400;
        cursor: pointer;
        font-size: 1rem;
    }
`