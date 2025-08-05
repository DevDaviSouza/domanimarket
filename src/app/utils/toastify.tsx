import { toast } from "react-toastify";

export default class Toasts {
  
  itemAdicionado() {
    toast.success("Item adicionado ao carrinho!");
  }

  limparCarrinho() {
    toast.info("Carrinho limpo.");
  }

  limparCarrinhoVazio() {
    toast.error("Seu carrinho já está vazio.");
  }

  itemRemovido() {
    toast.info("Item removido do carrinho.");
 } 

  compraFinalizadaComSucesso() {
    toast.success("Compra realizada com sucesso!");
 }

 compraFinalizadaSemItem() {
    toast.error("Não há itens no carrinho!");
 }
}