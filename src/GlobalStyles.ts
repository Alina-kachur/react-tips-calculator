import { createGlobalStyle } from "styled-components";
import shape from "./assets/images/shape.svg";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Roboto';
    height: 100vh;
    margin: 0;
    padding: 0;
    display: grid;
    background: top left no-repeat url(${shape}) #eaf2f2;
}
`;
