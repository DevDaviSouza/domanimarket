export interface ProdutoProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export async function Api() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data: ProdutoProps[] = await response.json();
  
  return data;
}