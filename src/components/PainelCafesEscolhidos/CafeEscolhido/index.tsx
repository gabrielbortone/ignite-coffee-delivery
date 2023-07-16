import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { CafeEscolhidoBotaoRemover, CafeEscolhidoItemContainer, CafeEscolhidoItemImagemContainer, CafeEscolhidoItemMiddleBottoesContainer, CafeEscolhidoItemMiddleContainer, CafeEscolhidoItemQuantidadeContainer, CafeEscolhidoItemQuantidadeSpan, CafeEscolhidoItemQuantidadeSpanNumero, CafeEscolhidoItemSpanPreco } from "./styles";
import { useContext } from "react";
import { VendasContext } from "../../../contexts/VendasContext";

interface CafeEscolhidoItemProps{
    quantidade: number
    nome: string
    preco: number
    imagem: string
}

export default function CafeEscolhidoItem({quantidade, nome, preco, imagem} : CafeEscolhidoItemProps){
    const theme = useTheme();
    const { removerDoCarrinho } = useContext(VendasContext);
    const precoFormatado: string = (preco).toLocaleString('pt-br', {
        style: 'decimal', 
        minimumIntegerDigits: 1, 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    
    
    if(!theme){
        return <h1>ERROR</h1>
    }
    return (
        <CafeEscolhidoItemContainer>
            <CafeEscolhidoItemImagemContainer>
                <img src={imagem} />
            </CafeEscolhidoItemImagemContainer>

            <CafeEscolhidoItemMiddleContainer>
                <h3>{nome}</h3>
                <CafeEscolhidoItemMiddleBottoesContainer>
                    <CafeEscolhidoItemQuantidadeContainer>
                        <CafeEscolhidoItemQuantidadeSpan>
                            <Minus size={16} color={theme['purple']}/>
                        </CafeEscolhidoItemQuantidadeSpan>
                        <CafeEscolhidoItemQuantidadeSpanNumero>{quantidade}</CafeEscolhidoItemQuantidadeSpanNumero>
                        <CafeEscolhidoItemQuantidadeSpan>
                            <Plus size={16} color={theme['purple']}/>
                        </CafeEscolhidoItemQuantidadeSpan>
                    </CafeEscolhidoItemQuantidadeContainer>
                    <CafeEscolhidoBotaoRemover onClick={(e)=> {
                        removerDoCarrinho({
                            titulo: nome,
                            preco,
                            imagem,
                            tipoCafe: [''],
                            descricao: ''
                        })
                    }}>
                        <Trash size={16} color={theme['purple']} />
                        <p>REMOVER</p>
                    </CafeEscolhidoBotaoRemover>
                </CafeEscolhidoItemMiddleBottoesContainer>       
            </CafeEscolhidoItemMiddleContainer>

            <CafeEscolhidoItemSpanPreco>
                R${' '+precoFormatado}
            </CafeEscolhidoItemSpanPreco>

        </CafeEscolhidoItemContainer>
    );
}