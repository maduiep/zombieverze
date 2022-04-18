import styled, { keyframes } from "styled-components";

const Slider = keyframes `
    0% {
        background-image: url('/images/ZombiePirate.png');
    }

    50% {
        background-image: url('/images/ZombieMuster.png');
    }

    75% {
        background-image: url('/images/road.png');
    }

    100% {
        background-image: url('/images/human.png');
    }

`

export const HeroContainer = styled.div `
    width: 100%;
    min-height: 45.625rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;
    animation: ${Slider} 10s ease-in-out infinite;
`

export const TextContainer = styled.div `
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 4rem;
        font-weight: 400;
        padding-top: 13rem;
        font-family: 'Days One', sans-serif;
       
        span {
            color: var(--head-color);
            text-transform: uppercase;
            font-family: 'Blanka' 'Days One';                             
        }
    }

    p {
        text-transform: uppercase;
        font-family: 'Days One';
        padding-top: 1.25rem;
        font-size: 1.125rem;
        padding-bottom: 2rem;
    }

    @media screen and (max-width:960px) {
        h1 {
        text-align: center;
        font-size: 3.25rem;
        font-weight: 400;
        padding-top: 5rem;
        font-family: 'Days One', sans-serif;
       
        span {
            color: var(--head-color);
            text-transform: uppercase;
            font-family: 'Blanka', sans-serif;                             
        }
    }

        p {
            text-transform: uppercase;
            font-family: 'Days One';
            padding-top: 1.25rem;
            font-size: 1rem;
            text-align: center;
        }
    }

    @media screen and (max-width:650px) {
        h1 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 400;
        padding-top: 5rem;
        font-family: 'Days One', sans-serif;
       
        span {
            color: var(--head-color);
            text-transform: uppercase;
            font-family: 'Blanka', sans-serif;                             
        }
    }

        p {
            text-transform: uppercase;
            font-family: 'Days One';
            padding-top: 1rem;
            font-size: 0.8rem;
            text-align: center;
        }
    }

    @media screen and (max-width:550px) {
        h1 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 400;
        padding-top: 5rem;
        font-family: 'Days One', sans-serif;
        text-align: center;
       
        span {
            color: var(--head-color);
            text-transform: uppercase;
            font-family: 'Blanka', sans-serif;                             
        }
    }

        p {
            text-transform: uppercase;
            font-family: 'Days One';
            padding-top: 1rem;
            font-size: 0.8rem;
            text-align: center;
        }
    }

    @media screen and (max-width:300px) {
        h1 {
        text-align: center;
        font-size: 2rem;
        font-weight: 400;
        padding-top: 5rem;
        font-family: 'Days One', sans-serif;
        text-align: center;
       
        span {
            color: var(--head-color);
            text-transform: uppercase;
            font-family: 'Blanka', sans-serif;                             
        }
    }

        p {
            text-transform: uppercase;
            font-family: 'Days One';
            padding-top: 1rem;
            font-size: 0.5rem;
            text-align: center;
        }
    }
`

export const TextWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const IconContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
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

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;
    }
`

export const IconHolder = styled.div `
    margin-top: 12.625rem;

`