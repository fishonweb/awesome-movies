import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle<{ darkTheme?: boolean }>`
    ${reset}

    :root{
        --background: ${(props) => (props.darkTheme ? '#4B5563' : '#FFFFFF')};
        --header: ${(props) => (props.darkTheme ? '#1F2937' : '#60A5FA')};
    }

    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }

    :visited,
    :focus {
        color: #000000;
    }

    #root{
        margin:0 auto;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: var(--background);
    }
`;

export default GlobalStyles;
