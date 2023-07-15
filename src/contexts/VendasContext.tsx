import { ReactNode, createContext, useState } from "react"

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
}


interface VendasContextType {
    adicionarNoCarrinho: (cafe: CafeCarrinho, quantidade: number) => void;
    removerDoCarrinho: (cafe: CafeCarrinho) => void;
    obterCarrinho: () => CarrinhoItem[];
    finalizarPedido: (endereco: EnderecoEntrega) => void;
    obterPedidoAtual: () => Pedido | undefined;
    quantidadeItens: number;
}

interface VendasProviderProps {
    children: ReactNode;
}

export const VendasContext = createContext<VendasContextType>({} as VendasContextType);

export function VendasContextProvider({children}: VendasProviderProps){

    const [carrinho , setCarrinho] = useState<CarrinhoItem[]>([]);
    const [pedido, setPedido] = useState<Pedido>();
    const [quantidadeItens, setQuantidadeItens] = useState<number>(0);

    function adicionarNoCarrinho(cafe: CafeCarrinho, quantidade: number){
        const novoItem: CarrinhoItem = { 
            produto: cafe,
            quantidade
        }
        setCarrinho((state) => [...state, novoItem]);
        setQuantidadeItens(carrinho.length+1);
    }

    function removerDoCarrinho(cafe: CafeCarrinho){
        setQuantidadeItens(carrinho.length+1);

        return carrinho.filter((item)=> {
            return item.produto != cafe
        })
    }

    function obterCarrinho(){
        return carrinho;
    }

    function obterPedidoAtual(){
        return pedido;
    }

    function finalizarPedido(endereco: EnderecoEntrega) {
        setPedido({
            endereco,
            pedidoItens: carrinho
        });
    }

    return (
        <VendasContext.Provider value={{adicionarNoCarrinho, obterCarrinho,
         removerDoCarrinho, obterPedidoAtual, finalizarPedido, quantidadeItens}}>
            {children}
        </VendasContext.Provider>
    )
}

