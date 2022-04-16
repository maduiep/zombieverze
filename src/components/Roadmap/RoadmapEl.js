import styled from "styled-components";

export const RoadmapContainer = styled.div `
    width: 100%;
    height: 98.855625rem;
    background-image: url('/images/Roadmap.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;
`

export const RoadmapWrapper = styled.div `
    
`

export const RoadmapHolder = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 25.375rem;
`
export const RoadmapHolder2 = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 15.375rem;

    @media screen and (max-width: 1250px) {
        margin-top: 17.375rem;
    }
`
export const ImageWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center; 
    position: relative;

    img {
        padding-top: 10rem;
        position: absolute;
        top: 3;
    }
`

export const RoadmapContents = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 1250px) {
        display: flex;
        flex-wrap: wrap;
    }
`

export const RoadmapCardHolder = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`

export const CardHolder = styled.span `
display: flex;
    span {
        border-left: solid 0.25rem #565E63;
        height: 20rem;
        margin-top: 4rem;
    }
`


export const CardHolder2 = styled.span `
    span {
        border-left: solid 0.25rem #565E63;
        height: 20rem;
        padding-bottom: 4rem;
    }
`

export const Card = styled.div `
    width: 16.125rem;
    height: 16.75rem;
    background: #565E63;
    border-radius: 1rem;
    opacity: 0.9;

    -webkit-box-shadow: -1px 0px 6px 1px rgba(86,94,99,1);
    -moz-box-shadow: -1px 0px 6px 1px rgba(86,94,99,1);
    box-shadow: -1px 0px 6px 1px rgba(86,94,99,1);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        width: 13.125rem;
        height: 13.75rem;

        display: flex;
        flex-wrap: wrap;
    }

    h2 {
        font-size: 1.125rem;
        font-weight: 400;
        font-family: 'Poppins', 'sans-serif';
        color: var(--white-color);
        text-transform: uppercase;
    
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 1200px) {
            font-size: 1rem;
        }
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Poppins', 'sans-serif';
        color: var(--white-color);
        text-align: center;
        padding-top: 0.625rem;

        @media screen and (max-width: 1200px) {
            font-size: 0.8rem;
        }
    }
`

export const RoundCard2 = styled.div `
    width: 6.5rem;
    height: 6.723125rem;
    border-radius: 50%;
    background: #8A9194;
    opacity: 0.9;

    position: absolute;
    bottom: 16rem;
    -webkit-box-shadow: -1px 0px 6px 1px rgba(138,145,148,1);
    -moz-box-shadow: -1px 0px 6px 1px rgba(138,145,148,1);
    box-shadow: -1px 0px 6px 1px rgba(138,145,148,1);
    
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;

    h3 {
        font-size: 2rem;
        font-weight: 400;
        font-family: 'Poppins', 'sans-serif';
        color: var(--white-color);
        opacity: 1;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const RoundCard = styled.div `
    width: 6.5rem;
    height: 6.723125rem;
    border-radius: 50%;
    background: #8A9194;
    opacity: 0.9;

    @media screen and (max-width: 1200px) {
        width: 5.5rem;
        height: 5.723125rem;

        position: absolute;
        bottom: 13rem;
    }

    position: absolute;
    bottom: 16rem;
    -webkit-box-shadow: -1px 0px 6px 1px rgba(138,145,148,1);
    -moz-box-shadow: -1px 0px 6px 1px rgba(138,145,148,1);
    box-shadow: -1px 0px 6px 1px rgba(138,145,148,1);
    
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;

    h3 {
        font-size: 2rem;
        font-weight: 400;
        font-family: 'Poppins', 'sans-serif';
        color: var(--white-color);
        opacity: 1;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 1200px) {
            font-size: 1.5rem;
        }
    }
`

export const LineContainer = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8.125rem;
`

export const Circle = styled.span `
    width: 1.5rem;
    height: 1.5rem;
    background: #4E555A;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    z-index: 1;

    @media screen and (max-width: 1150px) {
        width: 1rem;
        height: 1rem;
    }
`

export const Dot = styled.span `
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #767E84;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    z-index: 1;

    @media screen and (max-width: 1150px) {
        width: 0.2rem;
        height: 0.2rem;
    }
`

export const Line1 = styled.span `
    height: 0.25rem;
    width: 10.25rem;
    background: #767E84;
    opacity: 0.9;

    @media screen and (max-width: 1150px) {
        width: 6.2rem;
        height: 0.2rem;
    }
`
export const Line2 = styled.span `
    height: 0.25rem;
    width: 13.9375rem;
    background: #767E84;
    opacity: 0.9;

    @media screen and (max-width: 1150px) {
        width: 6.2rem;
        height: 0.2rem;
    }
`

export const Line3 = styled.span `
    height: 0.25rem;
    width: 8rem;
    background: #767E84;
    opacity: 0.9;
    @media screen and (max-width: 1150px) {
        width: 5.2rem;
        height: 0.2rem;
    }
`

export const Line4 = styled.span `
    height: 0.25rem;
    width: 8rem;
    background: #767E84;
    opacity: 0.9;
    @media screen and (max-width: 1150px) {
        width: 5.2rem;
        height: 0.2rem;
    }
`


export const Line5 = styled.span `
    height: 0.25rem;
    width: 10.375rem;
    background: #767E84;
    opacity: 0.9;
    @media screen and (max-width: 1150px) {
        width: 6.2rem;
        height: 0.2rem;
    }
`


export const Line6 = styled.span `
    height: 0.25rem;
    width: 5.5625rem;
    background: #767E84;
    opacity: 0.9;
    @media screen and (max-width: 1150px) {
        width: 3.2rem;
        height: 0.2rem;
    }
`