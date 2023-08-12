import { createGlobalStyle } from 'styled-components';
import { colorsBackground } from './Theme';

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: linear-gradient(${colorsBackground.radialGradient});
        background-repeat: no-repeat;
        overflow: hidden;
    }

    img {
        width: 100%;
    }

`;

export default GlobalStyle;
