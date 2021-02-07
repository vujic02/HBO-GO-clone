import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarBtnWrap,
    SidebarLink,
    SidebarRouteBtn
}   from './sidebar-styles'


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle}>TV Shows</SidebarLink>
                    <SidebarLink onClick={toggle}>Movies</SidebarLink>
                    <SidebarLink onClick={toggle}>Kids</SidebarLink>
                    <SidebarLink onClick={toggle}>More</SidebarLink>
                    <SidebarLink onClick={toggle}>Search</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRouteBtn onClick={toggle}>Register</SidebarRouteBtn>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
