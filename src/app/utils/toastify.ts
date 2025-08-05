import { toast } from "react-toastify";

// Classe Toasts para gerenciar notificações de toast
// Contém métodos para exibir diferentes tipos de mensagens ao usuário
export default class Toasts {
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