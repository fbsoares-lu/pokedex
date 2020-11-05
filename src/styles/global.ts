import { createGlobalStyle } from 'styled-components';

import pokeball from '../assets/pokeball.svg';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Poppins', sans-serif;
    /* background: #0b61ae; */
    background: #E5E7E9 url(${pokeball}) no-repeat right -100px bottom -100px;
}

button, body {
    /* color: #fdcc01; */
    color: #F2F3F4;

}

`;