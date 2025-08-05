export interface ProdutoProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Função para buscar produtos da API
export async function Api() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data: ProdutoProps[] = await response.json();
  
  return data;
}