import { styled } from "styled-components";

export const PainelEnderecoContainer = styled.div`
    background: ${props=> props.theme['base-card']};
    display: flex;
    flex-direction: column;
    width: 38rem;
    padding: 2.5rem 0.5rem;
`;

export const PainelEnderecoHeader = styled.div`
    
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-top: -1.5rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    svg {
        margin-top: 0.88rem;
    }
`;

export const PainelEnderecoHeaderTextosContainer = styled.div`
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

export const PainelEnderecoHeaderInputContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2.2rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    max-width: 100%;

    input {
        background: ${props=> props.theme['base-input']};
        font-size: 1.2rem;
        font-family: ${props=> props.theme['font-primary']};
        font-weight: 400;
        color: ${props=> props.theme['base-label']};
        line-height: 1.3;
        border: 1px solid ${props=> props.theme['base-button']};
        padding: 0.2rem;
    }
    span {
        display: grid;
        grid-template-columns: 1fr 1fr 0.5fr;
        gap: 0.5rem;
        margin-top: 1.2rem;
        input:nth-child(3){
            max-width: 30%;
        }
    }


`;

export const PainelEnderecoTituloHeader = styled.h3`
    font-size: 1.25rem;
    font-family: ${props=> props.theme['font-secondary']};
    font-weight: 400;
    color: ${props=> props.theme['base-label']};
    line-height: 0.5;
`;