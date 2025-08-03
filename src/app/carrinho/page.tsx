import BotaoPadrao from "../components/botaoPadrao";

export default function Carrinho() {
  return (
    <div>
      <div>
        <table>
          
        </table>
      </div>
      
      <div>
        <h2>Resumo</h2>
        <h3>Total: R$400,00</h3>
        <h4>Qtd. Itens: 2</h4>

        <BotaoPadrao  colorButton="green-800" fontColor="white" text="Confirmar compra" />
      </div>
    </div>
  );
}