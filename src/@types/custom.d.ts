import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: string;
            warn: string;
        },
        toggler: {
            size: {
                small: string,
                medium: string,
                large: string,
            }
        },
        togglerHighlighter: {
            size: {
                small: string,
                medium: string,
                large: string,
            },
            move: {
                small: string,
                medium: string,
                large: string,
            }
        }
    }
}