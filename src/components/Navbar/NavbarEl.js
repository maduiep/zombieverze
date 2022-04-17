import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link as LinkScroll } from 'react-scroll'

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
    justify-content: space-between;
    align-items: center;
    height: 80px;
    ${Container}

    @media only screen and (max-width: 768px) {
        align-items: flex-start;
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

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: var(--white-color);
        float: right !important;
    }
`

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li `
    height: 80px;
    color: var(--white-color);
    display: flex;
    align-items: center;
    text-decoration: none !important;
    padding: 0 1rem;
    font-size: 1.2;
    height: 100%;
    cursor: pointer;
    font-family: "Days One", sans-serif;

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