import { styled } from "styled-components";

export const CafeCartaoPrincipalSpan = styled.span`
    width: 16rem;
    height: 19.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props=> props.theme['base-card']};
    border-bottom-left-radius: 1rem;
`;

export const CafeCartaoPrincipalSpanConntainerItens = styled.div`
    margin-top: -0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;



export const CafeCartaoPrincipalImagemContainer = styled.div`
    max-width: 8rem;
    max-height: 8rem;
    img{
        max-width: 100%;
        max-height: 100%;
    }
    margin-bottom: 0.5rem;
`;

export const CafeCartaoPrincipalTipoCafeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const CafeCartaoPrincipalTipoCafeSpan = styled.span`
    background: ${props=> props.theme['yellow-light']};
    color: ${props=> props.theme['yellow-dark']};
    font-size: 0.8rem;
    font-family: ${props=> props.theme['font-primary']};
`;

export const CafeCartaoPrincipalTitulo = styled.h1`
    font-size: 1.4rem;
    line-height: 0.8;
    font-weight: 700;
    font-family: ${props=> props.theme['font-secondary']};
`;

export const CafeCartaoPrincipalDescricao = styled.p`
    font-size: 0.875rem;
    line-height: 1.2;
    font-weight: 400;
    font-family: ${props=> props.theme['font-primary']};
    text-align: center;
    max-width: 13.5rem;
`;

export const CafePrincipalContainerFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const CafePrincipalPrecoContainer = styled.span`
    display: flex;
    justify-content: center;
    h3 {
        align-items: end;
        font-size: 1.5rem;
        font-weight: 700;
        font-family: ${props=> props.theme['font-secundary']};
        span {
            font-size: 0.650rem;
            font-weight: 400;
            font-family: ${props=> props.theme['font-primary']};
            padding-right: 0.2rem;
        }
    }
`;

export const CafePrincipalQuantidadeContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`;

export const CafePrincipalFooterBotaoComprar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.theme['purple']};
    border: none;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 8px;
`;