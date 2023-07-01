import { styled } from "styled-components";

export const CafeEscolhidoItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.75rem;
    align-items: center;
    border-bottom: 2px solid ${props=> props.theme['base-button']};

`;

export const CafeEscolhidoItemQuantidadeContainer = styled.div`
    display: flex;
    align-items: center;
    background: ${props=> props.theme['base-button']};
    border-radius: 20%;
`;

export const CafeEscolhidoItemMiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        font-size: 1rem;
        color: ${props=> props.theme['base-title']};
        font-weight: 400;
        line-height: 1.3;
        font-family: ${props=> props.theme['font-primary']};
    }
`;

export const CafeEscolhidoItemQuantidadeSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    padding: 0rem 0.1rem;
    gap: 0;
`;

export const CafeEscolhidoItemQuantidadeSpanNumero = styled.span`
    background: ${props=> props.theme['base-button']};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 1rem;
    padding: 0rem 0.1rem;
`;

export const CafeEscolhidoItemMiddleBottoesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-top: -0.5rem;
    
`;

export const CafeEscolhidoBotaoRemover = styled.span`
    background: ${props=> props.theme['base-button']};
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 2rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    p {
        color: ${props=> props.theme['base-text']};
        font-size: 0.75rem;
        padding: 0;
    }
`;

export const CafeEscolhidoItemSpanPreco = styled.span`
    display: flex;
    font-size: 1rem;
    line-height: 1.3;
    font-family: ${props=> props.theme['font-secondary']};
    font-weight: 700;
    margin-top: -0.6rem;
    align-items: center;
`;

export const CafeEscolhidoItemImagemContainer = styled.div`
    width: 4rem;
    height: 4rem;  
    img {
        max-width: 100%;
        max-height: 100%;
    }  
`;