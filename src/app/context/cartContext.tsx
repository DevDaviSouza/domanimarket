"use client";
import { createContext, useContext, useState, useEffect, Children } from "react";

type CartContextType = {
  cartItems: any[];
  adicionarItem: (item: any) => void;
  removerItem: (id: string) => void;
  limparCarrinho: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  interface CartItem {
    id: string;
    quantidade: number;
    preco: number;
    [key: string]: any;
  }
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
  
  }, [cartItems])

  const adicionarItem = (item: CartItem) => { 
    setCartItems((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };


  const removerItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const limparCarrinho = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);

  return (
    <CartContext.Provider value={{cartItems, adicionarItem, removerItem, limparCarrinho, totalItems}}>
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