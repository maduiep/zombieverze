import styled from 'styled-components'

export const AboutContainer = styled.div `
    width: 100%;
    min-height: 50.625rem;
    background-image: url('/images/About.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;
    /* padding-bottom: 20px; */
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

export const Heading = styled.div `
    display: flex;
    span {
        border-left: 6px solid var(--accent-color);
        height: 1.5rem;
        padding-left: 0.5rem;
    }
    h5 {
        font-size: 1rem;
        font-weight: 400;
        padding-bottom: 1rem;
        
        
        @media screen and (max-width:1300px) {
            font-size: .8rem;
            font-weight: 300;
            padding-bottom: 0.8rem;

        }

        @media screen and (max-width:1030px) {
            font-size:0.8rem;
            font-weight: 200;
            padding-bottom: 0.8rem;

        }
    }

`

export const AboutTextContent = styled.div `
    margin-top: 12.9375rem;
    color: var(--white-color);
    font-family: 'Days One', 'sans-serif';
    position: relative;

    @media screen and (max-width:976px) {
        flex-direction: column;
    }
    @media screen and (max-width: 620px) {
        margin-top: 7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        order:1;
    }
    

    h2 {
        line-height: 61px;
        font-size: 2rem;
        font-weight: 400;
        padding-bottom: 0.8125rem;

        @media screen and (max-width:1300px) {
            line-height: 48px;
            font-size:2rem;
            font-weight: 300;
            padding-bottom: 0.8rem;

        }

        @media screen and (max-width:976px) {
            line-height: 45px;
            font-size:1.5rem;
            font-weight: 300;
            padding-bottom: 0.8rem;

        }

        @media screen and (max-width:1030px) {
            line-height: 41px;
            font-size:1.5;
            font-weight: 200;
            padding-bottom: 0.8rem;

        }
        @media screen and (max-width:768px)  {
            line-height: 41px;
            font-size:1.5;
            font-weight: 200;
            padding-bottom: 0.8rem;
            text-align: center;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }

        @media screen and (max-width:620px)  {
            line-height: 41px;
            font-size:1.5;
            font-weight: 200;
            padding-bottom: 0.8rem;
            text-align: center;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
    }

    p {
        font-size: 1rem;
        text-transform: uppercase;
        line-height: 25px;
        padding-bottom: 2rem;

        @media screen and (max-width:976px) {
            line-height: 20px;
            font-size: 0.8rem;
            font-weight: 300;
            padding-bottom: 0.5rem;

        }

        @media screen and (max-width:1300px) {
            font-size: 1rem;
            font-weight: 300;
            padding-bottom: 1rem;
            line-height: 25px;
        }

        @media screen and (max-width:1150px) {
            font-size: 0.8rem;
            font-weight: 300;
            padding-bottom: 1rem;
            line-height: 25px;
        }

        @media screen and (max-width:1030px) {

            font-size: 0.5rem;
            font-weight: 200;
            padding-bottom: 1rem;
            line-height: 23px;
        }

        @media screen and (max-width:768px)  {

            text-align: center;
            font-size: 0.8rem;
            text-transform: uppercase;
            line-height: 20px;
            padding-bottom: 1.5rem;
        }
        @media screen and (max-width:620px)  {
            text-align: center;

            font-size: 0.8rem;
            text-transform: uppercase;
            line-height: 20px;
            padding-bottom: 1.5rem;
        }

        @media screen and (max-width:490px)  {
            text-align: center;

            font-size: 0.5rem;
            text-transform: uppercase;
            line-height: 20px;
            padding-bottom: 1rem;
        }
    }
`
export const AboutImage = styled.div `
    margin-top: 12.9375rem;
    width: 30.566875rem;
    height: 30.455625rem;

    @media screen and (max-width:781px) {
        width: 22.566875rem;
        height: 22.455625rem;
    }

    
    img {
        width: inherit;
        height: inherit;
        border-radius: 1rem;

        @media screen and (max-width:976px) {
        /* padding-bottom: 4rem;  */
    }
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

    @media screen and (max-width: 768px) {
        margin-top: 0rem;
        margin-bottom: 1rem;
        width: 19.566875rem;
        height: 19.455625rem;
        order: 2;
    }
    @media screen and (max-width: 620px) {
        margin-top: 0rem;
        margin-bottom: 1rem;
        width: 19.566875rem;
        height: 19.455625rem;
        order: 2;
    }
`