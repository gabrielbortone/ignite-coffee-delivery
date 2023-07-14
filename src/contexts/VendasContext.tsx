import { ReactNode, createContext, useState } from "react"

interface CafeCarrinho {
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

interface VendasContextType {
    adicionarNoCarrinho: (cafe: CafeCarrinho, quantidade: number) => void;
    removerDoCarrinho: (cafe: CafeCarrinho) => void;
    obterCarrinho: () => CarrinhoItem[];
}

interface VendasProviderProps {
    children: ReactNode;
}

export const VendasContext = createContext<VendasContextType>({} as VendasContextType);

export function VendasContextProvider({children}: VendasProviderProps){

    const [carrinho , setCarrinho] = useState<CarrinhoItem[]>([]);

    function adicionarNoCarrinho(cafe: CafeCarrinho, quantidade: number){
        const novoItem: CarrinhoItem = { 
            produto: cafe,
            quantidade
        }
        setCarrinho((state) => [...state, novoItem]);
    }

    function removerDoCarrinho(cafe: CafeCarrinho){
        return carrinho.filter((item)=> {
            return item.produto != cafe
        })
    }

    function obterCarrinho(){
        return carrinho;
    }


    return (
        <VendasContext.Provider value={{adicionarNoCarrinho, obterCarrinho, removerDoCarrinho}}>
            {children}
        </VendasContext.Provider>
    )
}

