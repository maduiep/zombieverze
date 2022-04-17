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
                    <Img className="userList__profile"
                        src="./images/Logo.svg"
                        alt="img" 
                    />
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
               
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
               <HeaderBTN link={'http://mint.zombieverze.club/'}>MINT</HeaderBTN>
           </NavbarContainer>
        </Nav>
    )
}

export default Navbar
