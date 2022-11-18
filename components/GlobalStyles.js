import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --text-primary: #000000;
        --text-secondary: #013220;
        --background-primary: #3C7A1C;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: flex;
        align-items: center;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
