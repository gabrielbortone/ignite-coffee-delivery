import { useState } from "react";
import { CafeCartaoPrincipalDescricao, CafeCartaoPrincipalImagemContainer, CafeCartaoPrincipalSpan,
     CafeCartaoPrincipalSpanConntainerItens,
     CafeCartaoPrincipalTipoCafeContainer,
     CafeCartaoPrincipalTipoCafeSpan, CafeCartaoPrincipalTitulo, CafePrincipalContainerFooter, CafePrincipalFooterBotaoComprar, CafePrincipalPrecoContainer, CafePrincipalQuantidadeContainer } from "./styles";
import { Plus, Minus, ShoppingCartSimple } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

interface CafeCartaoPrincipalProps {
    titulo: string
    descricao: string
    imagem: string
    tipoCafe: string[]
    preco: number
}

export default function CafeCartaoPrincipal({titulo, descricao, imagem, tipoCafe, preco}: CafeCartaoPrincipalProps){
    const [ quantidade, setQuantidade] = useState(1);
    const theme = useTheme();
    
    if(!theme){
        return <h1>Error!!!</h1>
    }

    return (
        <CafeCartaoPrincipalSpan>
            <CafeCartaoPrincipalSpanConntainerItens>
                <CafeCartaoPrincipalImagemContainer>
                    <img src={imagem}/>
                </CafeCartaoPrincipalImagemContainer>
                <CafeCartaoPrincipalTipoCafeContainer>
                    {tipoCafe.map((tipo)=> 
                        <CafeCartaoPrincipalTipoCafeSpan key={tipo}>
                            {tipo.toUpperCase()}
                        </CafeCartaoPrincipalTipoCafeSpan>
                    )}
                </CafeCartaoPrincipalTipoCafeContainer>

                <CafeCartaoPrincipalTitulo>{titulo}</CafeCartaoPrincipalTitulo>
                <CafeCartaoPrincipalDescricao>{descricao}</CafeCartaoPrincipalDescricao>
                <CafePrincipalContainerFooter>
                    <CafePrincipalPrecoContainer>
                        <h3><span>{'R$'}</span>{preco.toLocaleString('pt-br', {style: 'decimal', minimumIntegerDigits: 1, minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
                    </CafePrincipalPrecoContainer>
                    <CafePrincipalQuantidadeContainer>
                        <Minus size={16} color={theme['purple']}/>
                        {quantidade}
                        <Plus size={16} color={theme['purple']}/>
                    </CafePrincipalQuantidadeContainer>
                    <CafePrincipalFooterBotaoComprar>
                        <ShoppingCartSimple size={24} color={theme['white']}/>
                    </CafePrincipalFooterBotaoComprar>
                </CafePrincipalContainerFooter>
            </CafeCartaoPrincipalSpanConntainerItens>
        </CafeCartaoPrincipalSpan>
    )
}