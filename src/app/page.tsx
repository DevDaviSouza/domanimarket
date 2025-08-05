
import { useEffect, useState } from "react";
import CardProduto from "./components/cardProduto";
import {Api, ProdutoProps} from "./services/api";
import useDebounce from "./hooks/useDebounce";
import ProdutosList from "./components/produtosList";

// Componente principal da aplicação
export default async function Home() {
  // salvar os produtos da API em um array
  const data: ProdutoProps[] = await Api();
 
  return (
    <main className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-white text-center text-3xl">SEJA BEM VINDO A NOSSA LOJA!</h1>
      
      <ProdutosList data={data} />
    </main>
    
  );
}
