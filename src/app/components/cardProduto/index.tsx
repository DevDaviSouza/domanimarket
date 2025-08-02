import Image from "next/image";
import Link from "next/link";

export default function CardProduto () {
  return(
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-3xl shadow-[7px_7px_10px_rgba(0,0,0,0.7)]" >
      <Image src="/produtoTeste.jpg" alt="Produto" width={100} height={100} />
      <h2 className=" text-xl">Produto</h2>
      <span className="flex flex-row gap-1 text-xl">R$: <h3>200,00</h3></span>
      <button className="p-2 bg-orange-600 rounded-2xl">Adicionar ao carrinho</button>
    </div>
  )
}