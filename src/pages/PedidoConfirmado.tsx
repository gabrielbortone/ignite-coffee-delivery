import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import ilustracao from '../assets/Illustration.png';
import { PedidoConfirmadoContainer, PedidoConfirmadoFundo, PedidoConfirmadoInfoContainer, PedidoConfirmadoInfoDinheiro, PedidoConfirmadoInfoMapa, PedidoConfirmadoInfoParagrafo, PedidoConfirmadoInfoTempo, PedidoConfirmadoParagrafo, PedidoConfirmadoSection, PedidoConfirmadoTitulo } from './styles/pedidoconfirmadostyles';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { VendasContext } from '../contexts/VendasContext';

export default function PedidoConfirmado(){
    const {enderecoEntrega, formaPagamento} = useContext(VendasContext);
    const theme = useTheme();
    if(!theme){
        return <h1>ERROR</h1>
    }
    return (
        <PedidoConfirmadoSection>
            <div>
                <PedidoConfirmadoTitulo>Uhu! Pedido confirmado</PedidoConfirmadoTitulo>
                <PedidoConfirmadoParagrafo>Agora é só aguardar que logo o café chegará até você</PedidoConfirmadoParagrafo>
                <PedidoConfirmadoContainer>
                    <PedidoConfirmadoFundo>
                        <PedidoConfirmadoInfoContainer>
                            <PedidoConfirmadoInfoMapa>
                                <MapPin size={24} color={theme['white']} />
                            </PedidoConfirmadoInfoMapa>
                            <span>
                                <PedidoConfirmadoInfoParagrafo>Entrega em {`${enderecoEntrega?.rua} ${enderecoEntrega?.complemento}, ${enderecoEntrega?.numero}`}</PedidoConfirmadoInfoParagrafo>
                                <PedidoConfirmadoInfoParagrafo>{`${enderecoEntrega?.bairro} - ${enderecoEntrega?.cidade}, ${enderecoEntrega?.uf} - ${enderecoEntrega?.cep}`}</PedidoConfirmadoInfoParagrafo>
                            </span>
                        </PedidoConfirmadoInfoContainer>
                        <PedidoConfirmadoInfoContainer>
                            <PedidoConfirmadoInfoTempo>
                                <Timer size={24} color={theme['white']} />
                            </PedidoConfirmadoInfoTempo>
                            <span>
                                <PedidoConfirmadoInfoParagrafo>Previsão de entrega</PedidoConfirmadoInfoParagrafo>
                                <PedidoConfirmadoInfoParagrafo><strong>20 min - 30 min</strong></PedidoConfirmadoInfoParagrafo>   
                            </span>
                        </PedidoConfirmadoInfoContainer>
                        <PedidoConfirmadoInfoContainer>
                            <PedidoConfirmadoInfoDinheiro>
                                <CurrencyDollar size={24} color={theme['white']}/>
                            </PedidoConfirmadoInfoDinheiro>
                            <span>
                                <PedidoConfirmadoInfoParagrafo>Pagamento na entrega</PedidoConfirmadoInfoParagrafo>
                                <PedidoConfirmadoInfoParagrafo><strong>{formaPagamento}</strong></PedidoConfirmadoInfoParagrafo>  
                            </span>
                        </PedidoConfirmadoInfoContainer>
                    </PedidoConfirmadoFundo>
                </PedidoConfirmadoContainer>
            </div>
            <div>
                <img src={ilustracao}/>
            </div>
        </PedidoConfirmadoSection>
    )
}