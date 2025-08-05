"use client";

import useDebounce from "@/app/hooks/useDebounce";
import { ProdutoProps } from "@/app/services/api";
import { useEffect, useState } from "react";
import CardProduto from "../cardProduto";

// Componente ProdutosList que exibe uma lista de produtos filtrados por busca
// Recebe os dados dos produtos como props
// Utiliza o hook useDebounce para otimizar a busca
// Exibe um input para busca e uma lista de produtos filtrados
// Se não houver produtos filtrados, exibe uma mensagem informando que nenhum produto foi encontrado
export default function ProdutosList(data : {data: ProdutoProps[]}) {
  
  const [produtosOriginais, setProdutosOriginais] = useState<ProdutoProps[]>(data.data);
  const [produtosFiltrados, setProdutosFiltrados] = useState<ProdutoProps[]>(data.data);
  const [busca, setBusca] = useState("");

  const buscaDebounced = useDebounce(busca, 300);

  useEffect(() => {
    if (!buscaDebounced.trim()) {
      setProdutosFiltrados(data.data);
      return;
    }

    const filtrados = data.data.filter((p) => p.title.toLowerCase().includes(buscaDebounced.toLowerCase()));

    setProdutosFiltrados(filtrados);
  }, [buscaDebounced, produtosOriginais])
  
  return (
    <div className=" w-full flex flex-col items-center space-y-6">
      <input type="text"
        className="w-3/5 bg-neutral-200 rounded-2xl h-8 p-3 outline-none" 
        placeholder="digite o nome de um produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        />
        
      <section className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {
          produtosFiltrados.length === 0 && busca.trim() !== "" ? (
            // se não houver produtos filtrados e a busca não estiver vazia
              <h2 className="text-2xl text-white text-center ">Nenhum produto encontrado</h2>
          ) :

          // mapear os produtos e renderizar o componente CardProduto
          // passando as props necessárias
          produtosFiltrados.map(produto => (
            <CardProduto 
              CardProdutoProps={{
                id: produto.id,
                nome: produto.title,
                preco: produto.price,
                imagem: produto.image
              }}
              key={produto.id}
            />
          ))

        }
      </section>
    </div>
  )
}