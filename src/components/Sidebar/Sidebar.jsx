import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebraWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarEl'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebraWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        ABOUT
                    </SidebarLink>

                    <SidebarLink to="about" onClick={toggle}>
                        ROADMAP
                    </SidebarLink>

                    <SidebarLink to="games" onClick={toggle}>
                        TEAM
                    </SidebarLink>

                    <SidebarLink to="nft" onClick={toggle}>
                        FAQ
                    </SidebarLink>
                </SidebarMenu>
            </SidebraWrapper>
        </SidebarContainer> 
    )
}

export default Sidebar
