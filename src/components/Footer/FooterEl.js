import styled from "styled-components"
import { Container } from "../../globalStyles";
import { Link as LinkScroll } from 'react-scroll'

export const FooterContainer = styled.div `
    width: 100%;
    height: 18.0625rem;
    background: #000;
`


export const NavHolder = styled.div `
    margin-top: 3.75rem;
`

export const TermsCopy = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 4.6875rem;

    @media screen and (max-width: 768px) {
       flex-direction: column;
    }

    @media screen and (max-width: 620px) {
       flex-direction: column;
    }

    p {
        color: var(--white-color);
        font-family: 'Inter', 'sans-serif';
        font-size: 1.125rem;

        @media screen and (max-width: 768px) {
            padding-top: 0.8rem;
        }

        @media screen and (max-width: 620px) {
            padding-top: 0.8rem;
            }
        }
        @media screen and (max-width: 620px) {
            justify-content: space-around;
            flex-direction: column;
            text-align: center;
            a{
                margin-bottom: 20px;
            }
        }

        @media screen and (max-width:485px) {
            justify-content: space-around;
            flex-direction: column;
            text-align: center;
            a{
                margin-bottom: 10px;
            }
        }
`

export const IconContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
        /* flex-direction: column; */
        margin-right: 0rem;
        margin-left: 3rem;
        /* display: none; */
    }

    @media screen and (max-width: 590px) {
        margin-top: 1.5rem;
    } 
`
export const Icon = styled.div `
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #000;
    margin-right: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 1rem;
        height: 1rem;
    }

    @media screen and (max-width: 862px) {
        width: 1rem;
        height: 1rem;
    } 

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;

        @media screen and (max-width: 768px) {
        width: 0.8rem;
        /* height: 1rem; */
    }

    @media screen and (max-width: 862px) {
        width: 0.8rem;
        /* height: 1rem; */
    } 
    }
`

export const Nav = styled.nav `
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999999;
    background: var(--primary-color);
    color: var(--white-color);

    @media screen and (max-width: 950px) {
        transition: 0.8s all;
        padding: 0 2rem;
    }

    @media screen and (max-width: 768px) {
        transition: 0.8s all;
        padding: 0 5rem;
    }
`

export const NavbarContainer = styled(Container)
`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    ${Container}

`

export const Holder = styled(Container)
`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    ${Container}

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin-top: 1.8rem;
    } 


    @media screen and (max-width: 590px) {
        margin-top: 1.8rem;
        flex-direction: column;
        
    } 
`

export const Img = styled.img `
    width: 4rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 4rem;
        margin-left: -100px;
    }
`

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        margin-left: 5rem;
    }

    @media screen and (max-width: 620px) {
        margin-left: 5rem;
    }
`

export const NavItem = styled.li `
    height: 80px;
    color: var(--white-color);
    display: flex;
    align-items: center;
    text-decoration: none !important;
    padding: 0 1rem;
    font-size: 1rem;
    height: 100%;
    cursor: pointer;
    font-family: "Days One", sans-serif;

    @media screen and (max-width: 862px) {
        font-size: 0.5rem;
    } 

    @media screen and (max-width: 768px) {
        font-size: 0.5rem;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--accent-color);
    }

    &.active {
        color: var(--white-color);
    }
`

export const NavLinks = styled(LinkScroll)
`
    color: var(--white-color);
`