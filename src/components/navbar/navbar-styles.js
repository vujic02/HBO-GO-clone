import styled from 'styled-components'

// export const NavbarWrap = styled.nav`
//     display: flex;
//     justify-content: center;
//     flex-direction: row;
//     margin: 5px;
// `

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    width: 100%;
    height: ${({scrollNav}) => (scrollNav ? "50px" : "65px")};
    transition: 0.4s all ease;
    background: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.2)')};
    position: sticky;
    z-index: 50;
    font-family: 'Raleway', sans-serif;
`

export const NavbarItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 80px;
    padding-right: 80px;
    height: 100%;
    .menu-icon {
        display: none;
    }
    @media screen and (max-width: 768px) {
        .menu-icon {
            display: block;
            position: absolute;
            top: ${({scrollNav}) => (scrollNav ? "10px" : "20px")};
            right: 20px;
            fill: #fff;
            width: 30px;
            height: 30px;
            transition: all ease-in-out 0.3s;
            cursor: pointer;
        }
    }
`

export const NavbarItems = styled.div`
    display: flex;
    align-self: ${({FlexAlign}) => FlexAlign};
    height: 100%;
`

export const NavbarSignup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: linear all 0.4s;
    cursor: pointer;
    margin-right: 5px;
    height: 100%;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavbarItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: ${({mgL}) => (mgL ? "10px" : "0")};
    padding-left: ${({pL}) => pL};
    padding-right: ${({pR}) => pR};
    transition: linear all 0.4s;
    cursor: pointer;
    &:hover {
        .nav-item-overlay {
            bottom: 0;
            height: 100%;
        }
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavbarLogoContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${({mgL}) => (mgL ? "10px" : "0")};
    padding-left: ${({pL}) => pL};
    padding-right: ${({pR}) => pR};
    transition: linear all 0.4s;
    cursor: pointer;
    &:hover {
        .nav-item-overlay {
            bottom: 0;
            height: 100%;
        }
    }

`

export const Overlay = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: #0091ea;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
    margin-bottom: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const NavbarH3 = styled.h3`
    font-size: ${({size}) => size}rem;
    font-weight: ${({weight}) => weight};
    color: #fff;
    z-index: 2;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase;
`

export const NavbarP = styled.p`
    font-size: ${({size}) => size}rem;
    font-weight: ${({weight}) => weight};
    color: #fff;
`

export const NavbarLogo = styled.img`
    width: ${({imgWidth}) => imgWidth}px;
    height: ${({imgHeight}) => imgHeight}px;
`

export const NavbarBtn = styled.span`
    display: inline-block;
    font-size: ${({size}) => size};
    font-weight: ${({weight}) => weight};
    background-color: ${({BtnBg}) => BtnBg};
    color: ${({BtnColor}) => BtnColor};
    border: ${({BtnBorder}) => BtnBorder};
    border-radius: ${({BtnBorderRadius}) => BtnBorderRadius};
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    transition: ease-in 0.3s;
    &:hover {
        transition: ease-in 0.3s;
        background-color: ${({BtnBgHover}) => BtnBgHover};
        border: ${({BtnBorderHover}) => BtnBorderHover}
    }
`


