import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 8px;
    width: 100%;
`;

export const HeaderInfosContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const HeaderLocalizationInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props=> props.theme['purple-dark']};
    span {
        background: ${props => props.theme['purple-light']};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }
    p {
        font-size: 1rem;
        line-height: 0.6;
        font-weight: 400;
        font-family: Roboto, sans-serif;
        padding-right: 6px;
    }
`;

export const HeaderShoppingInfo = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        background: ${props => props.theme['yellow-light']};
        padding: 5px;
        border-radius: 8px;
    }
    cursor: pointer;
`;

export const HeaderShoppingInfoQuantidadeItens = styled.span`
    background: ${props => props.theme['yellow-dark']};
    padding: 0.2rem;
    border-radius: 8px;
    text-align: center;
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-top: -1.25rem;
    color: white;
    margin-left: -0.3rem;
`;