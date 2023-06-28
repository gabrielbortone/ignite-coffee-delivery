import PainelCafesEscolhidos from "../components/PainelCafesEscolhidos";
import PainelEndereco from "../components/PainelEndereco";
import PainelPagamento from "../components/PainelPagamento";
import { CheckoutContainer } from "./styles/checkoutTheme";

export default function Checkout(){
    return (
        <CheckoutContainer>
            <section>
                <PainelEndereco />
                <PainelPagamento />
            </section>
            <PainelCafesEscolhidos />
        </CheckoutContainer>
    )
}