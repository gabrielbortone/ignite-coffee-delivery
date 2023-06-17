import { styled } from "styled-components";

export const TituloCafes = styled.h1`
    text-align: left;
    font-family: ${props=> props.theme['font-secondary']};
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 900;
    color: ${props=> props.theme['base-title']};
`;

export const SessaoCafes = styled.section`
    display: flex;
    width: 100%;
`;

export const ContainerCafes = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr,4);
    grid-template-rows: repeat(1fr,4);
`;