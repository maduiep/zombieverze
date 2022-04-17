import styled from "styled-components";
import { Img } from './../Navbar/NavbarEl';

export const RoadmapContainer = styled.div `
    width: 100%;
    min-height: 98.855625rem;
    background-image: url('/images/Roadmap.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;
    @media screen and (max-width: 768px) {
        
    }
`

export const RoadmapWrapper = styled.div `
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

export const RoadmapHolder = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 25.375rem;
    @media screen and (max-width: 620px) {
        margin-top: 10rem;
    }

    
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
    @media screen and (max-width: 620px) {
        width: 100%;
        Img{
            width: 300px;
            height: 64px;
        }
    }
    img {
        padding-top: 10rem;
        position: absolute;
        top: 3px;
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
    @media screen and (max-width: 620px) {
        flex-direction: column;
        justify-content: space-between;
    }
`

export const RoadmapCardHolder = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`

export const CardHolder = styled.span `
    display: flex;
    span {
        border-left: solid 0.25rem #565E63;
        height: 20rem;
        margin-top: 4rem;
    }
    @media screen and (max-width: 620px) {
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
    /* background: #565E63; */
    /* border-radius: 1rem; */
    opacity: 0.8;


    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #868F96 0%, #596164 100%);
    /* opacity: 0.7; */
    box-shadow: 20px 20px 50px rgba(27, 1, 60, 0.33);
    border-radius: 30px;

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
    @media screen and (max-width: 620px) {
        height: 300px;
        width: 290px;
        border-radius: 30px;
        margin-bottom: 10rem;
    }
    h2 {
        font-size: 1.125rem;
        font-weight: 400;
        font-family: 'Poppins';
        color: var(--white-color);
        text-transform: uppercase;
    
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 1200px) {
            font-size: 1rem;
        }
        @media screen and (max-width: 620px) {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 155.5%;
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
        @media screen and (max-width: 620px) {
            font-size: 16px;
            line-height: 155.5%;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
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
    
    background: linear-gradient(90deg, #868F96 0%, #596164 100%);
    box-shadow: inset 19.2116px 19.2116px 80.6887px rgba(255, 255, 255, 0.5);
    @media screen and (max-width: 1200px) {
        width: 5.5rem;
        height: 5.723125rem;
        position: absolute;
        bottom: 13rem;
    }

    position: absolute;
    bottom: 16rem;
    top: -32%;
    left: 25%;
    /* -webkit-box-shadow: -1px 0px 6px 1px rgba(138,145,148,1);
    -moz-box-shadow: -1px 0px 6px 1px rgba(138,145,148,1);
    box-shadow: -1px 0px 6px 1px rgba(138,145,148,1); */
    
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    @media screen and (max-width: 620px) {
        top: -15%;
        left: 40%;
    }
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