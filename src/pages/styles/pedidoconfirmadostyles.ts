import { styled } from "styled-components";

export const PedidoConfirmadoSection = styled.section`
    display: flex;
    max-width: 1120px;
    align-items: flex-end;
    gap: 2rem;
`;

export const PedidoConfirmadoTitulo = styled.h1`
    font-size: 2rem;
    font-family: ${props=> props.theme['font-secondary']};
    font-style: normal;
    font-weight: 800;
    line-height: 1.3; 
    color: ${props=> props.theme['yellow-dark']};
`;

export const PedidoConfirmadoParagrafo = styled.p`
    font-size: 1.2rem;
    font-family: ${props=> props.theme['font-primary']};
    font-style: normal;
    font-weight: 400;
    line-height: 1.3; 
    color: ${props=> props.theme['base-subtitle']};

`;

export const PedidoConfirmadoInfoParagrafo = styled.p`
    font-size: 1rem;
    font-family: ${props=> props.theme['font-primary']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 
    color: ${props=> props.theme['base-text']};
    padding: 0;
    margin: 0;
`;

export const PedidoConfirmadoContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: linear-gradient(#8047F8, #DBAC2C);
    border-radius: 6px 36px; 
`;

export const PedidoConfirmadoInfoContainer = styled.div`
    display: flex;
    word-break: break-all;
    align-items: center;
    gap: 1rem;
    background: ${props=> props.theme['background']};
`;

export const PedidoConfirmadoInfoMapa = styled.span`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px; 
    border-radius: 1000px; 
    background: ${props=> props.theme['purple']};
    width: 2rem;
    height: 2rem;
`;

export const PedidoConfirmadoInfoTempo = styled.span`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px; 
    border-radius: 1000px; 
    background: ${props=> props.theme['yellow']};
    width: 2rem;
    height: 2rem;
`;

export const PedidoConfirmadoInfoDinheiro = styled.span`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px; 
    border-radius: 1000px; 
    background: ${props=> props.theme['yellow-dark']};
    width: 2rem;
    height: 2rem;
`;

export const PedidoConfirmadoFundo = styled.div`
    background: ${props=> props.theme['background']};
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
    padding: 0.5rem;
    margin: -13px;
    border-radius: 6px 36px; 
`;