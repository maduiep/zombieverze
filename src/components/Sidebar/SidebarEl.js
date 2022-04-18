import styled from "styled-components"
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 1000;
    display: grid;
    width: 90%;
    height: 70%;
    background: var(--primary-color);
    top: 0;
    left: 20%;
    border-radius: 1rem;
    transition: 0.3s ease-in-out;
    margin-top: 3.5rem;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};  
`


export const CloseIcon = styled(FaTimes)
`
    color: var(--white-color);
    position: absolute;
    left: 15%;
`

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    color: var(--white-color);
    position: relative;

`
export const SidebraWrapper = styled.div `
    color: var(--white-color);
    
`

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 60px);
    text-align: center;
    margin-top: 7rem;
    margin-right: 0rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(8, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)
`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: var(--white-color);
    font-family: 'Days One, sans-serif';
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--accent-color);
    }

    @media screen and (max-width: 680px) {
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--accent-color);
        }
    }
`

export const SidebarBtnWrap = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SidebarRoute = styled(LinkRouter)
`
    border-radius: 50px;
    background: var(--accent-color);
    white-space: nowrap;
    padding: 16px 64px;
    color: var(--white-color);
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--white-color);
        color: var(--accent-color);
        outline: none;
    }
`