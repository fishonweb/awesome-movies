import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle<{ theme: any }>`
    ${reset}

    :root{
        --background: ${(props) => (props.theme.darkTheme ? '#4B5563' : '#FFFFFF')};
        --header: ${(props) => (props.theme.darkTheme ? '#1F2937' : '#60A5FA')};
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
        color: ${(props) => (props.theme.darkTheme ? '#FFFFFF' : '#000000')}
    }
`;

export default GlobalStyles;
