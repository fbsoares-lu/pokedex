import { createGlobalStyle } from 'styled-components';

import pokeball from '../assets/pokeball.svg';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #E5E7E9;
}

button, input {
    color: #F2F3F4;
}

#root {
    max-width: 900px;
    margin: 0 auto;   
}

`;