import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --bg-default: #fafafa;
    }

    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%
    }

    body{
        width: 100%;
        height: 100vh;
        background: var(--bg-default);
        font-family: 'Raleway', 'Poppins', sans-serif;
    }
`;