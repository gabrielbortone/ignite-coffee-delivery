import { styled } from "styled-components";

export const PainelPagamentoContainer = styled.section`
    background: ${props=> props.theme['base-card']};
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
    width: 38rem;
    padding: 1.250rem;
    max-width: 38rem;
`;

export const PainelPagamentoHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    svg {
        margin-top: 1rem;
    }
`;

export const PainelPagamentoHeaderTextos = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    max-width: 100%;
    h4{
            font-size: 1.2rem;
            font-family: ${props=> props.theme['font-primary']};
            font-weight: 400;
            color: ${props=> props.theme['base-subtitle']};
            line-height: 0.8;
    }
    p{
            margin-top: -5px;
            font-size: 0.875rem;
            font-family: ${props=> props.theme['font-primary']};
            font-weight: 400;
            color: ${props=> props.theme['base-text']};
            line-height: 1.3;
    }
`;

export const PainelPagamentoConteudoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    justify-content: stretch;
    align-items: stretch;
    border-radius: 30%;
    margin: 0 auto;
    padding: 2rem 1rem;
`;

export const PainelPagamentoConteudoItem = styled.span`
    background: ${props=> props.theme['base-button']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.5rem;
    width: 10rem;
    &.active {
        border-radius: 6px;
        border: 1px solid ${props=> props.theme['purple-dark']};
        background: ${props=> props.theme['purple-light']};
    }
    p {
        font-size: 0.75rem;
        font-family: ${props=> props.theme['font-primary']};
        font-weight: 400;
        color: ${props=> props.theme['base-text']};
    }
`;