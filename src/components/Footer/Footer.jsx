import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Nav, NavbarContainer, Img, NavMenu, NavLinks, NavItem } from '../Navbar/NavbarEl'

import {
    FooterContainer,
    NavHolder,
    TermsCopy,
    IconContainer,
    Icon
} from './FooterEl'

const Footer = () => {
    const styles = {
        color: '#fff',
        'color:hover': {
            color: '#01FFB0',
        },
        textDecoration: 'none',
        listStyle: 'none',
       
    }
  return (
    <FooterContainer>
        <NavHolder>
            <Nav>
                <NavbarContainer>
                        <Img className="userList__profile"
                            src="./images/Logo.svg"
                            alt="img" 
                        />
                    <NavMenu data-aos="fade-in">
                        <NavItem>
                                <NavLinks>
                                    <HashLink style={styles} scrollIntoView
                                    smooth to="#info">ABOUT</HashLink>
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks>
                                <HashLink 
                                style={styles} 
                                scrollIntoView
                                smooth to="#about"
                                >
                                    ROADMAP
                                </HashLink>
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks>
                            <HashLink style={styles} scrollIntoView
                                smooth to="#games">TEAM</HashLink>
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks>
                            <HashLink style={styles} scrollIntoView
                                smooth to="#nft">FAQ</HashLink>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <IconContainer>
                        <Icon>
                        <a href="http://twitter.com/zverze_">
                            <img src="/images/Twiiter.svg" alt="" />
                        </a>
                        </Icon>
                        <Icon>
                        <a href="https://discord.gg/eD8q294wa2">
                            <img src="/images/Sailor.svg" alt="" />
                        </a>
                        </Icon>
                        <Icon>
                        <a href="https://opensea.io/collection/zombieverze-official">
                            <img src="/images/Discord.svg" alt="" />
                        </a>
                        </Icon>
                    </IconContainer>
                </NavbarContainer>
            </Nav>
        </NavHolder>

        <TermsCopy>
           <Link to="/TermsAndConditions">
            <p style={{cursor: 'pointer'}}>Terms  & Conditions</p>
           </Link>
            <p>Copyright &copy; 2022 Zombieverze. All rights reserved.</p>
        </TermsCopy>
    </FooterContainer>
  )
}

export default Footer