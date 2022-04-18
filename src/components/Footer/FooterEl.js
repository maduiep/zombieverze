import styled from "styled-components"

export const FooterContainer = styled.div `
    width: 100%;
    height: 18.0625rem;
    background: #000;
`

export const NavHolder = styled.div `
    margin-top: 3.75rem;
`

export const TermsCopy = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 4.6875rem;

    p {
        color: var(--white-color);
        font-family: 'Inter', 'sans-serif';
        font-size: 1.125rem;
    }
    @media screen and (max-width: 620px) {
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
        a{
            margin-bottom: 20px;
        }
    }

    @media screen and (max-width:485px) {
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
        a{
            margin-bottom: 10px;
        }
    }
`

export const IconContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-right: 0rem;
        margin-left: 3rem;
    }
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