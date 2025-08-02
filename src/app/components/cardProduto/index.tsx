import Image from "next/image";
import BotaoPadrao from "../botaoPadrao";

export default function CardProduto () {
  return(
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-3xl shadow-[7px_7px_10px_rgba(0,0,0,0.7)] gap-1" >
      <Image src="/produtoTeste.jpg" alt="Produto" width={100} height={100} />
      <h2 className=" text-2xl font-medium">Produto</h2>
      <span className="flex flex-row gap-1 text-xl">R$: <h3>200,00</h3></span>
      <BotaoPadrao colorButton="orange-700" text="Adicionar ao carrinho" />
    </div>
  )
}