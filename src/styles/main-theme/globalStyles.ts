import { styled } from "styled-components";

export const DefaultContainer = styled.main`
    max-width: 1120px;
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
`;

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme['background']};
  }
`