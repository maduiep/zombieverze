import styled from "styled-components";

export const HeroContainer = styled.div `
    width: 100%;
    height: 50.625rem;
    background-image: url('/images/ZombiePirate.png');
    background-size: cover;
    background-repeat: no-repeat;
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
        padding-top: 22rem;
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
        font-size: 1.125rem;
        padding-bottom: 2rem;
    }

    @media screen and (max-width:960px) {
        h1 {
        font-size: 2.25rem;
        font-weight: 400;
        padding-top: 25rem;
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
        }
    }

    @media screen and (max-width:650px) {
        h1 {
        font-size: 2rem;
        font-weight: 400;
        padding-top: 25rem;
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
        }
    }

    @media screen and (max-width:550px) {
        h1 {
        font-size: 2rem;
        font-weight: 400;
        padding-top: 25rem;
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
        font-size: 1.5rem;
        font-weight: 400;
        padding-top: 25rem;
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
    margin-top: 9.65rem;
`