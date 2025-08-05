//Interface usada mais de uma vez no projeto, para manter a consistência e evitar duplicação de código.
export default interface ItemCarrinho {
  id: string;
  quantidade: number;
  [key: string]: any;
}