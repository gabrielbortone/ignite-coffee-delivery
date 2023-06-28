import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PainelPagamentoContainer, PainelPagamentoConteudoContainer, PainelPagamentoConteudoItem, PainelPagamentoHeader, PainelPagamentoHeaderTextos } from "./styles";
import { useTheme } from "styled-components";

export default function PainelPagamento(){
    const theme = useTheme();
    
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
                    <PainelPagamentoConteudoItem>
                        <CreditCard size={24} color={theme['purple']}/>
                        <p>CARTÃO DE CRÉDITO</p>
                    </PainelPagamentoConteudoItem>
                    <PainelPagamentoConteudoItem>
                        <Bank size={24} color={theme['purple']}/>
                        <p>CARTÃO DE DÉBITO</p>
                    </PainelPagamentoConteudoItem>
                    <PainelPagamentoConteudoItem>
                        <Money size={24} color={theme['purple']}/>
                        <p>DINHEIRO</p>
                    </PainelPagamentoConteudoItem>
                </PainelPagamentoConteudoContainer>
            </PainelPagamentoContainer>
        )
    }
    return <h1>Error</h1>
    
}