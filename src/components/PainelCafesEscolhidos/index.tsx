import CafeEscolhidoItem from "./CafeEscolhido";
import { PainelCafesEscolhidosFooter, PainelCafesEscolhidosFooterSpan, PainelCafesEscolhidosFooterSpanTotal, PainelCafesEscolhidosHeaderTitulo, PainelCafesEscolhidosItem, PainelCafesEscolhidosMainContainer, PainelCafesEscolhidosMainSection } from "./styles";
import urlCafeTradicional from '../../assets/imgs-cafes/expresso.png';
import { BotaoConfirmarPedidoCheckout } from "../PainelEndereco/styles";

export default function PainelCafesEscolhidos(){

    return (
        <PainelCafesEscolhidosMainContainer>
            <PainelCafesEscolhidosHeaderTitulo>Cafés selecionados</PainelCafesEscolhidosHeaderTitulo>
            <PainelCafesEscolhidosMainSection>
                <PainelCafesEscolhidosItem>
                    <CafeEscolhidoItem nome={'Expresso Tradicional'} preco={9.90} imagem={urlCafeTradicional} quantidade={1} />
                    <CafeEscolhidoItem nome={'Expresso Tradicional'} preco={9.90} imagem={urlCafeTradicional} quantidade={1} />
                    <CafeEscolhidoItem nome={'Expresso Tradicional'} preco={9.90} imagem={urlCafeTradicional} quantidade={1} />
                    <CafeEscolhidoItem nome={'Expresso Tradicional'} preco={9.90} imagem={urlCafeTradicional} quantidade={1} />

                </PainelCafesEscolhidosItem>
                <PainelCafesEscolhidosFooter>
                    <PainelCafesEscolhidosFooterSpan>
                        <p>Total Itens</p>
                        <p>R$ 29,70</p>
                    </PainelCafesEscolhidosFooterSpan>
                    <PainelCafesEscolhidosFooterSpan>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </PainelCafesEscolhidosFooterSpan>
                    <PainelCafesEscolhidosFooterSpanTotal>
                        <p>Total</p>
                        <p>R$ 33,20</p>
                    </PainelCafesEscolhidosFooterSpanTotal>
                    <BotaoConfirmarPedidoCheckout>
                        Confirmar Pedido
                    </BotaoConfirmarPedidoCheckout>
                </PainelCafesEscolhidosFooter>


            </PainelCafesEscolhidosMainSection>
            
        </PainelCafesEscolhidosMainContainer>
    )




}