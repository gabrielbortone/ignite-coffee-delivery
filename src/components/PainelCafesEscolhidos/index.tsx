import CafeEscolhidoItem from "./CafeEscolhido";
import { PainelCafesEscolhidosFooter, PainelCafesEscolhidosFooterSpan, PainelCafesEscolhidosFooterSpanTotal, PainelCafesEscolhidosHeaderTitulo, PainelCafesEscolhidosItem, PainelCafesEscolhidosMainContainer, PainelCafesEscolhidosMainSection } from "./styles";
import { BotaoConfirmarPedidoCheckout } from "../PainelEndereco/styles";
import { useContext } from "react";
import { VendasContext } from "../../contexts/VendasContext";
import { useNavigate } from "react-router-dom";

export default function PainelCafesEscolhidos(){

    const { carrinho, totalItens, totalFinal, taxaEntrega, finalizarPedido, enderecoEntrega } = useContext(VendasContext);
    const navigate = useNavigate(); 

    function handleCheckoutFinish(){
        if(enderecoEntrega){
            finalizarPedido(enderecoEntrega);
            navigate('/pedido-confirmado');
        }
    }

    return (
        <PainelCafesEscolhidosMainContainer>
            <PainelCafesEscolhidosHeaderTitulo>Cafés selecionados</PainelCafesEscolhidosHeaderTitulo>
            <PainelCafesEscolhidosMainSection>
                <PainelCafesEscolhidosItem>

                    {carrinho.map((carrinhoItem)=> {
                        return <CafeEscolhidoItem key={carrinhoItem.produto?.titulo} nome={carrinhoItem.produto?.titulo} 
                        preco={carrinhoItem.produto?.preco} 
                        imagem={carrinhoItem.produto?.imagem} quantidade={carrinhoItem.quantidade} />
                    })}
                </PainelCafesEscolhidosItem>
                <PainelCafesEscolhidosFooter>
                    <PainelCafesEscolhidosFooterSpan>
                        <p>Total Itens</p>
                        <p>{totalItens.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </PainelCafesEscolhidosFooterSpan>
                    <PainelCafesEscolhidosFooterSpan>
                        <p>Entrega</p>
                        <p>{taxaEntrega.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </PainelCafesEscolhidosFooterSpan>
                    <PainelCafesEscolhidosFooterSpanTotal>
                        <p>Total</p>
                        <p>{totalFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </PainelCafesEscolhidosFooterSpanTotal>
                    <BotaoConfirmarPedidoCheckout onClick={handleCheckoutFinish} disabled={totalItens == 0}>
                        Confirmar Pedido
                    </BotaoConfirmarPedidoCheckout>
                </PainelCafesEscolhidosFooter>


            </PainelCafesEscolhidosMainSection>
            
        </PainelCafesEscolhidosMainContainer>
    )




}