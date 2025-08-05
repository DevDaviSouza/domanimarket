"use client";
import { useCart } from "@/app/context/carrinhoContext";
import Image from "next/image"
import Link from "next/link"

// Componente de cabeçalho que exibe o logo e o carrinho
// Inclui um badge que mostra a quantidade de itens no carrinho
export default function Header() {
  const { quantidadeItens } = useCart();

  return(
    <header className="flex flex-row items-center justify-between p-6 bg-gray-800 text-white ">
      <Link href="/"><Image src="/logo.png" alt="logo" width={150} height={150} /> </Link>
      
      <Link href="carrinho" className="flex items-center justify-center rounded-full bg-orange-700 w-12 h-12 ">
        <Image src="/carrinho.svg" alt="carrinho" width={30} height={30}  /> 
        {/* Badge com a quantidade */}
      {quantidadeItens > 0 && (
        <span
          className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
        >
          {quantidadeItens}
        </span>
      )}
      </Link>
    </header>
  )
}