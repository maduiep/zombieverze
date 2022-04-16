import styled from 'styled-components'

export const AboutContainer = styled.div `
    width: 100%;
    min-height: 50.625rem;
    background-image: url('/images/About.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;
    padding-bottom: 20px;
`

export const AboutWrapper = styled.div `
    margin: 0rem 4rem;
`

export const ContentWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 620px) {
        flex-direction: column;
    }
`

export const ImageWrapper = styled.div `
    
    img {
        
    }

    /* @media screen and (max-width:960px)  {
        order: 1;
    } */
`

export const AboutTextContent = styled.div `
    margin-top: 12.9375rem;
    color: var(--white-color);
    font-family: 'Days One', 'sans-serif';
    position: relative;
    @media screen and (max-width:1300px) {
        text-align: center;
    }
    @media screen and (max-width: 620px) {
        margin-top: 10rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        order:1;
    }
    h5 {
        font-size:1.25rem;
        font-weight: 400;
        padding-bottom: 1rem;
        /* @media screen and (max-width:960px)  {
            order: 2;
        } */
        @media screen and (max-width:1300px) {
            font-size:1rem;
            font-weight: 300;
            padding-bottom: 0.8rem;

        }

        @media screen and (max-width:1030px) {
            font-size:0.8rem;
            font-weight: 200;
            padding-bottom: 0.8rem;

        }
    }

    h2 {
        line-height: 61px;
        font-size: 2.5rem;
        font-weight: 400;
        padding-bottom: 0.8125rem;

        @media screen and (max-width:1300px) {
            line-height: 51px;
            font-size:2rem;
            font-weight: 300;
            padding-bottom: 0.8rem;

        }

        @media screen and (max-width:1030px) {
            line-height: 41px;
            font-size:1.5;
            font-weight: 200;
            padding-bottom: 0.8rem;

        }
        /* @media screen and (max-width:960px)  {
            order: 3;
        } */
    }

    p {
        font-size: 1.125rem;
        text-transform: uppercase;
        line-height: 27px;
        padding-bottom: 2rem;

        @media screen and (max-width:1300px) {
            font-size: 1rem;
            font-weight: 300;
            padding-bottom: 1.5rem;
            line-height: 25px;
        }

        @media screen and (max-width:1150px) {
            font-size: 0.8rem;
            font-weight: 300;
            padding-bottom: 1.5rem;
            line-height: 25px;
        }

        @media screen and (max-width:1030px) {
            font-size: 0.5rem;
            font-weight: 200;
            padding-bottom: 1.5rem;
            line-height: 23px;
        }
        /* @media screen and (max-width:960px)  {
            order: 4;
        } */
    }
`
export const AboutImage = styled.div `
    margin-top: 12.9375rem;
    width: 30.566875rem;
    height: 30.455625rem;
    
    img {
        width: inherit;
        height: inherit;
        border-radius: 1rem;
    }

    @media screen and (max-width:1300px) {
        margin-top: 12.9375rem;
        width: 25.566875rem;
        height: 25.455625rem;

    }

    @media screen and (max-width:1050px) {
        margin-top: 12.9375rem;
        width: 22.566875rem;
        height: 22.455625rem;
    }
    @media screen and (max-width: 620px) {
        margin-top: 0rem;
        width: 100%;
        height: 320.33203125px;
        order: 2;
    }
`