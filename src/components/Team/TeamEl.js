import styled from "styled-components";

export const TeamContainer = styled.div `
    width: 100%;
    min-height: 98.855625rem;
    background-image: url('/images/Team.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: center;
`

export const TeamWrapper = styled.div `
    @media screen and (max-width: 620px) {
       width:90%;
       margin: 0px auto;
    }
    position: relative;


`

export const TeamText = styled.div `
    margin-top: 12.9375rem; 
    color: var(--white-color);
    font-family: 'Days One', 'sans-serif';
    @media screen and (max-width:1000px) {
        margin-top: 12.9375rem;
    }
    h5 {
        font-size:1.25rem;
        font-weight: 400;
        padding-bottom: 1rem;

        @media screen and (max-width:1000px) {
            font-size: 1rem;
            font-weight: 300;
            padding-bottom: 0.8rem;
        }
    }

    h2 {
        line-height: 61px;
        font-size: 2.5rem;
        font-weight: 400;
        padding-bottom: 0.8125rem;

        @media screen and (max-width:1000px) {
            line-height: 51px;
            font-size: 2rem;
            font-weight: 300;
            padding-bottom: 0.8rem;
        }
    }

    p {
        font-size: 1.125rem;
        text-transform: uppercase;
        line-height: 27px;
        padding-bottom: 2rem;

        @media screen and (max-width:1000px) {
            font-size: 1rem;
            text-transform: uppercase;
            line-height: 22px;
            padding-bottom: 1.5rem;
        }
    }
    img{
        position: absolute;
        top:13%;
        left:-2%;
        @media screen and (max-width: 620px) {
            position: relative;
        }
    }
`

export const TeamProfile = styled.div `
    width: 19.3125rem;
    height: 6.8125rem;
    background: #383C3E;
    border-radius: 1rem;
    font-family: 'Days One', 'sans-serif';
    font-weight: 400;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h4 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1rem;
    }
`


export const TeamMember = styled.div `
    margin-top: 8.229375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        padding-bottom: 2.6225rem; 
    }
`
export const TeamContents = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    color: var(--white-color); 
    @media screen and (max-width: 620px) {
        flex-direction: column;
        text-align: center;
    }
    
`


export const TeamMembersContainer = styled.div `
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column; */
`

export const TeamMembersWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5rem;
    @media screen and (max-width: 620px) {
        flex-direction: column;
    }

    

`

export const TeamMembers = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--white-color);
    @media screen and (max-width: 620px) {
        margin-bottom: 5rem;
    }
    h4 {
        font-size: 1.5rem;
        
            @media screen and (max-width:1060px) {
            font-size: 1rem;
        }
    }

    h2 {
        font-size: 1rem;

        @media screen and (max-width:1060px) {
            font-size: 0.8rem;
        }
    }

    img {
        padding-bottom: 2.6225rem;
        @media screen and (max-width:1060px) {
            padding-bottom: 2rem;
        }
    }
`