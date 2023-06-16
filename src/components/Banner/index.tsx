import { useTheme } from "styled-components";
import { BannerContainer, BannerFirstContent, BannerSecondContent, IconAndText, IconeCafe, IconeCarrinho, IconeEmbalagem, IconeRelogio, SectionOfIconsOfBanner } from "./styles";
import imgBanner from '../../assets/destaque.png';
import { ShoppingCart,Package, Clock, Coffee } from "@phosphor-icons/react";

export default function Banner(){
    const theme = useTheme();

    const tamanhoIcone = 28;

    if(!theme){
        return (<h1>Error</h1>)
    }
    return (
        <BannerContainer>
            <BannerFirstContent>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <SectionOfIconsOfBanner>
                    <IconAndText>
                        <IconeCarrinho>
                            <ShoppingCart size={tamanhoIcone} color={theme['background']}/>
                        </IconeCarrinho>
                        <p>
                        Compra simples e segura
                        </p>
                    </IconAndText>
                    <IconAndText>
                        <IconeRelogio>
                            <Clock size={tamanhoIcone} color={theme['background']}/>
                        </IconeRelogio>
                        <p>
                        Entrega rápida e rastreada
                        </p>
                    </IconAndText>
                    <IconAndText>
                        <IconeEmbalagem>
                            <Package size={tamanhoIcone} color={theme['background']}/>
                        </IconeEmbalagem>
                        <p>
                        Embalagem mantém o café intacto
                        </p>
                    </IconAndText>
                    <IconAndText>
                        <IconeCafe>
                            <Coffee size={tamanhoIcone} color={theme['background']}/>
                        </IconeCafe>
                        <p>
                        O café chega fresquinho até você
                        </p>
                    </IconAndText>
                </SectionOfIconsOfBanner>
            </BannerFirstContent>
            <BannerSecondContent>
                <span>
                    <img src={imgBanner}/>
                </span>

            </BannerSecondContent>
        </BannerContainer>
    );
}