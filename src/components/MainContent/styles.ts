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
    flex-direction: column;
    row-gap: 0.8rem;
`;

export const ContainerCafes = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    row-gap: 2.5rem;
`;