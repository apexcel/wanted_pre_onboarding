import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    palette: {
        primary: `#6b4ce5`,
        warn: `#e54c4c`
    },
    toggler: {
        size: {
            small: `
                width: 120px;
                height: 32px;
                border-radius: 24px;
            `,
            medium: `
                width: 160px;
                height: 42px;
                border-radius: 27px;
            `,
            large: `
                width: 200px;
                height: 52px;
                border-radius: 34px;
            `
        }
    },
    togglerHighlighter: {
        size: {
            small: `
                right: 60px;
                border-radius: 24px;
            `,
            medium: `
                right: 80px;
                border-radius: 27px;
            `,
            large: `
                right: 100px;
                border-radius: 34px;
            `
        },
        move: {
            small: `
                left: 60px;
                right: 0;
            `,
            medium: `
                left: 80px;
                right: 0;
            `,
            large: `
                left: 100px;
                right: 0;
            `
        }
    }
};

const GlobalStyle = createGlobalStyle``;

export default GlobalStyle;