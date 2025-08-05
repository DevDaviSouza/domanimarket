"use client";
import { createContext, useContext, useState, useEffect, Children } from "react";
import CartItem from "../utils/cartItem";

type CartContextType = {
  cartItems: any[];
  adicionarItem: (item: any) => void;
  removerItem: (id: string) => void;
  limparCarrinho: () => void;
  removerQuantidadeItem: (id: string) => void;
  adicionarQuantidadeItem: (id: string) => void;
  valorTotal: string;
  quantidadeTotal: number;
  
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log("Itens no carrinho:", cartItems);
  }, [cartItems])

  const adicionarItem = (item: CartItem) => { 
    setCartItems((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }

      return [...prevItems, { ...item, quantidade: 1 }];
    });
  };

  const removerItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const removerQuantidadeItem = (id: string) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id);
      if (itemToRemove && itemToRemove.quantidade > 1) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        );
      }
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const adicionarQuantidadeItem = (id: string) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      );
    });
  };

  const limparCarrinho = () => {
    setCartItems([]);
  };

  const quantidadeTotal = cartItems.reduce((total, item) => total + item.quantidade, 0);

  const valorTotal: string = Number(cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0)).toFixed(2).replace('.', ',');

  return (
    <CartContext.Provider value={{cartItems, adicionarItem, removerItem, removerQuantidadeItem, adicionarQuantidadeItem, limparCarrinho, valorTotal, quantidadeTotal}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider!');
  }
  return context;
};