"use client";

import Image from "next/image";
import BotaoPadrao from "../botaoPadrao";
import { useContext } from "react";
import { useCart } from "@/app/context/carrinhoContext";
import alteraNome from "@/app/utils/alteraNome";

// Define as propriedades do componente CardProduto
type CardProdutoProps = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
};

// Componente CardProduto que recebe as propriedades do produto
export default function CardProduto ({CardProdutoProps}: {CardProdutoProps: CardProdutoProps}) {
  const { adicionarItem } = useCart();

  return(
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-3xl shadow-[7px_7px_10px_rgba(0,0,0,0.7)] gap-1" >
      <Image className="w-20 h-28" src={CardProdutoProps.imagem} alt="Produto" width={80} height={80} />
      {<h2 className=" text-2xl font-medium">{CardProdutoProps.nome.length > 20 ? alteraNome(CardProdutoProps.nome): CardProdutoProps.nome }</h2>}
      <span className="flex flex-row gap-1 text-xl">R$: <h3>{CardProdutoProps.preco}</h3></span>
      <div onClick={() => adicionarItem(CardProdutoProps)}><BotaoPadrao colorButton="bg-orange-700" text="Adicionar ao carrinho" /></div>
    </div>
  )
}