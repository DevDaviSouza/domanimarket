export default interface CartItem {
  id: string;
  quantidade: number;
  preco: number;
  [key: string]: any;
}