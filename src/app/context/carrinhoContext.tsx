"use client";
import { createContext, useContext, useState, useEffect } from "react";
import CartItem from "../utils/ItemCarrinho";
import toasts from "../utils/toastify";
import { toast } from "react-toastify";
import Toasts from "../utils/toastify";

type CarrinhoContextType = {
  itensCarrinho: any[];
  adicionarItem: (item: any) => void;
  removerItem: (id: string) => void;
  limparCarrinho: () => void;
  removerQuantidadeItem: (id: string) => void;
  adicionarQuantidadeItem: (id: string) => void;
  finalizarCompra : () => void;
  quantidadeItens : number;
  valorTotal: string;
  quantidadeTotal: number;
}

  const toastsInstance = new Toasts();

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itensCarrinho, setItensCarrinho] = useState<CartItem[]>([]);


    useEffect(() => {
      const storageCarrinho = localStorage.getItem("carrinho");
      if (storageCarrinho) {
        setItensCarrinho(JSON.parse(storageCarrinho) as CartItem[]);
      }
      
    } , []);

    useEffect(() => {
      localStorage.setItem("carrinho", JSON.stringify(itensCarrinho));
      console.log(itensCarrinho);
    }, [itensCarrinho]);



  const adicionarItem = (item: CartItem) => { 
    setItensCarrinho((prevItems: CartItem[]) => {
      const itemExistente = prevItems.find((i) => i.id === item.id);
      if (itemExistente) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantidade: 1 }];
    });
  };

  const removerItem = (id: string) => {
    setItensCarrinho((prevItems) => prevItems.filter((item) => item.id !== id));
    toastsInstance.itemRemovido();
  }

  const removerQuantidadeItem = (id: string) => {
    setItensCarrinho((prevItems) => {
      const itemRemover = prevItems.find((item) => item.id === id);
      if (itemRemover && itemRemover.quantidade > 1) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        );
      }
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const adicionarQuantidadeItem = (id: string) => {
    setItensCarrinho((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      );
    });
  };

  const limparCarrinho = () => {
    if (itensCarrinho.length >= 1) {
      setItensCarrinho([]);
      toastsInstance.limparCarrinho();
      return
    }
    toastsInstance.limparCarrinhoVazio();
    return
  };

  const finalizarCompra = () => {
    if (itensCarrinho.length >= 1) {
      toastsInstance.compraFinalizadaComSucesso();
      setItensCarrinho([]);
      return
    }

    toastsInstance.compraFinalizadaSemItem();
    return
  };

  const quantidadeItens = itensCarrinho.length;

  const quantidadeTotal = itensCarrinho.reduce((total, item) => total + item.quantidade, 0);

  const valorTotal: string = Number(itensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)).toFixed(2).replace('.', ',');

  return (
    <CarrinhoContext.Provider value={{itensCarrinho, adicionarItem, removerItem, removerQuantidadeItem, adicionarQuantidadeItem, limparCarrinho, finalizarCompra, quantidadeItens, valorTotal, quantidadeTotal}}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider!');
  }
  return context;
};