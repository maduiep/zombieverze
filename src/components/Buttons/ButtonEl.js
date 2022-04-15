import styled from "styled-components"

export const ButtonContainer = styled.button `

    width: 6.5625rem;
    height: 3.125rem;
    border:2px solid var(--accent-color);
    padding:20px 0px;
    display:flex;
    justify-content:center;
    align-items:center;
    color: var(--accent-color);
    background: #000;
    font-weight:bold;
    position:relative;
    transition:all ease-in-out .3s;
    -webkit-box-shadow: -1px -1px 4px 2px rgba(1,255,176,1);
    -moz-box-shadow: -1px -1px 4px 2px rgba(1,255,176,1);
    box-shadow: -1px -1px 4px 2px rgba(1,255,176,1);

    font-size: 1.125rem;
    font-weight: 600;
    font-style: normal;
    &:hover{
        cursor:pointer;
        background:#000;
        color:white;
        
        span:nth-child(1){
        top:0;
        left:0;
        }
        span:nth-child(2){
        top:0;
        right:0;
        }
        span:nth-child(3){
        bottom:0;
        left:0;
        }
        span:nth-child(4){
        bottom:0;
        right:0;
        }
    }
    span:nth-child(1){
        content:'';
        position:absolute;
        width:15px;
        height:15px;
        border-top:2px solid var(--accent-color);
        border-left:2px solid var(--accent-color);
        top:-7px;
        left:-7px;
        transition:all ease-in-out .3s;
    }
    span:nth-child(2){
        content:'';
        position:absolute;
        width:15px;
        height:15px;
        border-top:2px solid var(--accent-color);
        border-right:2px solid var(--accent-color);
        top:-7px;
        right:-7px;
        transition:all ease-in-out .3s;
    }
    span:nth-child(3){
        content:'';
        position:absolute;
        width:15px;
        height:15px;
        border-bottom:2px solid var(--accent-color);
        border-left:2px solid var(--accent-color);
        bottom:-7px;
        left:-7px;
        transition:all ease-in-out .3s;
    }
    span:nth-child(4){
        content:'';
        position:absolute;
        width:15px;
        height:15px;
        border-bottom:2px solid var(--accent-color);
        border-right:2px solid var(--accent-color);
        bottom:-7px;
        right:-7px;
        transition:all ease-in-out .3s;
    }
`