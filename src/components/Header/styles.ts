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

export const HeaderShoppingInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        background: ${props => props.theme['yellow-light']};
        padding: 5px;
        border-radius: 8px;
    }
`;