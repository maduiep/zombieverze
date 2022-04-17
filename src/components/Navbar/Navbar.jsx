import React from 'react'
import { HashLink } from 'react-router-hash-link';  
import {
    Nav, 
    NavbarContainer,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    Img
} from './NavbarEl'

import { FaBars } from 'react-icons/fa'
import HeaderBTN from '../Buttons/HeaderBTN';
import { Link } from 'react-router-dom';

function Navbar(props) {

    const styles = {
        color: '#fff',
        'color:hover': {
            color: '#01FFB0',
        },
        textDecoration: 'none',
        listStyle: 'none',
       
    }
    // const toggle = () => {
    //     // setIsOpen(!isOpen)
    //     console.log('toggle nav')
    // }
    return (
        <Nav>
           <NavbarContainer>
                    <Link to="/">
                        <HashLink scrollIntoView smooth to="/">
                        <Img
                            src="./images/Logo.svg"
                            alt="img" 
                        />
                        </HashLink>
                    </Link>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
               
               <NavMenu data-aos="fade-in">
                   <NavItem>
                        <NavLinks>
                            <HashLink style={styles} scrollIntoView
                            smooth to="#about">ABOUT</HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks>
                        <HashLink 
                        style={styles} 
                        scrollIntoView
                        smooth to="#roadmap"
                        >
                            ROADMAP
                        </HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks>
                       <HashLink style={styles} scrollIntoView
                        smooth to="#team">TEAM</HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks>
                       <HashLink style={styles} scrollIntoView
                        smooth to="#faq">FAQ</HashLink>
                       </NavLinks>
                   </NavItem>
               </NavMenu>
               <HeaderBTN link={'http://mint.zombieverze.club/'}>MINT</HeaderBTN>
           </NavbarContainer>
        </Nav>
    )
}

export default Navbar
