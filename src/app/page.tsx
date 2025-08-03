import Image from "next/image";
import Link from "next/link";
import CardProduto from "./components/cardProduto";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-white text-center text-3xl">SEJA BEM VINDO A NOSSA LOJA!</h1>
      
        <input type="text" className="w-3/5 bg-neutral-200 rounded-2xl h-8 p-3 outline-none" placeholder="digite o nome de um produto..."/>
        
      <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </section>
    </main>
  );
}
