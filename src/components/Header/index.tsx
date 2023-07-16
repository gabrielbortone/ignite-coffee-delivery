import { useContext } from "react";
import Logo from "../Logo";
import { HeaderContainer, HeaderInfosContainer, HeaderLocalizationInfo, HeaderShoppingInfo, HeaderShoppingInfoQuantidadeItens } from "./styles";
import { MapPin, ShoppingCart  } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { VendasContext } from "../../contexts/VendasContext";

export default function Header(){
    const theme = useTheme();
    const {quantidadeItens} = useContext(VendasContext);


    if(theme){
        return (
            <HeaderContainer>
                <Logo />
                <HeaderInfosContainer>
                    <HeaderLocalizationInfo>
                        <span>
                            <MapPin size={24} color={theme['purple']}/>
                            <p>Porto Alegre, RS</p>
                        </span>
                    </HeaderLocalizationInfo>
                    <HeaderShoppingInfo to="/checkout">
                        <div>                          
                            <ShoppingCart size={26} color={theme['yellow-dark']}/>
                        </div>
                        <HeaderShoppingInfoQuantidadeItens>{quantidadeItens}</HeaderShoppingInfoQuantidadeItens>

                    </HeaderShoppingInfo>
                </HeaderInfosContainer>
            </HeaderContainer>
        )
    }

    return (
        <div>Error...</div>
    )
    




}