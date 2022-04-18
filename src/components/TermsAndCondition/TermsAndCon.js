import styled from "styled-components";

export const TermsContainer = styled.div `
    width: 100%;
    height: 100%;
    background-image: url('/images/Terms.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 620px) {
        width: 80%;
        margin: 0 auto;
    }
`

export const TermsContent = styled.div `
    max-width: 77.5rem;
    min-height: 155.1875rem;
    background: #45473F;
    margin-top: 5rem;
    margin-bottom: 5rem;
    opacity: 0.9;
    border-radius: 1.5rem;

    @media screen and (max-width: 993px) 
        {
            min-height: 165.1875rem;
        }

    @media screen and (max-width: 956px) 
    {
        min-height: 185.1875rem;
    }

    @media screen and (max-width: 825px) 
    {
        min-height: 195.1875rem;
    }

    @media screen and (max-width: 625px) 
    {
        min-height: 205.1875rem;
    }

    
`

export const Header = styled.div `
    h1 {
        font-size: 3rem;
        font-family: 'Days One', 'sans-serif';
        font-weight: 400;
        font-style: normal;
        color: var(--white-color);
        padding-left: 5.4375rem;
        padding-top: 3.4375rem;
        padding-bottom: 1.8125rem;

        @media screen and (max-width: 625px) 
        {
            padding-left: 2.rem;
        }

        @media screen and (max-width: 1113px) {
            font-size: 2rem;
            padding-top: 2rem;
            padding-bottom: 1rem;
        }

        @media screen and (max-width: 769px) {
            font-size: 1.5rem;
            padding-top: 2rem;
            padding-bottom: 1rem;
        
        }

        /* @media screen and (max-width: 620px) {
            padding: 2rem;
            font-size: 2rem;
        } */
    }

    h3 {
        font-size: 1.5rem;
        font-family: 'Days One', 'sans-serif';
        font-weight: 400;
        font-style: normal;
        color: var(--white-color);
        padding-left: 5.4375rem;
        padding-top: 1.4375rem;
        padding-bottom: 1rem;

        @media screen and (max-width: 625px) 
        {
            padding-left: 2rem;
        }

        @media screen and (max-width: 1113px) {
            font-size: 1rem;
            padding-top: 1rem;
            padding-bottom: 0.8rem;
        }

        @media screen and (max-width: 769px) {
            font-size: 0.8rem;
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
        
        }
    }
`
export const TermsText = styled.div `
    h3 {
        font-size: 1.5rem;
        font-family: 'Days One', 'sans-serif';
        font-weight: 400;
        font-style: normal;
        color: var(--white-color);
        padding-left: 5.4375rem;
        padding-top: 1.4375rem;
        padding-bottom: 1rem;

        @media screen and (max-width: 625px) 
        {
            padding-left: 2rem;
        }

        @media screen and (max-width: 1113px) {
            font-size: 1rem;
            padding-top: 1rem;
            padding-bottom: 0.8rem;
        }

        @media screen and (max-width: 769px) {
            font-size: 0.8rem;
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
        
        }

        /* @media screen and (max-width: 768px) {
            height: 205.1875rem;
            font-size: 1rem;
        } */
        /* @media screen and (max-width: 620px) {
            padding: .5rem 2rem;
            font-size: 1rem;
        } */
    }

    p {
        font-size: 1rem;
        font-family: 'Days One', 'sans-serif';
        font-weight: 400;
        font-style: normal;
        color: var(--white-color);
        padding-left: 5.4375rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-right: 5rem;
        line-height: 1.5rem;

        @media screen and (max-width: 625px) 
        {
            padding-left: 2rem;
        }

        @media screen and (max-width: 1113px) {
            font-size: 1rem;
            padding-top: 1rem;
            padding-bottom: 0.8rem;
            line-height: 1.5rem;
        }

        @media screen and (max-width: 769px) {
            font-size: 0.5rem;
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
        
        }

        /* @media screen and (max-width: 768px) {
            height: 205.1875rem;
            font-size: 0.8rem;
        } */
        /* @media screen and (max-width: 620px) {
            padding: .5rem 2rem;
            font-size: .8rem;
        } */
    }
`

export const ButtonWrapper = styled.div `
    margin-top: 2rem;
    margin-left: 5.4375rem;

    @media screen and (max-width: 545px) 
    {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.8rem;
        margin-left: 0.8rem
    }

    
`