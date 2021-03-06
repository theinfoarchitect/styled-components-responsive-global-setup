import { createGlobalStyle } from 'styled-components';
// prettier-ignore
import {
  defaultFontSize, googleFont, fontFamily, colorBlack
} from '../abstract/_variables';

import { respond } from '../abstract/_functions';

const GlobalStyle = createGlobalStyle`
    @import url(${googleFont});

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;

        ${respond('tab-land', 'font-size: 56.25%;')}
        ${respond('tab-port', 'font-size: 50%;')}
        ${respond('phone', 'font-size: 43.75%;')}
        ${respond('big-device', 'font-size: 75%;')}
        
    }

    body {
        box-sizing: border-box;
        font-family: ${fontFamily};
        font-size: ${defaultFontSize}rem; 
        color: ${colorBlack}   
    }
`;

export default GlobalStyle;
