import { createGlobalStyle } from 'styled-components';

import { main } from '../styles/themes/main';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body, input, button {
        font-family: ${main.fonts.text};
        font-weight: 300;
        background-color: ${main.colors.background};
        color: ${main.colors.shape};
        -webkit-font-smoothing:antialiased;
    }
`;