import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PainelPagamentoContainer, PainelPagamentoConteudoContainer, PainelPagamentoConteudoItem, PainelPagamentoHeader, PainelPagamentoHeaderTextos } from "./styles";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { VendasContext } from "../../contexts/VendasContext";

export default function PainelPagamento(){
    const theme = useTheme();
    const { formaPagamento, setFormaPagamento} = useContext(VendasContext);

    if(theme){
        return(
            <PainelPagamentoContainer>
                <PainelPagamentoHeader>
                    <CurrencyDollar size={28} color={theme['purple']}/>
                    <PainelPagamentoHeaderTextos>
                        <h4>Pagamento</h4>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </PainelPagamentoHeaderTextos>
                </PainelPagamentoHeader>
                <PainelPagamentoConteudoContainer>
                    <PainelPagamentoConteudoItem onClick={()=> {setFormaPagamento('CARTÂO DE CRÉDITO')}} className={formaPagamento === 'CARTÂO DE CRÉDITO' ? 'active' : ''}>
                        <CreditCard size={24} color={theme['purple']}/>
                        <p>CARTÃO DE CRÉDITO</p>
                    </PainelPagamentoConteudoItem>
                    <PainelPagamentoConteudoItem onClick={()=> {setFormaPagamento('CARTÃO DE DÉBITO')}} className={formaPagamento === 'CARTÃO DE DÉBITO' ? 'active' : ''}>
                        <Bank size={24} color={theme['purple']}/>
                        <p>CARTÃO DE DÉBITO</p>
                    </PainelPagamentoConteudoItem>
                    <PainelPagamentoConteudoItem onClick={()=> {setFormaPagamento('DINHEIRO')}} className={formaPagamento === 'DINHEIRO' ? 'active' : ''}>
                        <Money size={24} color={theme['purple']}/>
                        <p>DINHEIRO</p>
                    </PainelPagamentoConteudoItem>
                </PainelPagamentoConteudoContainer>
            </PainelPagamentoContainer>
        )
    }
    return <h1>Error</h1>
    
}