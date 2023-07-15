import { useContext, useState } from "react";
import { CafeCartaoPrincipalDescricao, CafeCartaoPrincipalImagemContainer, CafeCartaoPrincipalSpan,
     CafeCartaoPrincipalSpanConntainerItens,
     CafeCartaoPrincipalTipoCafeContainer,
     CafeCartaoPrincipalTipoCafeSpan, CafeCartaoPrincipalTitulo, CafePrincipalContainerFooter, CafePrincipalFooterBotaoComprar, CafePrincipalPrecoContainer, CafePrincipalQuantidadeContainer, CafePrincipalQuantidadeSpan, CafePrincipalQuantidadeSpanNumero } from "./styles";
import { Plus, Minus, ShoppingCartSimple } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { CafeCarrinho, VendasContext } from "../../contexts/VendasContext";

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
    const {adicionarNoCarrinho} = useContext(VendasContext)

    function handleComprarClick(){
        const itemCarrinho: CafeCarrinho = {
            titulo, 
            descricao, 
            imagem,
            tipoCafe, 
            preco
        }
        
        adicionarNoCarrinho(itemCarrinho, quantidade);
    }

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
                        <CafePrincipalQuantidadeSpan onClick={()=>{
                            const newQuantidade = quantidade - 1;
                            if(newQuantidade > 0){
                                setQuantidade(newQuantidade)
                            }
                            else{
                                setQuantidade(0);
                            }
                        }}>
                            <Minus size={16} color={theme['purple']}/>
                        </CafePrincipalQuantidadeSpan>
                        <CafePrincipalQuantidadeSpanNumero>{quantidade}</CafePrincipalQuantidadeSpanNumero>
                        <CafePrincipalQuantidadeSpan onClick={()=>{
                            if(quantidade + 1 > 10){
                                setQuantidade(10);
                            }
                            else{
                                setQuantidade((state)=> state + 1);
                            }
                        }}>
                            <Plus size={16} color={theme['purple']}/>
                        </CafePrincipalQuantidadeSpan>
                    </CafePrincipalQuantidadeContainer>
                    <CafePrincipalFooterBotaoComprar onClick={handleComprarClick}>
                        <ShoppingCartSimple size={24} color={theme['white']}/>
                    </CafePrincipalFooterBotaoComprar>
                </CafePrincipalContainerFooter>
            </CafeCartaoPrincipalSpanConntainerItens>
        </CafeCartaoPrincipalSpan>
    )
}