import Logo from "../Logo";
import { HeaderContainer, HeaderInfosContainer, HeaderLocalizationInfo, HeaderShoppingInfo } from "./styles";
import { MapPin, ShoppingCart  } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

export default function Header(){
    const theme = useTheme();

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
                    <HeaderShoppingInfo>
                        <span>
                            <ShoppingCart size={26} color={theme['yellow-dark']}/>
                        </span>
                    </HeaderShoppingInfo>
                </HeaderInfosContainer>
            </HeaderContainer>
        )
    }

    return (
        <div>Error...</div>
    )
    




}