"use client";

import BotaoPadrao from "../components/botaoPadrao";
import Image from "next/image";
import { useCart } from "../context/carrinhoContext";
import alteraNome from "../utils/alteraNome";
import { ToastContainer, toast } from "react-toastify";

export default function Carrinho() {
  const { itensCarrinho, removerItem, removerQuantidadeItem, adicionarQuantidadeItem, limparCarrinho, finalizarCompra, valorTotal, quantidadeTotal } = useCart();
  
  return (
    <div className="flex flex-col items-center lg:flex-row justify-center gap-y-7  py-10 lg:space-x-5">
      <div className="flex flex-col lg:w-3/5 p-4 space-y-6 bg-neutral-200 rounded-2xl items-center lg:items-start text-[13px] lg:text-base shadow-[7px_7px_10px_rgba(0,0,0,0.7)]">
        <table  className="lg:w-full text-center items-center justify-center gap-5 w-72">
          <thead className="border-b-2 border-neutral-400">
            <tr>
              <th>Produto</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th>Excluir produto</th>
            </tr>
          </thead>
          <tbody className="border-b-2 border-neutral-400 text-center">
            {
              
                itensCarrinho.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nome.length > 20 ? alteraNome(item.nome) : item.nome}</td>
                    <td>R$ {item.preco}</td>
                    <td> 
                      <div className="flex flex-row text-center justify-center items-center gap-2"> 
                        <Image onClick={() => removerQuantidadeItem(item.id)} src="square-minus.svg" alt="menos" width={20} height={20}/> 
                          {item.quantidade} 
                        <Image onClick={() => adicionarQuantidadeItem(item.id)} src="square-plus.svg" alt="mais" width={20} height={20}/>
                      </div> 
                    </td>
                    <td className="flex items-center justify-center"> <Image src="trash.svg"  alt="excluir" width={20} height={20} onClick={() => removerItem(item.id)} /></td>
                  </tr>
                ))
              
            }
          </tbody>
        </table>

        <div onClick={limparCarrinho}> <BotaoPadrao colorButton="bg-red-800" fontColor="white" text="Limpar carrinho"/> </div>
      </div>
      
      <div className="flex flex-col lg:w-1/5  px-7 py-4 space-y-2 bg-neutral-200 items-center text-center rounded-2xl w-72 shadow-[7px_7px_10px_rgba(0,0,0,0.7)]">
        <h2 className="text-2xl lg:text-3xl">Resumo</h2>
        <h3 className="text-xl lg:text-2xl">Total: R${valorTotal}</h3>
        {<h4 className="text">Qtd. Itens: {quantidadeTotal}</h4>}

        <div onClick={finalizarCompra} > <BotaoPadrao colorButton="bg-green-800" fontColor="white" text="Confirmar compra" /> </div>
      </div>
    <ToastContainer />
    </div>
  );
}