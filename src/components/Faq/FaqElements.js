import styled from "styled-components"

export const FaqContainer = styled.div `
    margin-bottom: 0rem;
    margin-top: 0rem;
    background: #0E0D0D;
    height: 75.6875rem;
`

export const ImageWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 5rem;
    position: relative;

    img {
        position: absolute;
        top: 1;
    }
`

export const FaqText = styled.h1 `
    font-size: 40px;
    font-weight: 400;
    line-height: 45px;
    color: var(--white-color);
    font-family: 'Days One', 'sans-serif';
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    padding-top: 0.8rem;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }
`

export const FaqWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FaqAccordion = styled.div `
    width: 70rem;

    @media screen and (max-width: 1250px) {
        width: 60rem;
    }

    @media screen and (max-width: 1190px) {
        width: 50rem;
    }

    @media screen and (max-width: 1150px) {
        width: 45rem;
    }

    @media screen and (max-width: 990px) {
        width: 35rem;
    }

    @media screen and (max-width: 960px) {
        width: 28rem;
    }

    @media screen and (max-width: 768px) {
        width: 23rem;
    }

    @media screen and (max-width: 620px) {
        width: 19rem;
    }
`

export const FaqItem = styled.div `
    background: #2E3132;
    opacity: 0.5;
    margin-bottom: 1rem;
    padding: 10px 20px;
    border-radius: 10px;
`

export const FaqTitle = styled.div `
    display: flex;
    justify-content: space-between;
    color: var(--white-color);
    font-family: 'Days One', 'sans-serif';
    font-weight: 400;
    margin-bottom: 0.5rem;
    cursor: pointer;
    margin-top: 0.5rem;

    h2 {
        font-size: 16px;
    }
    span {
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
            h2 {
            font-size: 14px;
        }
        span {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 480px) {
            h2 {
            font-size: 12px;
        }
        span {
            font-size: 12px;
        }
    }

`

export const FaqContent = styled.div `
    color: #93999B;
    font-family: 'Rota';
    font-style: normal;
    font-family: 'Days One', 'sans-serif';
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
        line-height: 18px;
    }

    height: auto;
    max-height: ${(props) => props.selected === props.active ? '9999px' : '0px'};
    overflow: ${(props) => props.selected === props.active ? 'none' : 'hidden'};

    transition: ${(props) => props.selected === props.active ? 'cubic-bezier(1,0,1,0)' : 'all 0.5s cubic-bezier(0,1,0,1)'};
`