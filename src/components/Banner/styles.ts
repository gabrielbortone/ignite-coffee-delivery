import { styled } from "styled-components";
import background from '../../assets/background-banner.png';

export const BannerContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: 3rem auto;
    justify-content: center;
    background: url(${background});
    background-size: 100%;
`;

export const BannerFirstContent = styled.div`
    max-width: 580px;
    gap: 0px;
    margin: 0;
    h1 {
        font-family: ${props=> props.theme['font-secondary']};
        font-size: 3rem;
        line-height: 1;
        font-weight: 900;
        color: ${props=> props.theme['base-title']};
    }
    p {
        font-family: ${props=> props.theme['font-primary']};
        font-size: 1rem;
        font-weight: 400;
        color: ${props=> props.theme['base-subtitle']};
    }
`;

export const BannerSecondContent = styled.div`
    span {
        max-width: 29.75rem;
        max-height: 22.5rem;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const SectionOfIconsOfBanner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem;
    margin-top: 2.5rem;
`;

export const IconAndText = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-left: 0.5rem;
        font-size: 1rem;
        font-family: ${props=> props.theme['font-primary']};
    }
`;

export const IconeCarrinho = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.theme['yellow-dark']};
    padding: 3.5px;
    border-radius: 18px;
`;

export const IconeRelogio = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.theme['yellow']};
    padding: 3.5px;
    border-radius: 18px;
`;

export const IconeEmbalagem = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.theme['base-title']};
    padding: 3.5px;
    border-radius: 18px;
`;

export const IconeCafe = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.theme['purple']};
    padding: 3.5px;
    border-radius: 18px;
`;