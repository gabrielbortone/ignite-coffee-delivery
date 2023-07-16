import { useTheme } from "styled-components";
import { PainelEnderecoContainer, PainelEnderecoHeader, PainelEnderecoHeaderInputContainer, PainelEnderecoHeaderTextosContainer, PainelEnderecoTituloHeader } from "./styles";
import { MapPinLine } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { VendasContext } from "../../contexts/VendasContext";

export default function PainelEndereco(){
    const {atribuirEndereco} = useContext(VendasContext);

    const theme = useTheme();
    const [cep,setCep] = useState<string>('');
    const [rua, setRua] = useState<string>('');
    const [numero, setNumero] = useState<string>('');
    const [complemento, setComplemento] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [uf, setUf] = useState<string>('');

    useEffect(()=> {
        atribuirEndereco({
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        uf   
        });
    }, [cep, rua, numero, complemento, bairro, cidade, uf])

    if(theme){
        return (
            <>
                <PainelEnderecoTituloHeader>Complete seu pedido</PainelEnderecoTituloHeader> 
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
                        <input placeholder="CEP" onChange={(value)=> setCep(value.target.value)} value={cep}></input>
                    </span>
                    <span>
                        <input placeholder="Rua" onChange={(value)=> setRua(value.target.value)} value={rua}></input>
                    </span>
                    <span>
                        <input placeholder="Número" onChange={(value)=> setNumero(value.target.value)} value={numero}></input>
                        <input placeholder="Complemento" onChange={(value)=> setComplemento(value.target.value)} value={complemento}></input>
                    </span>
                    <span>
                        <input placeholder="Bairro" onChange={(value)=> setBairro(value.target.value)} value={bairro}></input>
                        <input placeholder="Cidade" onChange={(value)=> setCidade(value.target.value)} value={cidade}></input>
                        <input placeholder="UF" onChange={(value)=> setUf(value.target.value)} value={uf}></input>
                    </span>

                </PainelEnderecoHeaderInputContainer>
            </PainelEnderecoContainer>
            </>
            
        );
    }
    return <h1>ERROR!!!</h1>
} 