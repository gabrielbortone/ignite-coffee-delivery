import CafeCartaoPrincipal from "../CafeCartaoPrincipal";
import { ContainerCafes, SessaoCafes, TituloCafes } from "./styles";
import urlCafeTradicional from '../../assets/imgs-cafes/expresso.png';
import urlCafeExpressoAmericano from '../../assets/imgs-cafes/americano.png';
import urlCafeExpressoCremoso from '../../assets/imgs-cafes/expresso-cremoso.png';
import urlCafeExpressoGelado from '../../assets/imgs-cafes/cafe-gelado.png';
import urlCafeComLeite from '../../assets/imgs-cafes/cafe-com-leite.png';
import urlCafelatte from '../../assets/imgs-cafes/latte.png';
import urlCafeCapuccino from '../../assets/imgs-cafes/capuccino.png';
import urlCafemacchiato from '../../assets/imgs-cafes/macchiato.png';
import urlCafeMocaccino from '../../assets/imgs-cafes/mochaccino.png';
import urlchocolatequente from '../../assets/imgs-cafes/chocolate-quente.png';
import urlCafecubano from '../../assets/imgs-cafes/cubano.png';
import urlCafearabe from '../../assets/imgs-cafes/arabe.png';
import urlCafeIrlandes from '../../assets/imgs-cafes/irlandes.png';


export default function MainContent(){
    return (
        <SessaoCafes>
            <TituloCafes>Nossos cafés</TituloCafes>
            <ContainerCafes>
                <CafeCartaoPrincipal imagem={urlCafeTradicional} titulo='Expresso Tradicional'
                    descricao="O tradicional café feito com água quente e grãos moídos" preco={9.9} tipoCafe={['TRADICIONAL']}  />

                <CafeCartaoPrincipal imagem={urlCafeExpressoAmericano} titulo='Expresso Americano'
                    descricao="Expresso diluído, menos intenso que o tradicional" preco={9.9} tipoCafe={['TRADICIONAL']}  />

                <CafeCartaoPrincipal imagem={urlCafeExpressoCremoso} titulo='Expresso Cremoso'
                    descricao="Café expresso tradicional com espuma cremosa" preco={9.9} tipoCafe={['TRADICIONAL']}  />

                <CafeCartaoPrincipal imagem={urlCafeExpressoGelado} titulo='Expresso Gelado'
                    descricao="Bebida preparada com café expresso e cubos de gelo" preco={9.9} tipoCafe={['TRADICIONAL', 'GELADO']}  />

                <CafeCartaoPrincipal imagem={urlCafeComLeite} titulo='Café com Leite'
                    descricao="Meio a meio de expresso tradicional com leite vaporizado" preco={9.9} tipoCafe={['TRADICIONAL', 'COM LEITE']}  />

                <CafeCartaoPrincipal imagem={urlCafelatte} titulo='Latte'
                    descricao="Uma dose de café expresso com o dobro de leite e espuma cremosa" preco={9.9} tipoCafe={['TRADICIONAL', 'COM LEITE']}  />

                <CafeCartaoPrincipal imagem={urlCafeCapuccino} titulo='Capuccino'
                    descricao="Bebida com canela feita de doses iguais de café, leite e espuma" preco={9.9} tipoCafe={['TRADICIONAL', 'COM LEITE']}  />

                <CafeCartaoPrincipal imagem={urlCafemacchiato} titulo='Macchiato'
                    descricao="O tradicional café feito com água quente e grãos moídos" preco={9.9} tipoCafe={['TRADICIONAL', 'COM LEITE']}  />

                <CafeCartaoPrincipal imagem={urlCafeMocaccino} titulo='Mocaccino'
                    descricao="Café expresso com calda de chocolate, pouco leite e espuma" preco={9.9} tipoCafe={['TRADICIONAL', 'COM LEITE']}  />

                <CafeCartaoPrincipal imagem={urlchocolatequente} titulo='Chocolate Quente'
                    descricao="Bebida feita com chocolate dissolvido no leite quente e café" preco={9.9} tipoCafe={['ESPECIAL', 'COM LEITE']}  />

                <CafeCartaoPrincipal imagem={urlCafecubano} titulo='Cubano'
                    descricao="Drink gelado de café expresso com rum, creme de leite e hortelã" preco={9.9} tipoCafe={['ESPECIAL', 'ALCOÓLICO', 'GELADO']}  />

                <CafeCartaoPrincipal imagem={urlCafearabe} titulo='Árabe'
                    descricao="Bebida preparada com grãos de café árabe e especiarias" preco={9.9} tipoCafe={['ESPECIAL']}  />

                <CafeCartaoPrincipal imagem={urlCafeIrlandes} titulo='Irlandês'
                    descricao="Bebida a base de café, uísque irlandês, açúcar e chantilly" preco={9.9} tipoCafe={['ALCOÒLICO']}  />
            </ContainerCafes>
        </SessaoCafes>
    )
}