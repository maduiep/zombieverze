const currentUrl = window.location.href;
export const BASE_URL =
    currentUrl.includes('zombieverse') ?
    "https://zombieverse.herokuapp.com/" :
    'http://localhost:3000/';