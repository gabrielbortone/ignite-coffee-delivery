import { ReactNode, createContext, useCallback, useEffect, useState } from "react"

export interface CafeCarrinho {
    titulo: string
    descricao: string
    imagem: string
    tipoCafe: string[]
    preco: number
}

interface CarrinhoItem {
    produto: CafeCarrinho
    quantidade: number
}

export interface EnderecoEntrega {
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
}

interface Pedido {
    pedidoItens: CarrinhoItem[]
    endereco: EnderecoEntrega
    formaPagamento: string
}


interface VendasContextType {
    adicionarNoCarrinho: (cafe: CafeCarrinho, quantidade: number) => void;
    removerDoCarrinho: (cafe: CafeCarrinho) => void;
    finalizarPedido: (endereco: EnderecoEntrega) => void;
    obterPedidoAtual: () => Pedido | undefined;
    quantidadeItens: number;
    enderecoEntrega: EnderecoEntrega | undefined;
    atribuirEndereco: (endereco: EnderecoEntrega)=> void;
    formaPagamento: 'CARTÂO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO';
    setFormaPagamento: React.Dispatch<React.SetStateAction<"CARTÂO DE CRÉDITO" | "CARTÃO DE DÉBITO" | "DINHEIRO">>;
    totalFinal: number;
    totalItens: number;
    taxaEntrega: number;
    carrinho: CarrinhoItem[];
}

interface VendasProviderProps {
    children: ReactNode;
}

export const VendasContext = createContext<VendasContextType>({} as VendasContextType);

export function VendasContextProvider({children}: VendasProviderProps){

    const [carrinho , setCarrinho] = useState<CarrinhoItem[]>([]);
    const [pedido, setPedido] = useState<Pedido>();
    const [quantidadeItens, setQuantidadeItens] = useState<number>(0);
    const [enderecoEntrega, setEnderecoEntrega] = useState<EnderecoEntrega>();
    const [formaPagamento, setFormaPagamento] = useState<'CARTÂO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'>('CARTÂO DE CRÉDITO');
    const taxaEntrega = 3.5;
    const [totalItens, setTotalItens] = useState<number>(0);
    const [totalFinal , setTotalFinal] = useState<number>(taxaEntrega + totalItens);

    useEffect(()=> {
        setTotalItens(carrinho.reduce((acc, item) => acc + (item.produto.preco * item.quantidade), 0) ?? 0);
    },[carrinho])

    useEffect(()=> {
        setTotalFinal(totalItens +taxaEntrega);
    }, [totalItens])



    function adicionarNoCarrinho(cafe: CafeCarrinho, quantidade: number){
        const novoItem: CarrinhoItem = { 
            produto: cafe,
            quantidade
        }

        const elementoJaExistente = carrinho.filter((item)=> item?.produto?.titulo == cafe.titulo);
        if(elementoJaExistente){
            removerDoCarrinho(cafe);

            novoItem.quantidade += elementoJaExistente[0]?.quantidade ?? 0;
        }

        setCarrinho((state) => [...state, novoItem]);
        setQuantidadeItens(carrinho.length+1);
    }

    function removerDoCarrinho(cafe: CafeCarrinho){
        const novaLista=  carrinho.filter((item)=> {
            return item.produto.titulo !== cafe.titulo
        })
        setCarrinho(novaLista)
        setQuantidadeItens(carrinho.length+1);
    }

    function obterPedidoAtual(){
        return pedido;
    }

    function finalizarPedido(endereco: EnderecoEntrega) {
        setPedido({
            endereco,
            pedidoItens: carrinho,
            formaPagamento
        });
    }

    function atribuirEndereco(endereco: EnderecoEntrega){
        setEnderecoEntrega(endereco);
    }

    return (
        <VendasContext.Provider value={{adicionarNoCarrinho, removerDoCarrinho, obterPedidoAtual, finalizarPedido, 
            quantidadeItens, enderecoEntrega,
         atribuirEndereco, formaPagamento, setFormaPagamento, totalFinal, totalItens, taxaEntrega, carrinho}}>
            {children}
        </VendasContext.Provider>
    )
}

