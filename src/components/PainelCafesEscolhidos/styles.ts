import { styled } from "styled-components";

export const PainelCafesEscolhidosHeaderTitulo = styled.h3`
    font-size: 1.25rem;
    font-family: ${props=> props.theme['font-secondary']};
    font-weight: 400;
    color: ${props=> props.theme['base-label']};
    line-height: 0.5;
`;

export const PainelCafesEscolhidosItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: ${props=> props.theme['base-card']};
    padding: 1rem;
`;

export const PainelCafesEscolhidosFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 1rem;
`;

export const PainelCafesEscolhidosMainContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 28rem;
`;

export const PainelCafesEscolhidosFooterSpan = styled.span`
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem;

    p {
        color: ${props=> props.theme['base-subtitle']};
        font-family: ${props => props.theme['font-primary']};
        font-size: 1rem;
    }
`;

export const PainelCafesEscolhidosFooterSpanTotal = styled.span`
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem;

    p {
        color: ${props=> props.theme['base-subtitle']};
        font-family: ${props => props.theme['font-primary']};
        font-size: 1.125rem;
        font-weight: 700;
    }
`;

export const PainelCafesEscolhidosMainSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 28rem;
    background: ${props=> props.theme['base-card']};
    border-radius: 1rem;
`;