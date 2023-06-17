import { styled } from "styled-components";

export const CafeCartaoPrincipalSpan = styled.span`
    max-width: 16rem;
    max-height: 19.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props=> props.theme['base-card']};
`;

export const CafeCartaoPrincipalImagemContainer = styled.div`
    max-width: 7.5rem;
    max-height: 7.5rem;
    img{
        margin-top: -0.5rem;
        max-width: 100%;
        max-height: 100%;
    }
    margin-bottom: 0.5rem;
`;

export const CafeCartaoPrincipalTipoCafeSpan = styled.span`
    background: ${props=> props.theme['yellow-light']};
    color: ${props=> props.theme['yellow-dark']};
    font-size: 0.8rem;
    font-family: ${props=> props.theme['font-primary']};
`;

export const CafeCartaoPrincipalTitulo = styled.h1`
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 700;
    font-family: ${props=> props.theme['font-secondary']};
`;

export const CafeCartaoPrincipalDescricao = styled.p`
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;
    font-family: ${props=> props.theme['font-primary']};
`;