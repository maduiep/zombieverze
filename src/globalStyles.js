import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    :root{
        --primary-color: #000000;
        --accent-color: #01FFB0;
        --head-color: #74DB63;
        --secondary-color: #B98AFA;
        --white-color: #ffffff;
    }

    @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
    @import url('http://fonts.cdnfonts.com/css/blanka');
    @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    @font-face {
        font-family: "Blanka-Regular";
        src: url('fonts//Blanka-Regular.woff2') format('woff2'),
            url('fonts//Blanka-Regular.woff') format('woff'),
            url('fonts//Blanka-Regular.ttf') format('truetype');
            font-weight: 400;
            font-display: swap;
            font-style: normal;
    }

    @font-face {
        font-family: "DaysOne-Regular";
        src: url('fonts//DaysOne-Regular.woff2') format('woff2'),
            url('fonts//DaysOne-Regular.woff') format('woff'),
            url('fonts//DaysOne-Regular.ttf') format('truetype');
            font-weight: 400;
            font-display: swap;
            font-style: normal;
    }
    
    
    body{
        background: var(--primary-color);
        font-family: 'Days One', sans-serif;
        font-family: 'Blanka', sans-serif;
        overflow-x: hidden;
        margin:0;
        padding:0;
    }
`;

export const Container = styled.div `
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`

export default GlobalStyle;