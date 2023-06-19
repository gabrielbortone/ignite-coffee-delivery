import CafeCartaoPrincipal from "../CafeCartaoPrincipal";
import { ContainerCafes, SessaoCafes, TituloCafes } from "./styles";
import urlCafeTradicional from '../../assets/imgs-cafes/chocolate-quente.png';

export default function MainContent(){
    return (
        <SessaoCafes>
            <TituloCafes>Nossos cafés</TituloCafes>
            <ContainerCafes>
                <CafeCartaoPrincipal imagem={urlCafeTradicional} titulo='Expresso Tradicional'
                    descricao="O tradicional café feito com água quente e grãos moídos" preco={9.9} tipoCafe={['TRADICIONAL', 'EXPRESSO']}  />
            </ContainerCafes>
        </SessaoCafes>
    )
}