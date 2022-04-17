import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {
    SidebarContainer, 
    Icon, 
    SidebraWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarEl'

function Sidebar({isOpen, toggle}) {

    const styles = {
        color: '#ffffff'
    }
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <FaTimes style={styles}/>
            </Icon>
            <SidebraWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        ABOUT
                    </SidebarLink>

                    <SidebarLink to="roadmap" onClick={toggle}>
                        ROADMAP
                    </SidebarLink>

                    <SidebarLink to="team" onClick={toggle}>
                        TEAM
                    </SidebarLink>

                    <SidebarLink to="faq" onClick={toggle}>
                        FAQ
                    </SidebarLink>
                </SidebarMenu>
            </SidebraWrapper>
        </SidebarContainer> 
    )
}

export default Sidebar
