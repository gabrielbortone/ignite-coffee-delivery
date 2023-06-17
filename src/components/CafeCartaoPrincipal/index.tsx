import { CafeCartaoPrincipalDescricao, CafeCartaoPrincipalImagemContainer, CafeCartaoPrincipalSpan,
     CafeCartaoPrincipalTipoCafeSpan, CafeCartaoPrincipalTitulo } from "./styles";

interface CafeCartaoPrincipalProps {
    titulo: string
    descricao: string
    imagem: string
    tipoCafe: string[]
}

export default function CafeCartaoPrincipal({titulo, descricao, imagem, tipoCafe}: CafeCartaoPrincipalProps){
    return (
        <CafeCartaoPrincipalSpan>
            <CafeCartaoPrincipalImagemContainer>
                <img src={imagem}/>
            </CafeCartaoPrincipalImagemContainer>
            {tipoCafe.map((tipo)=> 
                <CafeCartaoPrincipalTipoCafeSpan key={tipo}>
                    {tipo.toUpperCase()}
                </CafeCartaoPrincipalTipoCafeSpan>
            )}
            <CafeCartaoPrincipalTitulo>{titulo}</CafeCartaoPrincipalTitulo>
            <CafeCartaoPrincipalDescricao>{descricao}</CafeCartaoPrincipalDescricao>
            
        </CafeCartaoPrincipalSpan>
    )
}