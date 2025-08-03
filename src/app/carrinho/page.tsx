import BotaoPadrao from "../components/botaoPadrao";
import Image from "next/image";

export default function Carrinho() {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-center gap-y-7 px-48 py-10 lg:space-x-5">
      <div className="flex flex-col lg:w-3/5 p-4 space-y-6 bg-neutral-200 rounded-2xl items-center text-[13px] lg:text-base">
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
            <tr>
              <td>produto1</td>
              <td>R$ 200,00</td>
              <td> 
                <div className="flex flex-row text-center justify-center items-center gap-2"> 
                  <Image src="square-minus.svg" alt="menos" width={20} height={20}/> 
                    3 
                  <Image src="square-plus.svg" alt="menos" width={20} height={20}/>
                </div> 
              </td>
              <td className="flex items-center justify-center"> <Image src="trash.svg"  alt="" width={20} height={20} /></td>
            </tr>
          </tbody>
        </table>

        <BotaoPadrao colorButton="bg-red-800" fontColor="white" text="Limpar carrinho"/>
      </div>
      
      <div className="flex flex-col lg:w-1/5  px-7 py-4 space-y-2 bg-neutral-200 items-center text-center rounded-2xl w-72">
        <h2 className="text-2xl lg:text-3xl">Resumo</h2>
        <h3 className="text-xl lg:text-2xl">Total: R$400,00</h3>
        <h4 className="text">Qtd. Itens: 2</h4>

        <BotaoPadrao colorButton="bg-green-800" fontColor="white" text="Confirmar compra" />
      </div>
    </div>
  );
}