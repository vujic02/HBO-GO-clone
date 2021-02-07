import styled from 'styled-components';
import {MdClose} from 'react-icons/md'


export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0" )};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
` 

export const CloseIcon = styled(MdClose)`
    color: #fff;
`


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const ModeBtnWrapper = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 0;

    @media screen and(max-width: 480px) {
        grid-template-rows: repeat(6, 60px);  
    }
`

export const SidebarLink = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #0091ea;
    }
`

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRouteBtn = styled.button`
    border-radius: 50px;
    background: #0091ea;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #010606;
    }
`