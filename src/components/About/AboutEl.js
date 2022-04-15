import styled from 'styled-components'

export const AboutContainer = styled.div `
    width: 100%;
    height: 50.625rem;
    background-image: url('/images/About.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;
`

export const AboutWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0rem 4rem;
`

export const AboutTextContent = styled.div `
    margin-top: 12.9375rem;
    color: var(--white-color);
    font-family: 'Days One', 'sans-serif';
    /* width: 38.125rem; */
    height: auto;

    h5 {
        font-size:1.25rem;
        font-weight: 400;
        padding-bottom: 1rem;
    }

    h2 {
        line-height: 61px;
        font-size: 2.5rem;
        font-weight: 400;
        padding-bottom: 0.8125rem;
    }

    p {
        font-size: 1.125rem;
        text-transform: uppercase;
        line-height: 27px;
        padding-bottom: 2rem;
    }
`
export const AboutImage = styled.div `
    margin-top: 12.9375rem;
`