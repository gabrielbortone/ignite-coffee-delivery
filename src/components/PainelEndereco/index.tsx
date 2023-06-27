import { useTheme } from "styled-components";
import { PainelEnderecoContainer, PainelEnderecoHeader, PainelEnderecoHeaderInputContainer, PainelEnderecoHeaderTextosContainer } from "./styles";
import { MapPinLine } from "@phosphor-icons/react";

export default function PainelEndereco(){
    const theme = useTheme();
    if(theme){
        return (
            <PainelEnderecoContainer>
                <PainelEnderecoHeader>
                        <MapPinLine size={30} color={theme['yellow-dark']} />
                        <PainelEnderecoHeaderTextosContainer>
                            <h4>Endereço de Entrega</h4>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </PainelEnderecoHeaderTextosContainer>
                </PainelEnderecoHeader>
                <PainelEnderecoHeaderInputContainer>
                    <span>
                        <input placeholder="CEP"></input>
                    </span>
                    <span>
                        <input placeholder="Rua"></input>
                    </span>
                    <span>
                        <input placeholder="Número"></input>
                        <input placeholder="Complemento"></input>
                    </span>
                    <span>
                        <input placeholder="Bairro"></input>
                        <input placeholder="Cidade"></input>
                        <input placeholder="UF"></input>
                    </span>

                </PainelEnderecoHeaderInputContainer>
            </PainelEnderecoContainer>
        );
    }
    return <h1>ERROR!!!</h1>
} 